import { Component, OnInit } from '@angular/core';
import { posts } from '../fake-db/posts';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  posts = posts;

  ngOnInit(): void {
  }

}
