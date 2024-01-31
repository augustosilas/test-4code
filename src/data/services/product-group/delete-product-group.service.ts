import { Inject, Injectable } from '@nestjs/common';
import { ProductGroupRepository } from '../../protocols/repositories/product-group';
import { DeleteProductGroup } from 'src/domain/services/product-group';
import {
  RequiredFieldError,
  NotFoundProductGroupError,
  ProductGroupWithProductsError,
} from 'src/domain/errors';
import { ProductRepository } from 'src/data/protocols/repositories/product';

@Injectable()
export class DeleteProductGroupService implements DeleteProductGroup {
  constructor(
    @Inject('ProductGroupRepository')
    private readonly productGroupRepository: ProductGroupRepository,
    @Inject('ProductRepository')
    private readonly productRepository: ProductRepository,
  ) { }

  async delete(input: DeleteProductGroup.Input): Promise<void> {
    if (!input.id) throw new RequiredFieldError('id');

    const productGroup = await this.productGroupRepository.findById({
      id: input.id,
    });
    if (!productGroup) throw new NotFoundProductGroupError();

    const products = await this.productRepository.listAllByProductGroupId({
      productGroupId: input.id,
    });

    if (products.length) throw new ProductGroupWithProductsError();

    await this.productGroupRepository.delete(input);
  }
}
