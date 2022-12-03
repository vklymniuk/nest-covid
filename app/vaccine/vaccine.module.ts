import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { VaccineSummaryController } from './vaccine-summary.controller';
import { VaccineService } from './vaccine.service';
import { VaccineRepository } from '../vaccine/db/vaccine-repository';
import { VaccineSchema } from './db/vaccination.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{
        name: 'Vaccine',
        schema: VaccineSchema,
     }]),
  ],
  controllers: [ VaccineSummaryController ],
  providers: [ VaccineRepository, VaccineService ],
})

export class VaccineModule {}
