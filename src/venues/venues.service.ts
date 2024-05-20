import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Venue, Prisma } from '@prisma/client';

@Injectable()
export class VenuesService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<Venue[]> {
    return this.prisma.venue.findMany();
  }

  findOne(id: number): Promise<Venue | null> {
    return this.prisma.venue.findUnique({
      where: { id },
    });
  }

  create(data: Prisma.VenueCreateInput): Promise<Venue> {
    return this.prisma.venue.create({
      data,
    });
  }

  update(id: number, data: Prisma.VenueUpdateInput): Promise<Venue> {
    return this.prisma.venue.update({
      where: { id },
      data,
    });
  }

  delete(id: number): Promise<Venue> {
    return this.prisma.venue.delete({
      where: { id },
    });
  }
}
