import { Inject, Injectable } from '@nestjs/common';
import { ListAllProductsByProductGroupId } from '../../../domain/services/product';
import { ProductRepository } from '../../protocols/repositories/product';

@Injectable()
export class ListAllProductsByProductGroupIdService
  implements ListAllProductsByProductGroupId {
  constructor(
    @Inject('ProductRepository')
    private readonly productRepository: ProductRepository,
  ) { }
  async listAllByProductGroupId(
    input: ListAllProductsByProductGroupId.Input,
  ): Promise<ListAllProductsByProductGroupId.Output> {
    return this.productRepository.listAllByProductGroupId(input);
  }
}
