// import {
//   Request,
//   Response,
//   ResponseOptions,
//   RequestMethod,
// } from '@angular/http';
// import { Observable } from 'rxjs';
// import { Observer } from 'rxjs';
// export class MockXHRBackend {
//   constructor() {}
//   createConnection(request: Request) {
//     var response = new Observable((responseObserver: Observer<Response>) => {
//       var responseData;
//       var responseOptions;
//       switch (request.method) {
//         case RequestMethod.Get:
//           if (
//             request.url.indexOf('mediaitems?medium=') >= 0 ||
//             request.url === 'mediaitems'
//           ) {
//             var medium;
//             if (request.url.indexOf('?') >= 0) {
//               medium = request.url.split('=')[1];
//               if (medium === 'undefined') medium = '';
//             }
//             var mediaItems;
//             if (medium) {
//               mediaItems = this._mediaItems.filter(
//                 (mediaItem) => mediaItem.medium === medium
//               );
//             } else {
//               mediaItems = this._mediaItems;
//             }
//             responseOptions = new ResponseOptions({
//               body: { mediaItems: JSON.parse(JSON.stringify(mediaItems)) },
//               status: 200,
//             });
//           } else {
//             var id = parseInt(request.url.split('/')[1]);
//             mediaItems = this._mediaItems.filter(
//               (mediaItem) => mediaItem.id === id
//             );
//             responseOptions = new ResponseOptions({
//               body: JSON.parse(JSON.stringify(mediaItems[0])),
//               status: 200,
//             });
//           }
//           break;
//         case RequestMethod.Post:
//           var mediaItem = JSON.parse(request.text().toString());
//           mediaItem.id = this._getNewId();
//           this._mediaItems.push(mediaItem);
//           responseOptions = new ResponseOptions({ status: 201 });
//           break;
//         case RequestMethod.Delete:
//           var id = parseInt(request.url.split('/')[1]);
//           this._deleteMediaItem(id);
//           responseOptions = new ResponseOptions({ status: 200 });
//       }
//       var responseObject = new Response(responseOptions);
//       responseObserver.complete();
//       return () => {};
//     });
//     return { response };
//   }
//   _deleteMediaItem(id) {
//     var mediaItem = this._mediaItems.find((mediaItem) => mediaItem.id === id);
//     var index = this._mediaItems.indexOf(mediaItem);
//     if ((index) => 0) {
//       this._mediaItems.splice(index, 1);
//     }
//   }
//   _getNewId() {
//     if (this._mediaItems.length > 0) {
//       return (
//         Math.max.apply(
//           Math,
//           this._mediaItems.map((mediaItem) => mediaItem.id)
//         ) + 1
//       );
//     }
//   }
//   _mediaItems = [
//     {
//       id: 1,
//       name: 'Firebug',
//       medium: 'Series',
//       category: 'Science Friction',
//       year: 2010,
//       watchOn: '10/10/2017',
//       Desc: 'This Is The Best Movie I Have Ever Seen.',
//       isFavorite: false,
//     },
//     {
//       id: 1,
//       name: 'FreeGuy',
//       medium: 'Movie',
//       category: 'Science ,Coding',
//       year: 2020,
//       watchOn: '20/02/2002',
//       Desc: 'Coding Movie',
//       isFavorite: false,
//     },

//     {
//       id: 1,
//       name: 'Money ',
//       medium: 'Web series',
//       category: 'Bank',
//       year: 2018,
//       watchOn: '01/02/2002',
//       Desc: 'Technology movies',
//       isFavorite: false,
//     },
//   ];
// }
