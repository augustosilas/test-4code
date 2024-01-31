import { Inject, Injectable } from '@nestjs/common';
import { ProductGroupRepository } from '../../protocols/repositories/product-group';
import { FindProductGroupById } from 'src/domain/services/product-group';
import { RequiredFieldError } from 'src/domain/errors';

@Injectable()
export class FindProductGroupByIdService implements FindProductGroupById {
  constructor(
    @Inject('ProductGroupRepository')
    private readonly productGroupRepository: ProductGroupRepository,
  ) { }

  async findById(
    input: FindProductGroupById.Input,
  ): Promise<FindProductGroupById.Output> {
    if (!input.id) throw new RequiredFieldError('id');

    return this.productGroupRepository.findById(input);
  }
}
