import { Component, OnInit } from '@angular/core';
import {itemsliks} from "../../../fake-db/navigation-admin";


@Component({
  selector: 'app-navigation-admin',
  templateUrl: './navigation-admin.component.html',
  styleUrls: ['./navigation-admin.component.scss']
})
export class NavigationAdminComponent implements OnInit {

  navigationAdmin = itemsliks;

  ngOnInit(): void {
  }

}
