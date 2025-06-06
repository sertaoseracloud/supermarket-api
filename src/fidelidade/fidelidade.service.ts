import { Injectable } from '@nestjs/common';
import { PrismaClient, Fidelidade } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class FidelidadeService {
  async create(data: {
    clienteId: number;
    pontos?: number;
    nivel?: string;
  }): Promise<Fidelidade> {
    return prisma.fidelidade.create({ data });
  }

  async findAll(): Promise<Fidelidade[]> {
    return prisma.fidelidade.findMany({ include: { cliente: true } });
  }

  async findOne(id: number): Promise<Fidelidade | null> {
    return prisma.fidelidade.findUnique({
      where: { id },
      include: { cliente: true },
    });
  }

  async findByCliente(clienteId: number): Promise<Fidelidade | null> {
    return prisma.fidelidade.findUnique({
      where: { clienteId },
      include: { cliente: true },
    });
  }

  async update(id: number, data: Partial<Fidelidade>): Promise<Fidelidade> {
    return prisma.fidelidade.update({ where: { id }, data });
  }

  async remove(id: number): Promise<Fidelidade> {
    return prisma.fidelidade.delete({ where: { id } });
  }
}
