export class Review {
    reviewId:number|undefined;
    reviewRating:number|undefined;
    description:string|undefined;

    constructor(reviewId? :number, reviewRating?: number,description?:string) {
        this.reviewId= reviewId;
        this.reviewRating= reviewRating;
        this.description= description;
    }
}
