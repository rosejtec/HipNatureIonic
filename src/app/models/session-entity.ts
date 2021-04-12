import {LocationTypeEnum } from './location-type-enum.enum'
export class SessionEntity {

    sessionId:number|undefined;
    venue:string|undefined;
    startTime:Date|undefined;
    endTime:Date|undefined;
    Duration:number|undefined;
    phone:number|undefined;
    maxCapacity:number|undefined;
    status:string|undefined;
    locationTypeEnum:LocationTypeEnum|undefined;
    instructor:string|undefined;

    constructor(
        sessionId?: number,
        venue?: string,
        startTime?:Date,
        endTime?:Date,
        Duration?: number,
        phone?: number,
        maxCapacity?: number,
        status?: string,
        locationTypeEnum?: LocationTypeEnum,
        instructor?: string,
      ){
        this.sessionId = sessionId
        this.venue = venue
        this.startTime = startTime
        this.endTime = endTime
        this.Duration = Duration
        this.phone = phone
        this.maxCapacity = maxCapacity
        this.status = status
        this.locationTypeEnum = locationTypeEnum
        this.instructor = instructor
      }

}
