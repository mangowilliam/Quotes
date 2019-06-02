import { Directive, ElementRef, EventEmitter, Output, HostListener } from '@angular/core';

@Directive({
  selector: '[appVote]'

})
export class VoteDirective {
  @Output() isComplete = new EventEmitter<number>();
  upvotes = 0;
  downvotes = 0;
  upVote() {
    this.upvotes = this.upvotes + 1;
  }
  downVote() {
    this.downvotes = this.downvotes + 1
  }
  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.textDecoration = "highlight";
  }
  @HostListener("appVote") upvote() {
    this.textDecoration("highlight")
  }
  textDecoration(action: string) {
    this.elem.nativeElement.style.textDecoration = action;
  }
}
