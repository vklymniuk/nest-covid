import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ collection: 'vaccine' })
export class Vaccine extends Document {
  // @Prop( { type: [Types.ObjectId], reg: 'Organization'} )
  // @Prop({unique: true})
  // organization: string;
  // @Prop( { type: [Types.ObjectId]
  // ObjectId: Mongo

  @Prop({unique: true})
  id: Types.ObjectId;

  // --------------------------------------------------
  // Variable: YearWeekISO
  // Definition: Date when the vaccine was received/administered. Only weeks are allowed (e.g "2020-W01")
  // Code: yyyy-Www
  // Ecample: 2020-W53
  @Prop()
  YearWeekISO: string;

  // ReportingCountry ISO 3166-1-alpha-2 two-letter code
  @Prop()
  ReportingCountry: string;

  // Denominator Population denominators for target groups (total population and age- specific population obtained from Eurostat/UN). Denominators reported by countries for TargetGroup = “HCW” and TargetGroup = “LTCF”  Numeric
  @Prop()
  Denominator: number;

  // NumberDosesReceived Number of vaccine doses distributed by the manufacturers to the country during the reporting week. Numeric
  @Prop()
  NumberDosesReceived: number;

  // NumberDosesExported Number of vaccine doses donated or sold by the country during the reporting week. Numeric
  NumberDosesExported: number;

  // FirstDose Number of first dose vaccine administered to individuals during the reporting week. Numeric
  @Prop()
  FirstDose: number;

  // FirstDoseRefused Number of individuals refusing the first vaccine dose.  Numeric
  @Prop()
  FirstDoseRefused: number;

  // SecondDose Number of second dose vaccine administered to individuals during the reporting week.   Numeric
  @Prop()
  SecondDose: number;

  // DoseAdditional1 Number of first additional vaccine doses administered after a complete standard primary course to individuals during the reporting week. Numeric
  @Prop()
  DoseAdditional1: number;

  // DoseAdditional2  Number of second additional vaccine doses administered after a complete standard primary course to individuals during the reporting week.  Numeric
  @Prop()
  DoseAdditional2: number;

  // DoseAdditional3 Number of third additional vaccine doses administered after a complete standard primary course to individuals during the reporting week. Numeric
  @Prop()
  DoseAdditional3: number;

  // DoseUnk Number of doses administered during the reporting week where the type of dose was not specified (i.e. it is not known whether it was a first or second dose). Numeric
  @Prop()
  DoseUnk: number;

  // Region As a minimum data should be reported at national level (Region = country code). Country/NUTS1 or 2/GAUL1/Country specific
  @Prop()
  Region: string;

  // TargetGroup Target group for vaccination.
  @Prop()
  TargetGroup: number;

  // ++
  //  ALL = Overall adults (18+)
  // Age<18 = Overall adolescents and children (0- 17 years old)
  // HCW = Healthcare workers
  // LTCF = Residents in long term care facilities Age0_4 = 0-4 years old
  // Age5_9 = 5-9 years old
  // Age10_14 = 10-14 years old
  // Age15_17 = 15-17 years old
  // Age18_24 = 18-24 years old
  // Age25_49 = 25-49 years old
  // Age50_59 = 50-59 years old
  // Age60_69 = 60-69 years old
  // Age70_79 = 70-79 years old
  // Age80+ = 80 years and over
  // AgeUnk = Unknown age
  // 1_Age<60 = adults below 60 years of age
  // and above 17
  // 1_Age60+ = adults 60 years and over

  // Vaccine name  Name of vaccine. Additional vaccines will be added on approval or as requested.
  @Prop()
  VaccineName: string;

  // ++
  // AZ = AstraZeneca - Vaxzevria BECNBG = Beijing CNBG - BBIBP-CorV BHACOV = Bharat - Covaxin
  // CHU = Chumakov - Covi-Vac
  // CAN = CanSino - Convidecia
  // COM = Pfizer BioNTech - Comirnaty
  // COMBA.1= Pfizer BioNTech - Comirnaty Original/Omicron BA.1
  // COMBA.4-5 = Pfizer BioNTech – Comirnaty Original/Omicron BA.4/BA.5
  // COMBIV = Pfizer BioNTech – Comirnaty (Original/Omicron BA.1 or Original/Omicron BA.4/BA.5)
  // CVAC = Curevac - CVnCOV
  // HAYATVAC = Julphar- Hayat-Vax
  // JANSS = Janssen - Jcovden
  // MOD = Moderna - Spikevax
  // MODBA.1 = Moderna - Spikevax Bivalent Original/Omicron BA.1
  // MODBA.4-5 = Moderna - Spikevax Bivalent Original/Omicron BA.4/BA.5
  // MODBIV = Moderna - Spikevax Bivalent (Original/Omicron BA.1 or Original/Omicron BA.4/BA.5)
  // NVX = SII – Covovax
  // NVXD = Novavax – Nuvaxovid QAZVAQ = RIBSP - QazVac
  // SGSK = Sanofi GSK - Vidprevtyn
  // SIICOV = SII - Covishield
  // SIN = Sinovac - CoronaVac
  // SPU = Gamaleya - Sputnik-V
  // SPUL = Gamaleya - Sputnik-Light SRCVB = SRCVB - EpiVacCorona
  // UNK = UNKNOWN
  // VLA = Valneva – VLA2001
  // WUCNBG = Wuhan CNBG - Inactivated ZFUZ = Anhui ZL - Zifivax

  // Population Age-specific population for the Numeric country Numeric
  @Prop()
  Population: number;
}

export const VaccineSchema = SchemaFactory.createForClass(Vaccine);