import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-additem2patient',
  templateUrl: './additem2patient.component.html',
  styleUrls: ['./additem2patient.component.css']
})
export class AddItem2PatientComponent implements OnInit {
  p_id:any;
  patient: any;
  items:any;


  constructor(
    private firebaseService: FirebaseService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    // Get ID
    this.p_id = this.route.snapshot.params['id'];

      this.firebaseService.getPatientDetail (this.p_id).subscribe(patient => {
      this.patient = patient;
      });

    this.firebaseService.getItemList().subscribe(items => {
      console.log(items);
      this.items = items;
    });
  }


}
