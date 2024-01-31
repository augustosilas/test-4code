import { Inject, Injectable } from '@nestjs/common';
import { ProductGroupRepository } from '../../protocols/repositories/product-group';
import { CreateProductGroup } from 'src/domain/services/product-group';
import { RequiredFieldError } from 'src/domain/errors';

@Injectable()
export class CreateProductGroupService implements CreateProductGroup {
  constructor(
    @Inject('ProductGroupRepository')
    private readonly productGroupRepository: ProductGroupRepository,
  ) { }

  async create(
    input: CreateProductGroup.Input,
  ): Promise<CreateProductGroup.Output> {
    if (!input.name) throw new RequiredFieldError('name');

    return this.productGroupRepository.create(input);
  }
}
