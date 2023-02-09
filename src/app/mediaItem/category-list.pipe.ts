import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'categoryList',
})
export class CategoryListPipe implements PipeTransform {
  transform(mediaItem: any) {
    const categories: any = [];

    // mediaItems.forEach((mediaItem: any) => {
    //   if (categories.indexOf(mediaItem.category) <= -1) {
    //     categories.push(mediaItem.category);
    //   }
    // });
    // categories[0] = 'hello';
    return categories.join(', ');
  }
}

// i am only that can do
