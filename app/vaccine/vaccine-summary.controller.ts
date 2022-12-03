import { Controller, Headers, UseGuards, Query, Get, Post, Put, Body, Inject, Param } from '@nestjs/common';
import { VaccineService } from './vaccine.service';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { VaccineSummaryRequestDto } from './dto/vacinne-summary-request-dto';

@Controller('vaccine-summary')
export class VaccineSummaryController {

    constructor(
        @InjectMapper() private readonly mapper: Mapper,
        private readonly vaccineService: VaccineService
    ) {}

    @Get('/')
    async getSomething(
        @Headers() headers,
        @Query() dto: VaccineSummaryRequestDto,
    ) {
      let res = await this.vaccineService.getVaccineInformation(dto);
      //  "year-week": { $split: ['$YearWeekISO', "-W"]},


      // await this.vaccineService.getMethod
      // const co = query.c;
      // @Param('c') c: string,
      // @Param('dateFrom') dateFrom: string,
      // @Param('dateTo') dateTo: string,
      // @Param('rangeSize') rangeSize: number,
      // @Param('sort') sort: string[]
      // const dto = new VaccineQueryDto(c, dateFrom, dateTo, rangeSize, sort);
      // @Headers() headers, // for rate limiting
      // @Param('c') c: string,
      // @Param('dateFrom') dateFrom: string,
      // @Param('dateTo') dateTo: string,
      // @Param('rangeSize') rangeSize: number,
      // @Param('sort') sort: number

      // return this.mapper.map(
      //   await this.vaccineService.getMethod(),
      //   // interface A
      //   // interface B
      // );
      return {
          "msg": 123,
          "res": res
      };
    }

  //     @Get('/')
  //     async dosomeshit() {
  //     }

  //     @Post('/')
  //     //@UseGuards(JwtAuthServerGuard)
  //     async dosomeshit(@Body() inputL ) {
  //     }

}