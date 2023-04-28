import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Khaind';
  arrProduct = [
    {
      first: "Mark",
      last: "Otto",
      handle: "@mdo",
      image: "https://cdn-amz.woka.io/images/I/81Vr0-VQhOL.jpg"
    },
    {
      first: "Jacob",
      last: "Thornton",
      handle: "@fat",
      image: "https://cdn-amz.woka.io/images/I/81Vr0-VQhOL.jpg"
    },
    {
      first: "Larry the Bird",
      last: "ABC",
      handle: "@twitter",
      image: "https://cdn-amz.woka.io/images/I/81Vr0-VQhOL.jpg"
    },
  ]

  ngOnInit() {
    console.log('abc', this.title)
  }
}
