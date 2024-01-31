import { Injectable } from '@nestjs/common';
import {
  ProductRepository,
  InputCreate,
  InputDelete,
  InputFindById,
  InputListAllByGroup,
  InputUpdate,
  OutputCreate,
  OutputFindById,
  OutputListAllByGroup,
} from 'src/data/protocols/repositories/product';

@Injectable()
export class InMemoryProduct implements ProductRepository {
  private products: {
    id: number;
    name: string;
    price: number;
    groupId: number;
  }[];

  private counter: number;

  constructor() {
    this.products = [];
    this.counter = 1;
  }

  async create(input: InputCreate): Promise<OutputCreate> {
    const product = {
      ...input,
      id: this.counter++,
    };

    this.products.push(product);

    return { id: product.id };
  }

  async update(input: InputUpdate): Promise<void> {
    const indexGroup = this.products.findIndex(({ id }) => id === input.id);
    this.products[indexGroup].name = input.name;
  }

  async findById(input: InputFindById): Promise<OutputFindById> {
    return this.products.find(({ id }) => id === input.id);
  }

  async listAllByProductGroupId(
    input: InputListAllByGroup,
  ): Promise<OutputListAllByGroup> {
    return this.products.filter(
      ({ groupId }) => input.productGroupId === groupId,
    );
  }

  async delete(input: InputDelete): Promise<void> {
    this.products = [...this.products.filter(({ id }) => id !== input.id)];
  }
}
