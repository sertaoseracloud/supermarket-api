import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NotasService } from './notas.service';
import { Nota } from '@prisma/client';

@Controller('notas')
export class NotasController {
  constructor(private readonly notasService: NotasService) {}

  @Post()
  create(@Body() createNotaDto: Omit<Nota, 'id'>) {
    return this.notasService.create(createNotaDto);
  }

  @Get()
  findAll() {
    return this.notasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notasService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNotaDto: Partial<Nota>) {
    return this.notasService.update(Number(id), updateNotaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notasService.remove(Number(id));
  }
}
