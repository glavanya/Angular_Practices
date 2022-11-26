import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[hide]'
})
export class HideDirective {
  
  
  constructor(private ref: ElementRef) {
    
  }
  
  ngOnInit() {
    this.ref.nativeElement.addEventListener('mouseover', (e: any) => {
      this.ref.nativeElement.style.visibility = 'hidden';
    })
  }
}