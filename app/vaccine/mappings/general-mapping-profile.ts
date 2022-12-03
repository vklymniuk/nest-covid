import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import type { Mapper, MappingProfile } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { createMap, forMember, mapFrom } from '@automapper/core';
import { a } from '../dto/a.dto';
import { b } from '../dto/b.dto';

@Injectable()
export class GeneralMappingProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  get profile2(): MappingProfile {
    throw new Error('Method not implemented.');
  }

  get profile(): MappingProfile {
    return (mapper) => {
      // createMap(
      //   mapper,
      //   a,
      //   b,
      //   forMember(
      //     (to: b) => to.qweqweqwe,
      //     mapFrom((from: a) => from.fieldOne),
      //   ),
      // );
    };
  }
}
