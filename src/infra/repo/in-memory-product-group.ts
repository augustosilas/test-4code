import { Injectable } from '@nestjs/common';
import { ProductGroupRepository } from 'src/data/protocols/repositories/product-group';

@Injectable()
export class InMemoryProductGroup implements ProductGroupRepository {
  private groups: {
    id: number;
    name: string;
  }[];
  private counter: number;

  constructor() {
    this.groups = [];
    this.counter = 1;
  }

  async create(
    input: ProductGroupRepository.InputCreate,
  ): Promise<ProductGroupRepository.OutputCreate> {
    const group = {
      ...input,
      id: this.counter++,
    };

    this.groups.push(group);

    return { id: group.id };
  }

  async update(
    input: ProductGroupRepository.InputUpdate,
  ): Promise<ProductGroupRepository.OutputUpdate> {
    const indexGroup = this.groups.findIndex(({ id }) => id === input.id);
    this.groups[indexGroup].name = input.name;
  }

  async findById(
    input: ProductGroupRepository.InputFindById,
  ): Promise<ProductGroupRepository.OutputFindById> {
    return this.groups.find(({ id }) => id === input.id);
  }

  async listAll(): Promise<ProductGroupRepository.OutputListAll> {
    return this.groups;
  }

  async delete(input: ProductGroupRepository.InputDelete): Promise<void> {
    this.groups = [...this.groups.filter(({ id }) => id !== input.id)];
  }
}
