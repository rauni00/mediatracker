import { Component, Inject, OnInit } from '@angular/core';
import { MediaServices } from './mediaItem/media-Item.service';
import { Observable, Subject } from 'rxjs';
import { stock } from './model/stock-item';
import {
  debounceTime,
  switchMap,
  distinctUntilChanged,
  startWith,
  share,
} from 'rxjs/operators';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styleUrls: ['./app.component.css', './app.component2.css'],fea english class
})
export class AppComponent implements OnInit {
  title: any;
  // MediaItem: Observable<stock>;
  MediaItem: stock[] = [];
  searchString = '';
  searchTerms: Subject<string> = new Subject();
  // constructor(@Inject(MediaServices) private mediaServices) {}
  constructor(private mediaService: MediaServices) {}

  ngOnInit() {
    this.mediaService.getStocks().subscribe((data) => (this.MediaItem = data));
    // this.searchTerms.pipe(
    //   startWith(this.searchString),
    //   debounceTime(500),
    //   distinctUntilChanged(),
    //   switchMap((query) => this.mediaService.getStocks(query)),
    //   share()
    // );

    // this.mediaService.getStocks();
  }

  onMediaItemDelete(MediaItem: any) {
    console.log(MediaItem);
  }
}
