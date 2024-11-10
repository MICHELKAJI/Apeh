import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnInit {

    constructor(private route: ActivatedRoute){}

    ngOnInit(): void {
      this.route.fragment.subscribe(fragment =>{
        if(fragment){
          const element = document.getElementById(fragment);
          if(element){
            element.scrollIntoView({behavior: 'smooth'});
          }
        }
      })
      
    }

}
