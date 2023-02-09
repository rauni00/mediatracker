import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { MediaServices } from './media-Item.service';
@Component({
  selector: 'media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css'],
})
export class mediaItem {
  constructor(@Inject(MediaServices) private mediaservice) {}
  @Input() MediaItem: any;
  @Output() delete = new EventEmitter(); //output custom event emitter  define
  varName = 'watch';
  varStyle = {
    'font-size': 'auto',
    'background-color': 'green',
  };
  // varName1 = 'watch';
  onMediaItemDelete() {
    this.mediaservice.Delete(this.MediaItem);
    
  }
}

// form: FormGroup | any;
// ngOnInit() {
//   this.form = new FormGroup({
//     medium: new FormControl('movies'),
//     name: new FormControl(''),
//     category: new FormControl(''),
//     year: new FormControl(''),
//   });
// }
//variable define and initialised here and get their value from method to markup page
// ======================by INTERPOLATION==========================================
// movie_name: string = 'The Redemption';
// M_name() {
//   return this.movie_name;
// }
// date: Date = new Date();
// DATE() {
//   return this.date;
// }
// Movie_type: string = 'Suspense ,thriller';
// M_type() {
//   return this.Movie_type;
// }
// year: string = '2019';
// YEAR() {
//   return this.year;
// }
// movie_name: string;
// date: Date;
// Movie_type: string;
// year: string;
// M_rev: string;
// constructor() {
//   this.movie_name = 'The Redemption';
//   this.date = new Date();
//   this.Movie_type = 'Suspense ,thriller';
//   this.year = '2019';
//   this.M_rev =
//     'This is the Best Movie I Have Ever Seen. It is a good movie for all time thrilling experience for me.';
// }
// getName() {
//   return this.movie_name;
// }
// getDate() {
//   return this.date;
// }
// getType() {
//   return this.Movie_type;
// }
// getYear() {
//   return this.year;
// }
// getRev() {
//   return this.M_rev;

// Custom property binding
// @input decorator
// custom event binding
