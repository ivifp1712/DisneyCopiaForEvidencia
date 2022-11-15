import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-publicard',
  templateUrl: './publicard.component.html',
  styleUrls: ['./publicard.component.scss'],
})
export class PublicardComponent implements OnInit {
  @Input() name!: string;
  img!: string;
  imgs = [
    {
      "name": "EndGame",
      "img": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B07FABAA52E9F1962D1A3EE997F99564D8F77C567258EA93C17485A646776504/scale?width=1200&aspectRatio=1.78&format=jpeg"
    },
    {
      "name": "StarWars",
      "img": "https://dlprivateserver.com/wp-content/uploads/2022/08/%C2%BFTerminara-alguna-vez-Star-Wars.jpg"
    }
  ]

  constructor() { 
  }

  ngOnInit() {
    console.log(this.name)
    //    this.img = imgs[].img
    for (let index = 0; index < this.imgs.length; index++) {
      if (this.imgs[index].name == this.name) {
        this.img = this.imgs[index].img
        console.log("foto cambiada: " + this.img)
      }
      }
    }

}
