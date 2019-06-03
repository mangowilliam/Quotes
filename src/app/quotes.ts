export class Quotes {
  public showDescription: boolean;
  constructor(public id: number, public upvote: number, public downvote: number, public quote: string, public author: string, public quoter: string, public Date: Date) {
    this.showDescription = false
  }

}//create constructor function and define properties for each instance ofthe class
