import { Injectable } from '@nestjs/common';
import { PrismaClient, Product } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ProductsService {
  async create(
    data: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Product> {
    return prisma.product.create({ data });
  }

  async findAll(): Promise<Product[]> {
    return prisma.product.findMany();
  }

  async findOne(id: number): Promise<Product | null> {
    return prisma.product.findUnique({ where: { id } });
  }

  async update(id: number, data: Partial<Product>): Promise<Product> {
    return prisma.product.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Product> {
    return prisma.product.delete({ where: { id } });
  }
}
