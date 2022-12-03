import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Mapper } from '@automapper/core';
import { VaccineSummaryRequestDto } from './dto/vacinne-summary-request-dto';
import { InjectMapper } from '@automapper/nestjs';
import { VaccineRepository } from './db/vaccine-repository';

@Injectable()
export class VaccineService {

    constructor(
      @InjectMapper() private readonly mapper: Mapper,
      private readonly repository: VaccineRepository
    ) {}

    async getVaccineInformation (dto: VaccineSummaryRequestDto) {
        let arr;
        arr = await this.repository.getVaccineSummaryResult(dto.c, dto.dateFrom, dto.dateTo, dto.sort);

        return arr;
      // MongoServerError: $group does not support inclusion-style expressions
        //     at Connection.onMessage (/Users/vova/Documents/Code/vklymniuk-lambda-skelton/nestjs/03_covid/app/node_modules/mongodb/src/cmap/connection.ts:438:20)
        //     at MessageStream.<anonymous> (/Users/vova/Documents/Code/vklymniuk-lambda-skelton/nestjs/03_covid/app/node_modules/mongodb/src/cmap/connection.ts:256:56)
        //     at MessageStream.emit (node:events:513:28)
        //     at processIncomingData (/Users/vova/Documents/Code/vklymniuk-lambda-skelton/nestjs/03_covid/app/node_modules/mongodb/src/cmap/message_stream.ts:193:14)
        //     at MessageStream._write (/Users/vova/Documents/Code/vklymniuk-lambda-skelton/nestjs/03_covid/app/node_modules/mongodb/src/cmap/message_stream.ts:70:5)
        //     at writeOrBuffer (node:internal/streams/writable:392:12)
        //     at _write (node:internal/streams/writable:333:10)
        //     at MessageStream.Writable.write (node:internal/streams/writable:337:10)
        //     at Socket.ondata (node:internal/streams/readable:766:22)
        //     at Socket.emit (node:events:513:28)
      // query
      // all elements must be transformed before passing to next level processing according
      // the internal domain logic needs

      // this.repository.getSomeResult(
      //     query.c, // ReportingCountry
      //     query.dateFrom, // do some formating
      //     query.dateTo // do some formating
      //     query.rangeSize // count of elements inside the agg group
      //     query.sort // some sort styaff
      // );

      // await and remap or pass outside?
      // this.repository.get();
    }

  getMethod(): string {
    return 'tu43rturjuf';
  }
}
