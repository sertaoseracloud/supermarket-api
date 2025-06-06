import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FuncionariosService } from './funcionarios.service';
import { Funcionario } from '@prisma/client';

@Controller('funcionarios')
export class FuncionariosController {
  constructor(private readonly funcionariosService: FuncionariosService) {}

  @Post()
  create(
    @Body()
    createFuncionarioDto: Omit<Funcionario, 'id' | 'createdAt' | 'updatedAt'>,
  ) {
    return this.funcionariosService.create(createFuncionarioDto);
  }

  @Get()
  findAll() {
    return this.funcionariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.funcionariosService.findOne(Number(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFuncionarioDto: Partial<Funcionario>,
  ) {
    return this.funcionariosService.update(Number(id), updateFuncionarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.funcionariosService.remove(Number(id));
  }
}
