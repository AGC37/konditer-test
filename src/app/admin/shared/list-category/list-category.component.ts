import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import { MatTableDataSource } from '@angular/material/table';
import {categoryPosts, Navigation} from "../../../fake-db/navigation";
import {CategoryService} from "../../../services/category.service";

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements AfterViewInit {

  displayedColumns: string[] = ['title', 'description', 'slug', 'items', 'buttons'];
  dataSource: MatTableDataSource<Navigation>;
  editMode: boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private categoryService: CategoryService) {
     this.dataSource = new MatTableDataSource(categoryPosts);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  delete(slug:string){
    this.categoryService.delete(slug)
  }

  edit(slug: string) {

  }
}

