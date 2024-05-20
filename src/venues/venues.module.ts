import { Module } from '@nestjs/common';
import { VenuesController } from './venues.controller';
import { VenuesService } from './venues.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [VenuesController],
  providers: [VenuesService, PrismaService],
})
export class VenuesModule {}
