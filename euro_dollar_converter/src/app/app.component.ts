import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Euro Dollar Converter';
  euro: number = 0;
  dollar: number = 0;
  rate: number = 1.1;

  ngOnInit() {
    setInterval(() =>{
      this.updateRate()
    }, 3000);
  }


  euroToDollar(){
    this.dollar = (this.euro * 10) * (this.rate * 10) / 100;
  }

  dollarToEuro(){
    this.euro = this.dollar * (1/this.rate);
  }

  updateRate(){
    this.rate = ((this.rate * 10) + (this.getRandom() * 10)) / 10; 
  }

  getRandom(): number{
    const randomVal: number[] = [0.05, -0.05]
    return  randomVal[Math.floor(Math.random() * randomVal.length)]; 
  }
}
