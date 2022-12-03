import { AutoMap } from '@automapper/classes';

export class b {
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

  @AutoMap(() => Array)
  fieldInnerMultiClass: InnerMultiClass[];

  @AutoMap(() => Array)
  qweqweqwe: InnerMultiClasWithMultiField[];

  @AutoMap()
  fieldInnerClass: InnerClass;
}

export class InnerClass {
  @AutoMap()
  fieldOne: string;

  @AutoMap()
  fieldTwo: string;
}

export class InnerMultiClass {
  @AutoMap()
  fieldOne: string;

  @AutoMap()
  fieldTwo: string;
}

export class InnerMultiClasWithMultiField {
  @AutoMap()
  fieldOne: string;

  @AutoMap(() => Array)
  fieldInnerMultiClass: InnerMultiClass[];
}
