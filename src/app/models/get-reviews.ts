export class GetReviews {
    reviewId:number|undefined;
    reviewRating:number|undefined;
    description:string|undefined;
    customerName :string|undefined

    constructor(reviewId? :number, reviewRating?: number,description?:string,customerName?:string) {
        this.reviewId= reviewId;
        this.reviewRating= reviewRating;
        this.description= description;
        this.customerName= customerName
    }
}
