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
import { CreateProductGroupDTO } from '../dtos/product-group/create-product-group.dto';
import {
  CreateProductGroup,
  DeleteProductGroup,
  FindProductGroupById,
  ListAllProductGroups,
  UpdateProductGroup,
} from 'src/domain/services/product-group';
import { UpdateProductGroupDTO } from '../dtos/product-group/update-product-group.dto';

@Controller('product-group')
export class ProductGroupController {
  constructor(
    @Inject('CreateProductGroupService')
    private readonly createProductGroupService: CreateProductGroup,
    @Inject('ListAllProductGroupsService')
    private readonly listAllProductGroupsService: ListAllProductGroups,
    @Inject('FindProductGroupByIdService')
    private readonly findProductGroupByIdService: FindProductGroupById,
    @Inject('UpdateProductGroupService')
    private readonly updateProductGroupService: UpdateProductGroup,
    @Inject('DeleteProductGroupService')
    private readonly deleteProductGroupService: DeleteProductGroup,
  ) { }

  @Post()
  create(@Body() body: CreateProductGroupDTO) {
    return this.createProductGroupService.create(body);
  }

  @Get()
  listAll() {
    return this.listAllProductGroupsService.listAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.findProductGroupByIdService.findById({ id: Number(id) });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateProductGroupDTO) {
    return this.updateProductGroupService.update({
      id: Number(id),
      name: body.name,
    });
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.deleteProductGroupService.delete({ id: Number(id) });
  }
}
