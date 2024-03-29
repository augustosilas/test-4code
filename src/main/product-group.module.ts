import { Module, forwardRef } from '@nestjs/common';
import {
  CreateProductGroupService,
  DeleteProductGroupService,
  FindProductGroupByIdService,
  ListAllProductGroupsService,
  UpdateProductGroupService,
} from 'src/data/services/product-group';
import { InMemoryProductGroup } from 'src/infra/repo/in-memory-product-group';
import { ProductGroupController } from 'src/presentation/controllers/product-group.controller';
import { ProductModule } from './product.module';

@Module({
  controllers: [ProductGroupController],
  providers: [
    {
      provide: 'CreateProductGroupService',
      useClass: CreateProductGroupService,
    },
    {
      provide: 'ListAllProductGroupsService',
      useClass: ListAllProductGroupsService,
    },
    {
      provide: 'FindProductGroupByIdService',
      useClass: FindProductGroupByIdService,
    },
    {
      provide: 'UpdateProductGroupService',
      useClass: UpdateProductGroupService,
    },
    {
      provide: 'DeleteProductGroupService',
      useClass: DeleteProductGroupService,
    },
    {
      provide: 'ProductGroupRepository',
      useClass: InMemoryProductGroup,
    },
  ],
  exports: [
    {
      provide: 'ProductGroupRepository',
      useClass: InMemoryProductGroup,
    },
  ],
  imports: [forwardRef(() => ProductModule)],
})
export class ProductGroupModule { }
