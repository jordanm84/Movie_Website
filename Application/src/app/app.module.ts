import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { LandingComponent } from './landing/landing.component';
import { MoviePromoComponent } from './movie-promo/movie-promo.component';

const appRoutes: Routes =
[
  {path: '', component: LandingComponent},
  {path: 'test', component: MoviePromoComponent},
  {path: 'details', component: DetailsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    LandingComponent,
    MoviePromoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }