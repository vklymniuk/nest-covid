// var data =  {
//    "records" : [
//       {
//          "YearWeekISO" : "2020-W53",
//          "FirstDose" : 0,
//          "FirstDoseRefused" : "",
//          "SecondDose" : 0,
//          "DoseAdditional1" : 0,
//          "DoseAdditional2" : 0,
//          "DoseAdditional3" : 0,
//          "UnknownDose" : 8,
//          "NumberDosesReceived" : 0,
//          "NumberDosesExported" : 0,
//          "Region" : "AT",
//          "Population" : "8901064",
//          "ReportingCountry" : "AT",
//          "TargetGroup" : "ALL",
//          "Vaccine" : "UNK",
//          "Denominator" : 7388778
//       }
//    ]
// };

data.records.forEach((row) => {
   db.vaccination.insertOne(row);
});


// docker exec -ti  03_covid-mongo-1 mongosh --username username1 --password password1 --authenticationDatabase admin covide ./import/data.js
// mongo --username username1 --password --authenticationDatabase admin
// mongod --username username1 --password password2 --host 0.0.0.0 --port 27017 --authenticationDatabase admin
// mongo "mongodb://username1@mongodb0.examples.com:28015/?authSource=admin"