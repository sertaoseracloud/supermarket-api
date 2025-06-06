import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FidelidadeService } from './fidelidade.service';
import { Fidelidade } from '@prisma/client';

@Controller('fidelidade')
export class FidelidadeController {
  constructor(private readonly fidelidadeService: FidelidadeService) {}

  @Post()
  create(
    @Body()
    createFidelidadeDto: {
      clienteId: number;
      pontos?: number;
      nivel?: string;
    },
  ) {
    return this.fidelidadeService.create(createFidelidadeDto);
  }

  @Get()
  findAll() {
    return this.fidelidadeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fidelidadeService.findOne(Number(id));
  }

  @Get('cliente/:clienteId')
  findByCliente(@Param('clienteId') clienteId: string) {
    return this.fidelidadeService.findByCliente(Number(clienteId));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFidelidadeDto: Partial<Fidelidade>,
  ) {
    return this.fidelidadeService.update(Number(id), updateFidelidadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fidelidadeService.remove(Number(id));
  }
}
