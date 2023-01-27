import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Iphone, IphoneComponent } from './iphone/iphone.component';
import { MaquillageComponent } from './maquillage/maquillage.component';
import { OrdinateurComponent } from './ordinateur/ordinateur.component';
import { RefrigerateurComponent } from './refrigerateur/refrigerateur.component';
import { TabletteComponent } from './tablette/tablette.component';

import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'tv', component: TvComponent},
  {path: 'iphones', component: IphoneComponent},
  {path: 'refrigerateur', component: RefrigerateurComponent},
  {path: 'tablette', component: TabletteComponent},
  {path: 'maquillage', component: MaquillageComponent},
  {path: 'ordinateur', component: OrdinateurComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
