import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromisesComponent } from './promises/promises.component';
import { CallbacksComponent } from './callbacks/callbacks.component';
import { MapComponent } from './map/map.component';
import { CreatorComponent } from './creator/creator.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: 'promises',
    component: PromisesComponent
  },
  {
    path: 'callbacks',
    component: CallbacksComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'creator',
    component: CreatorComponent
  },
  {
    path: 'main',
    component: MainPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
