import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css'],
})
export class TestComponentComponent {
  onSubmit(mediaItem: any) {
    console.log(mediaItem);
  }

  // variable = 'red';
  // name: string = 'Rauniyar';
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
  // name = 'Rahul Rauniyar';
  // itemImageUrl = './rahul.jpg';
  // onSave() {}  btn btn-primary
  // ngOnInit(): void {}
}
