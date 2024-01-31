import { Module } from '@nestjs/common';
import { ProductGroupModule } from './main/product-group.module';
import { ProductModule } from './main/product.module';

@Module({
  imports: [ProductGroupModule, ProductModule],
})
export class AppModule { }
