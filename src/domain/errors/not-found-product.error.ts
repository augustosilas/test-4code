export class NotFoundProductError extends Error {
  constructor() {
    super('Not found product');
    this.name = 'NotFoundProductError';
  }
}
