import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectMapper } from '@automapper/nestjs';
import { Model } from 'mongoose';
import { Mapper } from '@automapper/core';
import { Vaccine } from '../interface/vaccine.interface';

@Injectable()
export class VaccineRepository {
    constructor(@InjectModel('Vaccine') private readonly vaccineCollection: Model<Vaccine>) {}

    async getVaccineSummaryResult(country?:string, dateFrom?: string, dateTo?: string, sort?: object) {
    // ): Promise<Array[]> {
        // let aggFilter = { "NumberDosesReceived": { "$ne": "0" } };
        // let aggGroup = {
        //     "$group":  {
        //         _id: { $dateToString: { format: "%Y-%m-%d", date: "$YearWeekISO" } },
        //         NumberDosesReceived: {
        //             "$sum": "$NumberDosesReceived"
        //         },
        //     }
        // };

        // let aggGroup = {
        //     "$group":  {
        //         _id: { $dateToString: { format: "%Y-%m-%d", date: "$YearWeekISO" } },
        //         NumberDosesReceived: {
        //             "$sum": 1
        //         },
        //     }
        // };
        // let aggGroup = { "$group":  { _id: { "a": 1 } }, NumberDosesReceived: { "$sum": 1 }, };

        if (typeof country == "undefined") {
            country = null;
        }

        if (typeof dateFrom == "undefined") {
            dateFrom = null;
        }

        if (typeof dateTo == "undefined") {
            dateTo = null;
        }

        if (typeof sort == "undefined") {
            sort = { "NumberDosesReceived": "descending" };
        }

        // switch (true) {
        //     case (null !== country):
        //         aggFilter["$match"]["ReportingCountry"] = { "$eq": country };
        //     case (null !== dateFrom && dateTo !== null):
        //         aggFilter["$match"]["YearWeekISO"] = { "$gte": dateFrom, "$lt": dateTo };
        //     break;
        //     case (null !== dateFrom && dateTo == null):
        //         aggFilter["$match"]["YearWeekISO"] = { "$lte": dateTo };
        //     break;
        //     case (null !== dateFrom):
        //         aggFilter["$match"]["YearWeekISO"] = { "$lte": dateFrom };
        //     break;
        // }

        // if (null !== sort && undefined != typeof sort['NumberDosesReceived']) {
        //     let sortValue = (sort['NumberDosesReceived'] === "descending") ? -1 : 1;
        //     aggSort = { "$sort": { "value": { "NumberDosesReceived": sortValue } } };
        // }
        // { "$sort": { "NumberDosesReceived": -1 } }
        // let gr = '{ _id: { "a": 1 } }, NumberDosesReceived: { "$sum": 1 }';
        // let match = {
        //     "$match": {
        //         "NumberDosesReceived": {
        //             "$ne": "0"
        //         }
        //     }
        // };

        // let grp = { "NumberDosesReceived": { "$ne": "0" }};
        // let grp = { "$group": { _id: { "a": 1 }, NumberDosesReceived: { "$sum": 1 } }, };

        // _id : { "returnflag" :1, "linestatus" : 1},
        // sum_qty : { $sum : "$quantity"},
        // let a = { $match: {
        //
        //     }
        // };
        // let b = {
        //     $group: {
        //         _id : {
        // //             "country" : '$ReportingCountry',
        // //             // "param": 12,
        //         },
        //         "res": {
        //             "$sum": "$NumberDosesReceived"
        //         }
        //     }
        // };
        //

        let project = {
            "$match": {},
            "$addFields": {
                "NumberDosesReceived": { $toInt: "$NumberDosesReceived" }
            },
            "$project": {
                "YearWeekISO": 1,
                "NumberDosesReceived": 1
            }
        };

        let qq = this.vaccineCollection.aggregate([
            {
                "$match": {}
            },
            {
                "$addFields": {
                    "NumberDosesReceived": { "$toInt": "$NumberDosesReceived" }
                }
            },
            {
                "$project": { "YearWeekISO": 1,  "NumberDosesReceived": 1 }
            }
        ]).limit(10).exec();

        return qq;
    }
}