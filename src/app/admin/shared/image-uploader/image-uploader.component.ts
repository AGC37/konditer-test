import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'image-uploader',
  templateUrl:'./image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
  // inputs:['activeColor','baseColor','overlayColor']
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImageUploaderComponent),
      multi: true
    }
  ]
})

export class ImageUploaderComponent implements ControlValueAccessor {

  // activeColor: string = 'green';
  // baseColor: string = '#ccc';
  // overlayColor: string = 'rgba(255,255,255,0.5)';

  dragging: boolean = false;
  loaded: boolean = false;
  imageLoaded: boolean = false;
  imageSrc: any = '';

  onChange: any = () => {}
  onTouch: any = () => {}

  handleDragEnter() {
    this.dragging = true;
  }

  handleDragLeave() {
    this.dragging = false;
  }

  handleDrop(e) {
    e.preventDefault();
    this.dragging = false;
    this.handleInputChange(e);
  }

  handleImageLoad() {
    this.imageLoaded = true;
  }

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();

    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }

    this.loaded = false;
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    var reader = e.target
    this.imageSrc = reader.result
    this.onChange(reader.result)
    this.onTouch(reader.result)
    this.loaded = false
  }

  set imageValue(imageSrc){
    if( imageSrc !== undefined && this.imageSrc !== imageSrc){
    }
  }

  // readFile(imageSrc) {
  //   let reader = new  FileReader()
  //   reader.onload = (imageSrc) => {
  //     reader = imageSrc.target
  //     this.imageSrc = reader.result
  //     console.log('Работает точка 30 ' + this.imageSrc)
  //
  //   }
  // }

  writeValue(value: any){
    this.imageValue = value
  }

  registerOnChange(fn: any){
    this.onChange = fn
  }

  registerOnTouched(fn: any){
    this.onTouch = fn
  }
}
