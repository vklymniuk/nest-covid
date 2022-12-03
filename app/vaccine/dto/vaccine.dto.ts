export class VaccineDto {
  id: string;
  createdAt: Date;
  createdUpdated: Date;

  public constructor(init?: Partial<VaccineDto>) {
    Object.assign(this, init);
  }
}

export enum SomeType {}
