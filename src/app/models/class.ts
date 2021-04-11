import { LocationTypeEnum } from './location-type-enum.enum'
export class Class {
  classId: number | undefined
  className: string | undefined
  credit: number | undefined
  locationTypeEnum: LocationTypeEnum | undefined

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
