import { Component, OnInit } from '@angular/core';
import {ImageUploaderComponent} from "../image-uploader/image-uploader.component";

@Component({
  selector: 'app-drop-zone',
  templateUrl: './drop-zone.component.html',
  styleUrls: ['./drop-zone.component.scss']
})
export class DropZoneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
