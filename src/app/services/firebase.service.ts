import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any>;

  patientlist: FirebaseListObservable<any[]>;
  patientdetail: FirebaseObjectObservable<any>;

  itemlist: FirebaseListObservable<any[]>;
  itemdetail: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire) {
    this.listings = this.af.database.list('/listings') as FirebaseListObservable<Listing[]>;
    this.patientlist = this.af.database.list('/patientlist') as FirebaseListObservable<Patient[]>;
    this.itemlist = this.af.database.list('/itemlist') as FirebaseListObservable<Patient[]>;
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
  

  updatePatientDetail(id, patientdetail){
    return this.patientlist.update(id, patientdetail);
  }

  deletePatientDetail(id){
    return this.listings.remove(id);
  }

 /* Items ****/

getItemList(){
    return this.itemlist;
  }

  getItemDetail(id){
    this.itemdetail = this.af.database.object('/itemlist/'+id) as FirebaseObjectObservable<Listing>
    return this.itemdetail;
  }

  addItemDetail(itemdetail){
    // Get a key for a new Post.
      var newItemKey = firebase.database().ref().child('itemlist').push().key;
    // Write the new post's data simultaneously in the posts list and the user's post list.
      var updates = {};
      updates['/itemlist/' + newItemKey] = itemdetail;
      updates['/listings/'  + newItemKey] = itemdetail;

  return firebase.database().ref().update(updates);
        //return this.itemlist.push(itemdetail);
      
    }
  

  updateItemDetail(id, itemdetail){
    return this.itemlist.update(id, itemdetail);
  }

  deleteItemDetail(id){
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
  p_name?:string;
  p_guardian?:string;
  p_city?:string;
  p_age?:string;
  p_roomtype?:string;
  p_initial_deposit?:string;
}


interface Item{
  $key?:string;
  p_name?:string;
  p_guardian?:string;
  p_city?:string;
  p_age?:string;
  p_roomtype?:string;
  p_initial_deposit?:string;
}
