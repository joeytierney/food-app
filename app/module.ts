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
import NavAreaComponent from './nav-area/nav-area.component';
import RestaurantDetailComponent from './restaurant-detail/restaurant-detail.component';
import MapComponent from './map/map.component';


@NgModule({
    imports: [BrowserModule, FormsModule,
    RouterModule.forRoot([
        {path: '', component: HomeComponent},
    	{path: 'home', component: HomeComponent},
    	{path: 'about', component: AboutComponent},
    	{path: 'services', component: ServicesComponent},
        {path: 'details/:id', component: RestaurantDetailComponent},
        {path: 'details/:county', component: RestaurantItemComponent},
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
        NavAreaComponent,
        RestaurantDetailComponent,
        MapComponent
    ],
    bootstrap: [ApplicationComponent]
})
export default class AppModule {}


