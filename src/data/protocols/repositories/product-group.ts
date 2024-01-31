export interface ProductGroupRepository {
  create(
    input: ProductGroupRepository.InputCreate,
  ): Promise<ProductGroupRepository.OutputCreate>;

  update(
    input: ProductGroupRepository.InputUpdate,
  ): Promise<ProductGroupRepository.OutputUpdate>;

  findById(
    input: ProductGroupRepository.InputFindById,
  ): Promise<ProductGroupRepository.OutputFindById | undefined>;

  listAll(): Promise<ProductGroupRepository.OutputListAll>;

  delete(
    input: ProductGroupRepository.InputDelete,
  ): Promise<ProductGroupRepository.OutputDelete>;
}

export namespace ProductGroupRepository {
  export type InputCreate = {
    name: string;
  };
  export type OutputCreate = { id: number };

  export type InputUpdate = {
    id: number;
    name?: string;
  };
  export type OutputUpdate = void;

  export type InputFindById = {
    id: number;
  };
  export type OutputFindById = {
    id: number;
    name: string;
  };

  export type OutputListAll = Array<{
    id: number;
    name: string;
  }>;

  export type InputDelete = {
    id: number;
  };
  export type OutputDelete = void;
}
