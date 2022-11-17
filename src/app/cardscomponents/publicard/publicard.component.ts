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
      "img": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A4B58B11C7019B5403E07D551249121C4F4CC99119907F4460F0725B34A27086/scale?width=1200&aspectRatio=1.78&format=jpeg"
    },
    {
      "name": "StarWars",
      "img": "https://dlprivateserver.com/wp-content/uploads/2022/08/%C2%BFTerminara-alguna-vez-Star-Wars.jpg"
    },
    {
      "name": "LosSimpson",
      "img": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/star/866AA694A6991F78B4657CBE147AA8B27F65F5CB9C164E68B1A09B7B138E3EFF/scale?width=1200&aspectRatio=1.78&format=jpeg"
    },
    {
      "name": "Mandalorian",
      "img": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1C42324412D81E612EFD8E9DAB82B24EB43D057306A3F812214E9BA728DC0162/scale?width=1200&aspectRatio=1.78&format=jpeg"
    },
    {
      "name": "WandaVision",
      "img": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3BEEC79EB9BB3D140F6F90CBB1DD8431ED6DADEB19B6FA83B94463D811037FAC/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal"
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
