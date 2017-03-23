import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any>;

  patientlist: FirebaseListObservable<any[]>;
  patientdetail: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire) {
    this.listings = this.af.database.list('/listings') as FirebaseListObservable<Listing[]>;
    this.patientlist = this.af.database.list('/patientlist') as FirebaseListObservable<Patient[]>;
  }

  getListings(){
    return this.listings;
  }

  getListingDetails(id){
    this.listing = this.af.database.object('/listings/'+id) as FirebaseObjectObservable<Listing>
    return this.listing;
  }

  addListing(listing){
        return this.listings.push(listing);
      
    }
  

  updateListing(id, listing){
    return this.listings.update(id, listing);
  }

  deleteListing(id){
    return this.listings.remove(id);
  }

  /* Patients ****/

getPatientList(){
    return this.patientlist;
  }

  getPatientDetail(id){
    this.patientdetail = this.af.database.object('/patientlist/'+id) as FirebaseObjectObservable<Listing>
    return this.patientdetail;
  }

  addPatientDetail(patientdetail){
    // Get a key for a new Post.
      var newPatientKey = firebase.database().ref().child('patientlist').push().key;
    // Write the new post's data simultaneously in the posts list and the user's post list.
      var updates = {};
      updates['/patientlist/' + newPatientKey] = patientdetail;
      updates['/listings/'  + newPatientKey] = patientdetail;

  return firebase.database().ref().update(updates);
        //return this.patientlist.push(patientdetail);
      
    }
  

  updatePateintDetail(id, patientdetail){
    return this.patientlist.update(id, patientdetail);
  }

  deletePatientDetail(id){
    return this.listings.remove(id);
  }


}

interface Listing{
  $key?:string;
  title?:string;
  type?:string;
  image?:string;
  city?:string;
  owner?:string;
  bedrooms?:string;
}

interface Patient{
  $key?:string;
  title?:string;
  type?:string;
  image?:string;
  city?:string;
  owner?:string;
  bedrooms?:string;
}
