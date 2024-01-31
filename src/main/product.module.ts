import { Module } from '@nestjs/common';
import {
  CreateProductService,
  FindProductByIdService,
  UpdateProductService,
  DeleteProductService,
  ListAllProductsByProductGroupIdService,
} from 'src/data/services/product';
import { ProductController } from 'src/presentation/controllers/product.controller';
import { ProductGroupModule } from './product-group.module';
import { InMemoryProduct } from 'src/infra/repo/in-memory-product';

@Module({
  controllers: [ProductController],
  providers: [
    {
      provide: 'CreateProductService',
      useClass: CreateProductService,
    },
    {
      provide: 'FindProductByIdService',
      useClass: FindProductByIdService,
    },
    {
      provide: 'UpdateProductService',
      useClass: UpdateProductService,
    },
    {
      provide: 'DeleteProductService',
      useClass: DeleteProductService,
    },
    {
      provide: 'ListAllProductsByProductGroupIdService',
      useClass: ListAllProductsByProductGroupIdService,
    },
    {
      provide: 'ProductRepository',
      useClass: InMemoryProduct,
    },
  ],
  imports: [ProductGroupModule],
})
export class ProductModule { }
