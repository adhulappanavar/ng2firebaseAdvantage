import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import {FirebaseService} from './services/firebase.service';
import {FlashMessagesModule} from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { ListingsComponent } from './components/listingComponent/listings/listings.component';
import { ListingComponent } from './components/listingComponent/listing/listing.component';
import { AddListingComponent } from './components/listingComponent/add-listing/add-listing.component';
import { EditListingComponent } from './components/listingComponent/edit-listing/edit-listing.component';

/* Patient */
import { PatientlistComponent } from './components/patientComponent/patientlist/patientlist.component';
import { PatientDetailComponent } from './components/patientComponent/patientdetail/patientdetail.component';
import { AddPatientComponent } from './components/patientComponent/add-patient/add-patient.component';
import { EditPatientComponent } from './components/patientComponent/edit-patient/edit-patient.component';


/* Items */
import { ItemlistComponent } from './components/itemsComponent/itemlist/itemlist.component';
import { ItemDetailComponent } from './components/itemsComponent/itemdetail/itemdetail.component';
import { AddItemComponent } from './components/itemsComponent/add-item/add-item.component';
import { EditItemComponent } from './components/itemsComponent/edit-item/edit-item.component';

import { AddItem2PatientComponent } from './components/item2patient/additem2patient/additem2patient.component';

/*
export const firebaseConfig = {
  apiKey: 'AIzaSyBzMDTMDWrBZbUkNC-uSNmQIl5rCbNoqeg',
  authDomain: 'proplistings-1eed8.firebaseapp.com',
  databaseURL: 'https://proplistings-1eed8.firebaseio.com',
  storageBucket: 'proplistings-1eed8.appspot.com',
  messagingSenderId: '605642180089'
};
*/

export const firebaseConfig = {
    apiKey: "AIzaSyDodZmHDCecDkjiG9HWlRPs8KLbJIo0dzU",
    authDomain: "proplisting-3eace.firebaseapp.com",
    databaseURL: "https://proplisting-3eace.firebaseio.com",
    storageBucket: "proplisting-3eace.appspot.com",
    messagingSenderId: "883245683075"
  };
const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'listings', component:ListingsComponent},
  {path:'listing/:id', component:ListingComponent},
  {path: 'add-listing', component:AddListingComponent},
  {path:'edit-listing/:id', component:EditListingComponent},
  /* Patient */
  {path: 'patientlist', component:PatientlistComponent},
  {path:'patientdetail/:id', component:PatientDetailComponent},
  {path: 'add-patient', component:AddPatientComponent},
  {path:'edit-patient/:id', component:EditPatientComponent},
   /* Items */
  {path: 'itemlist', component:ItemlistComponent},
  {path:'itemdetail/:id', component:ItemDetailComponent},
  {path: 'add-item', component:AddItemComponent},
  {path:'edit-item/:id', component:EditItemComponent},

     /* Items */
  {path: 'additems2patient/:id', component:AddItem2PatientComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,

    ListingsComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent,
    /**  Patient Component */
    PatientlistComponent,
    PatientDetailComponent,
    AddPatientComponent,
    EditPatientComponent,
    /**  Patient Component */
    ItemlistComponent,
    ItemDetailComponent,
    AddItemComponent,
    EditItemComponent,

    AddItem2PatientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
