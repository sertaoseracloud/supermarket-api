import { Injectable } from '@nestjs/common';
import { PrismaClient, Nota } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class NotasService {
  async create(data: Omit<Nota, 'id'>): Promise<Nota> {
    return prisma.nota.create({ data });
  }

  async findAll(): Promise<Nota[]> {
    return prisma.nota.findMany({
      include: {
        funcionario: true,
        product: true,
        cliente: true,
      },
    });
  }

  async findOne(id: number): Promise<Nota | null> {
    return prisma.nota.findUnique({
      where: { id },
      include: {
        funcionario: true,
        product: true,
        cliente: true,
      },
    });
  }

  async update(id: number, data: Partial<Nota>): Promise<Nota> {
    return prisma.nota.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Nota> {
    return prisma.nota.delete({ where: { id } });
  }
}
