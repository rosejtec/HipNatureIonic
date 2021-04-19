import { Partner } from './partner';
import { LocationTypeEnum } from './location-type-enum.enum'
export class Class {
  classId: number | undefined
  className: string | undefined
  credit: number | undefined
  locationTypeEnum: LocationTypeEnum | undefined
  partner:Partner|undefined
  
  constructor(
    classId?: number,
    className?: string,
    credit?: number,
    locationTypeEnum?: LocationTypeEnum,
  ) {
    this.classId = classId
    this.className = className
    this.locationTypeEnum = locationTypeEnum
    this.credit = credit
  }
}
