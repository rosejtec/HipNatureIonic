import { Review } from '../models/review';
export class CreateReviewReq {
    username: string | undefined;
    password: string | undefined;
    reviewRating:number|undefined;
    description:string|undefined; 
    classId:number|undefined;

    constructor(username?: string, password?: string, reviewRating?: number,description?:string,classId?:number)
	{		
		this.username = username;
        this.password = password;
        this.reviewRating= reviewRating;
        this.description= description;
        this.classId=classId;
	}
}

