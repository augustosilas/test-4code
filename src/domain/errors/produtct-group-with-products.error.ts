export class ProductGroupWithProductsError extends Error {
  constructor() {
    super(
      'It is not possible to delete, as there are products associated with this group',
    );
    this.name = 'ProductGroupWithProductsError';
  }
}
