import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MediaServices } from '../mediaItem/media-Item.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
})
export class FormBuilderComponent implements OnInit {
  form: FormGroup;
  constructor(
    @Inject(MediaServices) private mediaservice,
    private formBuilder: FormBuilder
  ) {}
  MediaItem: any;
  ngOnInit() {
    // this.MediaItem = this.mediaservice.get();
    this.form = this.formBuilder.group({
      name: this.formBuilder.control('', [
        Validators.required,
        Validators.pattern('[\\w\\_\\-\\/]+'),
      ]),
      watchOn: this.formBuilder.control(''),
      Desc: this.formBuilder.control(''),
      medium: this.formBuilder.control('Movies'),
      category: this.formBuilder.control(''),
      year: this.formBuilder.control('', [this.yearValidator]),
    });
  }

  yearValidator(control: FormControl) {
    if (control.value.trim().length === 0) {
      return null;
    }

    const year = parseInt(control.value, 10);
    const minYear = 1900;
    const maxYear = 2022;
    if (year >= minYear && year <= maxYear) {
      return null;
    } else return { year: { min: minYear, max: maxYear } };
  }
  onSubmit(formValue: any) {
    // console.log(formValue);
    this.mediaservice.add(formValue);
  }
}

// onDeleteItem() {
//   console.log('Media Item Deleted');
//   alert('comment deleted');
// }
// template: `<p class="gl">IN TEMPLATE</p>`,
//templating string is backtick => ``
//when we
//in component and global css firstly run globally css rather than styles in @component
//inline kar ya internal firstly run inline css
