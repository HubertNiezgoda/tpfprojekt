import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from 'src/cards/cards.component';
import { Cards1Component } from 'src/cards1/cards1.component';
import { Cards2Component } from 'src/cards2/cards2.component';
import { Cards3Component } from 'src/cards3/cards3.component';
import { Cards4Component } from 'src/cards4/cards4.component';
import { AuthGuard } from 'src/guards/auth.guard';
import { LoginComponent } from 'src/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'cards', component: CardsComponent, canActivate: [AuthGuard]},
  {path: 'cards2', component: Cards2Component},
  {path: 'cards3', component: Cards3Component},
  {path: 'cards4', component: Cards4Component},
  {path: 'cards1', component: Cards1Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
