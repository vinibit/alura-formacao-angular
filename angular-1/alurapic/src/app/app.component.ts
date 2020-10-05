import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alura.pic';

  photos = [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Sultan_the_Barbary_Lion.jpg/440px-Sultan_the_Barbary_Lion.jpg',
      description: 'Leão'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Lioness_Etosha_NP.jpg/500px-Lioness_Etosha_NP.jpg',
      description: 'Leoa'
    },
    {
      url: 'https://media-exp1.licdn.com/dms/image/C4D03AQH8WRb5jRRmBg/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=4Mp9I1bkYKskeqCqPZosmWLf09pGuk6fnEy2lx93vSU',
      description: 'Linda'
    }
  ];
}
