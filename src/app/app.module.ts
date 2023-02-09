import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { mediaItem } from './mediaItem/media-item.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { FavoriteDirective } from './mediaItem/favorite.directive';
import { CategoryListPipe } from './mediaItem/category-list.pipe';
import { CustomPowerPipe } from './test-component/power-test.pipe';
import { SimpleIPipe } from './test-component/SI.pipe';
import { GrossSalary } from './test-component/GrossSalary.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MediaServices } from './mediaItem/media-Item.service';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { XHRBackend } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
// import { MockXHRBackend } from './../mock/mock-xhr-backend';

@NgModule({
  declarations: [
    AppComponent,
    mediaItem,
    TestComponentComponent,
    FavoriteDirective,
    CategoryListPipe,
    CustomPowerPipe,
    SimpleIPipe,
    GrossSalary,
    FormBuilderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    MediaServices,
    {
      provide: XHRBackend,
      // useClass: MockXHRBackend
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
