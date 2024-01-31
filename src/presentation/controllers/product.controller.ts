import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateProductDTO } from '../dtos/product/create-product.dto';
import {
  CreateProduct,
  DeleteProduct,
  FindProductById,
  ListAllProductsByProductGroupId,
  UpdateProduct,
} from 'src/domain/services/product';
import { UpdateProductDTO } from '../dtos/product/update-product.dto';

@Controller()
export class ProductController {
  constructor(
    @Inject('CreateProductService')
    private readonly createProductService: CreateProduct,
    @Inject('FindProductByIdService')
    private readonly findProductByIdService: FindProductById,
    @Inject('UpdateProductService')
    private readonly updateProductService: UpdateProduct,
    @Inject('DeleteProductService')
    private readonly deleteProductService: DeleteProduct,
    @Inject('ListAllProductsByProductGroupIdService')
    private readonly listAllProductsByProductGroupIdService: ListAllProductsByProductGroupId,
  ) { }

  @Post('/product-group/:productGroupId/product')
  create(
    @Param('productGroupId') productGroupId: string,
    @Body() body: CreateProductDTO,
  ) {
    return this.createProductService.create({
      ...body,
      groupId: Number(productGroupId),
    });
  }

  @Get('/product-group/:productGroupId/product/:productId')
  findById(@Param('productId') productId: string) {
    return this.findProductByIdService.findById({ id: Number(productId) });
  }

  @Patch('/product-group/:productGroupId/product/:productId')
  update(
    @Param('productId') productId: string,
    @Param('productGroupId') productGroupId: string,
    @Body() body: UpdateProductDTO,
  ) {
    return this.updateProductService.update({
      id: Number(productId),
      groupId: Number(productGroupId),
      ...body,
    });
  }

  @Delete('/product-group/:productGroupId/product/:productId')
  delete(@Param('productId') id: string) {
    return this.deleteProductService.delete({ id: Number(id) });
  }

  @Get('/product-group/:productGroupId/product')
  listAllByProductGroupId(@Param('productGroupId') productGroupId: string) {
    return this.listAllProductsByProductGroupIdService.listAllByProductGroupId({
      productGroupId: Number(productGroupId),
    });
  }
}
