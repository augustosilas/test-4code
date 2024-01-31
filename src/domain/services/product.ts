export interface CreateProduct {
  create(input: CreateProduct.Input): Promise<CreateProduct.Output>;
}

export namespace CreateProduct {
  export type Input = {
    name: string;
    price: number;
    groupId: number;
  };

  export type Output = {
    id: number;
  };
}

export interface UpdateProduct {
  update(input: UpdateProduct.Input): Promise<UpdateProduct.Output>;
}

export namespace UpdateProduct {
  export type Input = {
    id: number;
    groupId: number;
    name?: string;
    price?: number;
  };

  export type Output = void;
}

export interface FindProductById {
  findById(input: FindProductById.Input): Promise<FindProductById.Output>;
}

export namespace FindProductById {
  export type Input = {
    id: number;
  };

  export type Output = {
    id: number;
    name: string;
    price: number;
    groupId: number;
  };
}

export interface ListAllProductsByProductGroupId {
  listAllByProductGroupId(
    input: ListAllProductsByProductGroupId.Input,
  ): Promise<ListAllProductsByProductGroupId.Output>;
}

export namespace ListAllProductsByProductGroupId {
  export type Input = {
    productGroupId: number;
  };

  export type Output = Array<{
    id: number;
    name: string;
    price: number;
    groupId: number;
  }>;
}

export interface DeleteProduct {
  delete(input: DeleteProduct.Input): Promise<DeleteProduct.Output>;
}

export namespace DeleteProduct {
  export type Input = {
    id: number;
  };

  export type Output = void;
}
