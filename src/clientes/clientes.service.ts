import { Injectable } from '@nestjs/common';
import { PrismaClient, Cliente } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ClientesService {
  async create(
    data: Omit<Cliente, 'id' | 'createdAt' | 'updatedAt' | 'fidelidade'>,
  ): Promise<Cliente> {
    const cliente = await prisma.cliente.create({ data });
    // Cria fidelidade para o novo cliente
    await prisma.fidelidade.create({ data: { clienteId: cliente.id } });
    return cliente;
  }

  async findAll(): Promise<Cliente[]> {
    return prisma.cliente.findMany({
      include: { fidelidade: true, notas: true },
    });
  }

  async findOne(id: number): Promise<Cliente | null> {
    return prisma.cliente.findUnique({
      where: { id },
      include: { fidelidade: true, notas: true },
    });
  }

  async update(id: number, data: Partial<Cliente>): Promise<Cliente> {
    return prisma.cliente.update({ where: { id }, data });
  }

  async remove(id: number): Promise<Cliente> {
    return prisma.cliente.delete({ where: { id } });
  }
}
