import { Component, OnInit } from '@angular/core';
import { NewsAPIService } from '../../services/news-api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  constructor(private news: NewsAPIService) { }
  thenews: any;
  ngOnInit() {
    this.news.getnews().subscribe((res)=>{
      this.thenews = res.articles;
      console.log(this.thenews);
    });
  }

}
