import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import AboutComponent from './about/about.component';
import ApplicationComponent from './application/application.component';
import FooterComponent from './footer/footer.component';
import HomeComponent from './home/home.component';
import MenuBarComponent from './menubar/menubar.component';
import PageNotFoundComponent from './pagenotfound/pagenotfound.component';
import RestaurantItemComponent from './restaurant-item/restaurant-item.component';
import ServicesComponent from './services/services.component';
import RestaurantDetailComponent from './restaurant-detail/restaurant-detail.component';
import ReviewComponent from './review/review.component';
import ScoreComponent from './score/score.component';


@NgModule({
    imports: [BrowserModule, FormsModule,
    RouterModule.forRoot([
        {path: '', component: HomeComponent},
    	{path: 'home', component: HomeComponent},
    	{path: 'about', component: AboutComponent},
    	{path: 'services', component: ServicesComponent},
        {path: 'details/:id', component: RestaurantDetailComponent},
    	{path: '**', component: PageNotFoundComponent}
    	])
    ],
    declarations: [
        ApplicationComponent,
        MenuBarComponent,
        FooterComponent,
        AboutComponent,
        ServicesComponent,
        PageNotFoundComponent,
        RestaurantItemComponent,
        HomeComponent,
        RestaurantDetailComponent,
        ReviewComponent,
        ScoreComponent
    ],
    bootstrap: [ApplicationComponent]
})
export default class AppModule {}


