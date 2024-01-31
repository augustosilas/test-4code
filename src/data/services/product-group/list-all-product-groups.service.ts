import { Inject, Injectable } from '@nestjs/common';
import { ProductGroupRepository } from '../../protocols/repositories/product-group';
import { ListAllProductGroups } from 'src/domain/services/product-group';

@Injectable()
export class ListAllProductGroupsService implements ListAllProductGroups {
  constructor(
    @Inject('ProductGroupRepository')
    private readonly productGroupRepository: ProductGroupRepository,
  ) { }

  async listAll(): Promise<ListAllProductGroups.Output> {
    return this.productGroupRepository.listAll();
  }
}
