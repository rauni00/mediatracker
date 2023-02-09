import { Directive, HostBinding, HostListener } from '@angular/core';
@Directive({
  selector: '[miFavorite]',
})
export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true;
  @HostBinding('class.is-favoriteHover') isFavoriteHover = false;
  @HostListener('mouseenter') mouseEnter() {
    this.isFavoriteHover = true;
    // this.isFavorite = false;
    // alert('Please Confirm Again for delete');
  }
  // pipes
  @HostListener('mouseleave') mouseLeave() {
    this.isFavoriteHover = false;
  }
  // @HostBinding('style.color') Color: any;
  // @HostListener('mouseenter') Enter() {
  //   this.Color = 'red'
  // }
  // @HostListener('mouseleave') Out() {
  //   this.Color = null;
  // }
}
// import { Directive, ElementRef, HostListener, } from '@angular/core';
// import {Directive, ElementRef, Renderer2, Input, HostListener, HostBinding } from '@angular/core';
// @Directive({
//   selector: '[CustomD]',
// })
// export class CustomDirective {
//     private elementSelected = false;
//   constructor(private el: ElementRef) {
//     // eleRef.nativeElement.style.background = 'black';
//     // eleRef.nativeElement.style.color = 'white';
//     // el.nativeElement.style.color = 'red';
//   @HostListener('click') onclick()
//   {
//     this.elementSelected = !this.elementSelected;
//     if (this.elementSelected) {
//       this.el.nativeElement.classList.add('toggle')
//     } else {
//       this.el.nativeElement.classList.remove('toggle')
//     }
//   }
// }
// }
// import {
//   Directive,
//   ElementRef,
//   Renderer2,
//   Input,
//   HostListener,
//   HostBinding,
// } from '@angular/core';
// @Directive({
//   selector: '[ttToggle]',
// })
// export class ttToggleDirective {
//   private elementSelected = false;
//   //   @HostBinding('style.border') border: string;
//   constructor(private el: ElementRef) {
//     // this.border = border;
//   }
//   //    @HostListener('click')
//   //   OnClick() {
//   //     window.alert('You Click on Heart ');
//   @HostListener('click')
//   private onClick() {
//     this.elementSelected = !this.elementSelected;
//     if (this.elementSelected) {
//       this.el.nativeElement.classList.add('toggle');
//       alert('You Click on Heart ');
//     } else {
//       this.el.nativeElement.classList.remove('toggle');
//     }
//   }
// }
//   }
//   @HostListener('click')
//   OnClick() {
//     window.alert('You Click on Heart ');
//   }
// @HostListener('mouseover') OnMouse() {
//   window.alert('hover on button host listener');
// }
