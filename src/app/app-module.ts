import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Homework } from './homework/homework';
import { ViewProductComponent } from './Bai14/view-product-component/view-product-component';
// import { ServiceProductImageEvent } from './Bai13/service-product-image-event/service-product-image-event';
// import { ServiceProductImageEventDetail } from './Bai13/service-product-image-event-detail/service-product-image-event-detail';
@NgModule({
  declarations: [App, Homework, ViewProductComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
