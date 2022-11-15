import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-covers-fs',
  templateUrl: './covers-fs.component.html',
  styleUrls: ['./covers-fs.component.scss'],
})
export class CoversFSComponent implements OnInit {

  @Input() name!: string;
  img!: string;
  imgs = [
    {
      "name": "EndGame",
      "img": "https://lumiere-a.akamaihd.net/v1/images/image_1e5c5703.jpeg?region=0%2C0%2C540%2C810"
    },
    {
      "name": "StarWars",
      "img": "https://lumiere-a.akamaihd.net/v1/images/image_c671e2ee.jpeg?region=0,0,540,810"
    },
    {
      "name": "TheSimpsons",
      "img": "https://i.pinimg.com/236x/fc/ea/d6/fcead6b45fa6f591e492eadff95ee707--les-simpson-series-movies.jpg"
    },
    {
      "name": "Frozen",
      "img" : "https://m.media-amazon.com/images/I/91dK48LufIL._SL1500_.jpg"
    },
    {
      "name": "TheMandalorian",
      "img" : "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2A5397FEC12252755975EC20B11547170F91A26FD3E4D8D19C7997039949A24B/scale?width=506&aspectRatio=2.00&format=jpeg"
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
