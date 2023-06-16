import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  result = '';

  appendNumber(number: number) {
    this.result += number.toString();
  }

  appendOperator(operator: string) {
    this.result += operator;
  }

  clear() {
    this.result = '';
  }

  calculate() {
    try {
      this.result = eval(this.result);
    } catch (error) {
      this.result = 'Error';
    }
  }
}
