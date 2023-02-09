import { stock } from './../model/stock-item';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MediaServices {
  constructor(private http: HttpClient) {}
  getStocks(): Observable<stock[]> {
    // return this.http.get<stock[]>(`/api/stock-item?q=${query}`);
    return this.http.get<stock[]>(`/api/stock-item`);
  }
  // get() {
  //   return this.MediaItem;
  // }
  // add(mediaItem: any) {
  //   this.MediaItem.push(mediaItem);
  // }
  // Delete(MediaItemObj) {
  //   const index = this.MediaItem.indexOf(MediaItemObj);
  //   if (index >= 0) {
  //     this.MediaItem.splice(index, 1);
  //   }
  // }
}
// import { Injectable } from '@angular/core';
// import { Http, URLSearchParams } from '@angular/http';

// // import {map} from 'rxjs/add/operator/map';
// import { map } from 'rxjs/operators';
// @Injectable()
// export class MediaServices {
//   constructor(private http: Http) {}
//   get(medium) {
//     let searchParams = new URLSearchParams();
//     searchParams.append('medium', medium);
//     return this.http.get('mediaitems', { search: searchParams }).pipe(
//       map((response) => {
//         return response.json().mediaItems;
//       })
//     );
//   }
//   add(mediaItem) {
//     return this.http.post('mediaitems', mediaItem).pipe(map((response) => {}));
//   }
//   delete(mediaItem) {
//     return this.http
//       .delete(`mediaitems/${mediaItem.id}`)
//       .pipe(map((response) => {}));
//   }
// }
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// console.log(MediaItemObj);

//! this.MediaItem.splice(MediaItemObj, 1);
/*! =========================================================================================
 =================================Services in Angular=======================================
 Step:1
   Import the class Injection class from Angular/core
 Step:2
 define the injection class as decorator 
@Injectable({
  providedIn: 'root',
})
Step:3
make a exportable class and 
import to app.module.ts for working and define the class in the provider[] 
 Making a method to get the value that are available in service class

 >>>>>>>>>>>>>>how to use to another class of another component>>>>>>>>>>
Step :1
 import the file that are you making i.e media-item.service.ts
like >> import { mediaServices } from '../mediaItem/media-Item.service';
import { stock } from '../model/stock-item';

Step:2
 pass the parameter in the constructor and make the new variable and assign the class 
 that are you making in the media-item.service.ts to get the class of object and get the
  method or value in that class 
>>  constructor(private mediaService: mediaServices) {}

Step:3 and now you can get the method or anything that is define in the service class
by its class object 
                       
*/
