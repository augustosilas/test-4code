import { Inject, Injectable } from '@nestjs/common';
import { CreateProduct } from '../../../domain/services/product';
import { ProductRepository } from '../../protocols/repositories/product';
import { ProductGroupRepository } from '../../protocols/repositories/product-group';
import {
  RequiredFieldError,
  InvalidFieldError,
  NotFoundProductGroupError,
} from 'src/domain/errors';

@Injectable()
export class CreateProductService implements CreateProduct {
  constructor(
    @Inject('ProductRepository')
    private readonly productRepository: ProductRepository,
    @Inject('ProductGroupRepository')
    private readonly productGroupRepository: ProductGroupRepository,
  ) { }

  async create(input: CreateProduct.Input): Promise<CreateProduct.Output> {
    if (!input.groupId) throw new RequiredFieldError('groupId');

    const productGroup = await this.productGroupRepository.findById({
      id: input.groupId,
    });

    if (!productGroup) throw new NotFoundProductGroupError();

    if (input.price < 0) throw new InvalidFieldError('price');

    return this.productRepository.create(input);
  }
}
