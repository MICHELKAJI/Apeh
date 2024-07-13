import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appNavigateTo]',
  standalone: true
})
export class NavigateToDirective {
  @Input() appNavigateTo: string = '';

  constructor(private elementRef: ElementRef, private router: Router ) { }
  @HostListener('click')
  onClick(){
    this.navigateTo(this.appNavigateTo);
  }
  navigateTo(path: string){
    this.router.navigate([path])
  }


}
