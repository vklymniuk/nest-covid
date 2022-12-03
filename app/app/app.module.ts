import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import config from 'src/common/configs/config';

import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs//axios';
import { VaccineModule } from 'src/vaccine/vaccine.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';

@Module({
  imports: [
    AutomapperModule.forRoot({
        strategyInitializer: classes(),
    }),
    ConfigModule.forRoot({
        isGlobal: true,
        load: [config]
    }),
    HttpModule,
    MongooseModule.forRoot('mongodb://username1:password1@0.0.0.0:27017/03_covid?authSource=admin'),
    VaccineModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
