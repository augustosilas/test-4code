import { Inject, Injectable } from '@nestjs/common';
import { FindProductById } from '../../../domain/services/product';
import { ProductRepository } from '../../protocols/repositories/product';

@Injectable()
export class FindProductByIdService implements FindProductById {
  constructor(
    @Inject('ProductRepository')
    private readonly productRepository: ProductRepository,
  ) { }

  async findById(
    input: FindProductById.Input,
  ): Promise<FindProductById.Output> {
    return this.productRepository.findById(input);
  }
}
