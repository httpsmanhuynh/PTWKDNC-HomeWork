import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Homework } from './homework/homework';
import { ViewProductComponent } from './Bai14/view-product-component/view-product-component';
import { JsonObjectModel } from './Bai18/json-object-model/json-object-model';
import { provideHttpClient } from '@angular/common/http';
// import { ServiceProductImageEvent } from './Bai13/service-product-image-event/service-product-image-event';
// import { ServiceProductImageEventDetail } from './Bai13/service-product-image-event-detail/service-product-image-event-detail';
@NgModule({
  declarations: [App, Homework, ViewProductComponent, JsonObjectModel],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
