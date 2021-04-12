import { Review } from '../models/review';
export class CreateReviewReq {
    username: string | undefined;
    password: string | undefined;
    reviewEntity: Review | undefined;
 


    constructor(username?: string, password?: string, reviewEntity?: Review)
	{		
		this.username = username;
        this.password = password;
        this.reviewEntity = reviewEntity;

	}
}

