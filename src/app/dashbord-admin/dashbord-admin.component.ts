import { Component} from '@angular/core';
import { DashNewsComponent } from '../dash-news/dash-news.component';
import { DashCollectComponent } from '../dash-collect/dash-collect.component';
import { DashDonatComponent } from '../dash-donat/dash-donat.component';
import { NgIf } from '@angular/common';
import { DashActivityComponent } from '../dash-activity/dash-activity.component';
import { DashArticleComponent } from '../dash-article/dash-article.component';
import { ServiceNewslatterService } from '../service-newslatter.service';
import { ModalActualityComponent } from '../modal-actuality/modal-actuality.component';
import { ModalActivityComponent } from '../modal-activity/modal-activity.component';




@Component({
  selector: 'app-dashbord-admin',
  standalone: true,
  imports: [ DashNewsComponent, DashCollectComponent, DashDonatComponent, DashActivityComponent, DashArticleComponent, NgIf, ModalActualityComponent, ModalActivityComponent],
  templateUrl: './dashbord-admin.component.html',
  styleUrl: './dashbord-admin.component.css'
})

export class DashbordAdminComponent {
  selected : string = "news";
  subscriberData: any[] = [];  // Données pour le graphique ngx-charts
  isModalActualityOpen = false;
  

   constructor( private newsService : ServiceNewslatterService){}

  showNews(){
    this.selected = "news"
  }; 

  showCollect(){
    this.selected = "collect"
  };

  showDonate(){
    this.selected = "donation"
  };
  showArticle(){
    this.selected = "article"
  };
  showActivity(){
    this.selected = "activity"
  }

  openModalActuality() {
    this.isModalActualityOpen = true;
  }

}
