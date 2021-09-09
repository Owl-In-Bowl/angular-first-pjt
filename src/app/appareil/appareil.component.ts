import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  
  @Input() appareilName: string = "name" ;
  @Input() appareilStatus: String = 'éteint';


  constructor() { }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }

  switchState() {
    if (this.appareilStatus==='allumé') {
      this.appareilStatus='éteint';
    }
    else if (this.appareilStatus==='éteint'){
      this.appareilStatus='allumé';
    }
    
  }

  getColor(){
    if (this.appareilStatus === 'allumé'){
      return 'green';
    } else {
      return 'red';
    }

  }

}
