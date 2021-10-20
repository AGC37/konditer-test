import {Component, OnInit, forwardRef,} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms'

@Component({
  selector: 'app-custom-input',
  template: '<input [(ngModule)]="value"/>local: {{val}}',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomInputComponent),
    multi: true
  }
  ]
})
export class CustomInputComponent implements ControlValueAccessor {

  constructor() { }

  onChange: any = () => {}
  onTouched: any = () => {}
  val = ''

  set value (val) {
    if (val! == undefined && this.val! == val) {
      this.val = val
      this.onChange(val)
      this.onTouched(val)
    }
  }

  writeValue(value: any){
    this.value = value
  }

  registerOnChange(fn: any){
    this.onChange = fn
  }

  registerOnTouched(fn: any){
    this.onTouched = fn
  }

  ngOnInit(): void {
  }

}
