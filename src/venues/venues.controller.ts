import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { VenuesService } from './venues.service';
import { Venue } from '@prisma/client';

@Controller('venues')
export class VenuesController {
  constructor(private readonly venuesService: VenuesService) {}

  @Get()
  getAllVenues(): Promise<Venue[]> {
    return this.venuesService.findAll();
  }

  @Get(':id')
  getVenue(@Param('id') id: number): Promise<Venue> {
    return this.venuesService.findOne(id);
  }

  @Post()
  createVenue(@Body() venue: Venue): Promise<Venue> {
    return this.venuesService.create(venue);
  }

  @Put(':id')
  updateVenue(@Param('id') id: number, @Body() venue: Venue): Promise<Venue> {
    return this.venuesService.update(id, venue);
  }

  @Delete(':id')
  deleteVenue(@Param('id') id: number): Promise<void> {
    return this.venuesService.delete(id);
  }
}
