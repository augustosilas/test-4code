export class NotFoundProductGroupError extends Error {
  constructor() {
    super('Not found product group');
    this.name = 'NotFoundProductGroupError';
  }
}
