export interface CreateProductGroup {
  create(input: CreateProductGroup.Input): Promise<CreateProductGroup.Output>;
}

export namespace CreateProductGroup {
  export type Input = {
    name: string;
  };

  export type Output = {
    id: number;
  };
}

export interface UpdateProductGroup {
  update(input: UpdateProductGroup.Input): Promise<UpdateProductGroup.Output>;
}

export namespace UpdateProductGroup {
  export type Input = {
    id: number;
    name?: string;
  };

  export type Output = void;
}

export interface ListAllProductGroups {
  listAll(): Promise<ListAllProductGroups.Output>;
}

export namespace ListAllProductGroups {
  export type Output = Array<{
    id: number;
    name: string;
  }>;
}

export interface FindProductGroupById {
  findById(
    input: FindProductGroupById.Input,
  ): Promise<FindProductGroupById.Output>;
}

export namespace FindProductGroupById {
  export type Input = {
    id: number;
  };

  export type Output = {
    id: number;
    name: string;
  };
}

export interface DeleteProductGroup {
  delete(input: DeleteProductGroup.Input): Promise<DeleteProductGroup.Output>;
}

export namespace DeleteProductGroup {
  export type Input = {
    id: number;
  };

  export type Output = void;
}
