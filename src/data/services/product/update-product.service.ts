import { Inject, Injectable } from '@nestjs/common';
import { UpdateProduct } from '../../../domain/services/product';
import { ProductRepository } from '../../protocols/repositories/product';
import { ProductGroupRepository } from 'src/data/protocols/repositories/product-group';
import {
  RequiredFieldError,
  NotFoundProductError,
  NotFoundProductGroupError,
} from 'src/domain/errors';

@Injectable()
export class UpdateProductService implements UpdateProduct {
  constructor(
    @Inject('ProductRepository')
    private readonly productRepository: ProductRepository,
    @Inject('ProductGroupRepository')
    private readonly productGroupRepository: ProductGroupRepository,
  ) { }

  async update(input: UpdateProduct.Input): Promise<void> {
    if (!input.id) throw new RequiredFieldError('id');

    const product = await this.productRepository.findById({ id: input.id });
    if (!product) throw new NotFoundProductError();

    const productGroup = await this.productGroupRepository.findById({
      id: input.groupId,
    });

    if (!productGroup) throw new NotFoundProductGroupError();

    await this.productRepository.update(input);
  }
}
