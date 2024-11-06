import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appNavigationMenu]',
  standalone: true
})
export class NavigationMenuDirective {
@Input() appNavigationMenu : string = '';

  constructor(private elementRf : ElementRef, private router: Router) { }
  @HostListener('click')
  onClick(){
    this.navigateTo(this.appNavigationMenu);
  }
  navigateTo(path: string){
    this.router.navigate([path])
  }

}
