import { Inject, Injectable } from '@nestjs/common';
import { DeleteProduct } from '../../../domain/services/product';
import { ProductRepository } from '../../protocols/repositories/product';
import { RequiredFieldError, NotFoundProductError } from 'src/domain/errors';

@Injectable()
export class DeleteProductService implements DeleteProduct {
  constructor(
    @Inject('ProductRepository')
    private readonly productRepository: ProductRepository,
  ) { }

  async delete(input: DeleteProduct.Input): Promise<void> {
    if (!input.id) throw new RequiredFieldError('id');

    const exist = await this.productRepository.findById(input);
    if (!exist) throw new NotFoundProductError();

    await this.productRepository.delete(input);
  }
}
