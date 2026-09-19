import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceProductImageEventDetail } from './Bai13/service-product-image-event-detail/service-product-image-event-detail';
import { ServiceProductImageEvent } from './Bai13/service-product-image-event/service-product-image-event';
import { ViewProductComponent } from './Bai14/view-product-component/view-product-component';

const routes: Routes = [
  { path: 'service-product-image-event', component: ServiceProductImageEvent },
  { path: 'service-product-image-event/:id', component: ServiceProductImageEventDetail },
  { path: 'app-view-product-component', component: ViewProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
