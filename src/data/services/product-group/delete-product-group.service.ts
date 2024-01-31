import { Inject, Injectable } from '@nestjs/common';
import { ProductGroupRepository } from '../../protocols/repositories/product-group';
import { DeleteProductGroup } from 'src/domain/services/product-group';
import {
  RequiredFieldError,
  NotFoundProductGroupError,
} from 'src/domain/errors';

@Injectable()
export class DeleteProductGroupService implements DeleteProductGroup {
  constructor(
    @Inject('ProductGroupRepository')
    private readonly productGroupRepository: ProductGroupRepository,
  ) { }

  async delete(input: DeleteProductGroup.Input): Promise<void> {
    if (!input.id) throw new RequiredFieldError('id');

    const exist = await this.productGroupRepository.findById({ id: input.id });
    if (!exist) throw new NotFoundProductGroupError();

    await this.productGroupRepository.delete(input);
  }
}
