import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppTranslitService {

  inputValue = ''
  inputValueMedium = ''
  outputValue = []
  outputString = ''


  dic = new Map([
    ['а', 'a'],
    ['б', 'b'],
    ['в', 'v'],
    ['г', 'g'],
    ['д', 'd'],
    ['е', 'e'],
    ['ё', 'yo'],
    ['ж', 'zh'],
    ['з', 'z'],
    ['и', 'i'],
    ['й', 'j'],
    ['к', 'k'],
    ['л', 'l'],
    ['м', 'm'],
    ['н', 'n'],
    ['о', 'o'],
    ['п', 'p'],
    ['р', 'r'],
    ['с', 's'],
    ['т', 't'],
    ['у', 'u'],
    ['ф', 'f'],
    ['х', 'h'],
    ['ц', 'c'],
    ['ч', 'ch'],
    ['ш', 'sh'],
    ['щ', 'shch'],
    ['ъ', ''],
    ['ы', 'y'],
    ['ь', ''],
    ['э', 'je'],
    ['ю', 'ju'],
    ['я', 'ja'],
    ['_', '-'],
    [' ', '-'],
    ['А', 'a'],
    ['Б', 'b'],
    ['В', 'v'],
    ['Г', 'g'],
    ['Д', 'd'],
    ['Е', 'e'],
    ['Ё', 'yo'],
    ['Ж', 'zh'],
    ['З', 'z'],
    ['И', 'i'],
    ['Й', 'j'],
    ['К', 'k'],
    ['Л', 'l'],
    ['М', 'm'],
    ['Н', 'n'],
    ['О', 'o'],
    ['П', 'p'],
    ['Р', 'r'],
    ['С', 's'],
    ['Т', 't'],
    ['У', 'u'],
    ['Ф', 'f'],
    ['Х', 'h'],
    ['Ц', 'c'],
    ['Ч', 'ch'],
    ['Ш', 'sh'],
    ['Щ', 'shch'],
    ['Ъ', ''],
    ['Ы', 'y'],
    ['Ь', ''],
    ['Э', 'je'],
    ['Ю', 'ju'],
    ['Я', 'ja'],
  ]);

  constructor() { }

  onInput(event:any){
    console.log(event)
    this.inputValue = event.target.value
    this.inputValueMedium = event.data
    if (event.data !== null) {
      for (var i = 0; i < this.inputValueMedium.length; i++) {
        var outputSign = this.inputValueMedium[i]
        if (this.dic.has(outputSign) === true) {
          this.outputValue.push(this.dic.get(outputSign))
        } else {
          this.outputValue.push(outputSign)
        }
      }
    } else {
      this.outputValue = this.outputValue.slice(0, -1)
    }
    this.outputString = this.outputValue.join('')
    // console.log('Строка --- ' + this.inputValueMedium)
    // console.log('Значение --- ' + event.data)
    // console.log('Транслит --- ' + this.outputValue)
    // console.log('Строка --- ' + this.outputString)
    // console.log('Удаление --- ' + this.outputValue.substring(0, this.outputValue.length-1))
  }


}
