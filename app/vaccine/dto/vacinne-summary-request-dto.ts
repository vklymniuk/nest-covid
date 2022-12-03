import { IsIn, IsInt, IsNotEmpty, IsObject, IsString } from 'class-validator';
import { AutoMap } from '@automapper/classes';

//   // @Param('c') c: string,
//   // @Param('dateFrom') dateFrom: string,
//   // @Param('dateTo') dateTo: string,
//   // @Param('rangeSize') rangeSize: number,
//   // @Param('sort') sort: string[]
export class VaccineSummaryRequestDto {
    // @IsString()
    c?: string = null;

    // @IsInt()
    // @
    rangeSize?: number = null;

    // @IsString()
    dateFrom?: string = null;

    // @IsString()
    dateTo?: string = null;

    // @IsObject()
    sort?: object = null;
}
//   c: string;
//   dateFrom: string;
//   dateTo: string;
//   rangeSize: number;
//   sort: object;
//   // c, country code to get report for
//   // dateFrom, yyyy-Www, eg. 2020-W10 (Including)
//   // dateTo, yyyy-Www, eg, 2020-W20 (Excluding)
//   // rangeSize, number, eg, the period
//   // sort, either by NumberDosesReceived[descending] or weekStart[ascending]
// }