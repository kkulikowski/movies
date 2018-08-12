import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/';

@Component({
  selector: 'app-movie-img',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div fxFlex>
               <img fxFlex [src]="imgUrl">
             </div>`,
  styles: [`

  `],
})
export class MovieImageComponent implements OnInit {
  @Input() source: string;
  @Input() imageWidth = '200';

  imgUrl = '';

  ngOnInit() {
    this.imgUrl = `${IMG_BASE_URL}w${this.imageWidth}/${this.source}`;
  }
}
