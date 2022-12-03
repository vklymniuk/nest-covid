import { AutoMap } from '@automapper/classes';

export class a {
  @AutoMap()
  fieldOne: string;

  @AutoMap()
  fieldTwo: string;

  @AutoMap()
  fieldThree: string;

  @AutoMap()
  fieldFour: number;

  @AutoMap()
  fieldBool: boolean;
}