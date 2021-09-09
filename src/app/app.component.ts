import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title="mon App"
  isAuth = false;

lastUpdate = new Date();

  appareilOne = 'Machine à laver';
  appareilTwo = 'Frigo';
  appareilThree = 'ordinateur';

  appareils = [
  {
    name: 'Machine à laver',
    status: 'éteint'
  },
  {
    name : 'Frigo',
    status: 'éteint'
  },
  {
    name: 'Ordinateur',
    status: 'allumé'
  }
  ];

  constructor() {
     setTimeout( () => {
        this.isAuth = true;
      }, 4000    );
    
  }

  onAllumer(){
    console.log('On allume tout !');
  }

}

