import { Component } from '@angular/core';
import { DashNewsComponent } from '../dash-news/dash-news.component';
import { DashCollectComponent } from '../dash-collect/dash-collect.component';
import { DashDonatComponent } from '../dash-donat/dash-donat.component';
import { NgIf } from '@angular/common';
import { DashActivityComponent } from '../dash-activity/dash-activity.component';
import { DashArticleComponent } from '../dash-article/dash-article.component';

@Component({
  selector: 'app-dashbord-admin',
  standalone: true,
  imports: [ DashNewsComponent, DashCollectComponent, DashDonatComponent, DashActivityComponent, DashArticleComponent, NgIf],
  templateUrl: './dashbord-admin.component.html',
  styleUrl: './dashbord-admin.component.css'
})
export class DashbordAdminComponent {
  selected : string = "news";

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

}
