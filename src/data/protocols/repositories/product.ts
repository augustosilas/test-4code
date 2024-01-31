export interface ProductRepository {
  create(input: InputCreate): Promise<OutputCreate>;
  update(input: InputUpdate): Promise<OutputUpdate>;
  findById(input: InputFindById): Promise<OutputFindById | undefined>;
  listAllByProductGroupId(
    input: InputListAllByGroup,
  ): Promise<OutputListAllByGroup | undefined>;
  delete(input: InputDelete): Promise<OutputDelete>;
}

export type InputCreate = {
  name: string;
  price: number;
  groupId: number;
};
export type OutputCreate = { id: number };

export type InputUpdate = {
  id: number;
  name?: string;
  price?: number;
  groupId?: number;
};
export type OutputUpdate = void;

export type InputFindById = {
  id: number;
};
export type OutputFindById = {
  id: number;
  name: string;
  price: number;
  groupId: number;
};

export type InputListAllByGroup = {
  productGroupId: number;
};
export type OutputListAllByGroup = Array<{
  id: number;
  name: string;
  price: number;
  groupId: number;
}>;

export type InputDelete = {
  id: number;
};
export type OutputDelete = void;
