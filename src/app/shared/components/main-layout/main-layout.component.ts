import { Component, OnInit } from '@angular/core';
import { categoryPosts } from 'src/app/fake-db/navigation';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  navigation = categoryPosts

  ngOnInit(): void {
  }

}
