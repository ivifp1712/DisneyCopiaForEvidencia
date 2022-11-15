import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-companylogo',
  templateUrl: './companylogo.component.html',
  styleUrls: ['./companylogo.component.scss'],
})
export class CompanylogoComponent implements OnInit {

  @Input () name!: string;
  img!: string;
  imgs = [
    {
      "name": "Marvel",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
    },
    {
      "name": "Pixar",
      "img": "https://www.pngmart.com/files/22/Pixar-Logo-PNG.png"
    },
    {
      "name": "Star",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Star%2B_logo.svg/2560px-Star%2B_logo.svg.png"
    },
    {
      "name": "StarWars",
      "img": "https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-1-1.png"
    },
    {
      "name": "Disney",
      "img": "https://anthoncode.com/wp-content/uploads/2020/03/Disney-logo-white.png"
    },
    {
      "name": "NationalGeographic",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/National-Geographic-Logo.svg/1200px-National-Geographic-Logo.svg.png"
    }
    
  ]

  constructor() { }

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
