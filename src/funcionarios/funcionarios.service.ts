import { Injectable } from '@nestjs/common';
import { PrismaClient, Funcionario } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class FuncionariosService {
  async create(
    data: Omit<Funcionario, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Funcionario> {
    return prisma.funcionario.create({ data });
  }

  async findAll(): Promise<Funcionario[]> {
    return prisma.funcionario.findMany({ include: { notas: true } });
  }

  async findOne(id: number): Promise<Funcionario | null> {
    return prisma.funcionario.findUnique({
      where: { id },
      include: { notas: true },
    });
  }

  async update(id: number, data: Partial<Funcionario>): Promise<Funcionario> {
    return prisma.funcionario.update({ where: { id }, data });
  }

  async remove(id: number): Promise<Funcionario> {
    return prisma.funcionario.delete({ where: { id } });
  }
}
