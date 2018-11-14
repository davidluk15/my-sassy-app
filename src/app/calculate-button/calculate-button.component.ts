import {Component, Input, OnInit} from '@angular/core';
import {and} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-calculate-button',
  templateUrl: './calculate-button.component.html',
  styleUrls: ['./calculate-button.component.scss']
})
export class CalculateButtonComponent implements OnInit {

  @Input ('initialNumber1')
  initialNumber1: Number = 0

  @Input ('initialNumber2')
  initialNumber2: Number = 0

  constructor() { }

  ngOnInit() {
  }



  showResult(numberInput1: HTMLInputElement,numberInput2: HTMLInputElement ){
    if (((numberInput1.valueAsNumber + numberInput2.valueAsNumber)>2000000) ||((numberInput1.valueAsNumber + numberInput2.valueAsNumber)<0))
    {
      alert("Bite nur Werte zwischen 0 und 1 000 000 eingeben!")
      this.clearInput(numberInput1, numberInput2)
    }

    if(isNaN(numberInput1.valueAsNumber) || isNaN(numberInput2.valueAsNumber)){
      alert("Bite nur Zahlen eingeben!")
      this.clearInput(numberInput1, numberInput2)
    }
    else
      alert ("Ergebnis ist " + (numberInput1.valueAsNumber + numberInput2.valueAsNumber) )
      this.clearInput(numberInput1, numberInput2)
  }


  clearInput(numberInput1:HTMLInputElement,numberInput2:HTMLInputElement){
    numberInput1.valueAsNumber= 0
    numberInput2.valueAsNumber= 0
  }


}
