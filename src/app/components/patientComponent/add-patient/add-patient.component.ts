import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  p_name:any;
  p_guardian:any;
  p_city:any;
  p_age:any;
  p_initial_deposit:any;
  p_roomtype:any;

  constructor(
    private firebaseService:FirebaseService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit(){
    let patient = {
      p_name: this.p_name,
      p_city: this.p_city,
      p_guardian: this.p_guardian,
      p_age:this.p_age,
      p_initial_deposit: this.p_initial_deposit,
      p_roomtype: this.p_roomtype
    }

    console.log("Calling firebaseService.addPatientDetail with patinet ", patient);
    this.firebaseService.addPatientDetail(patient);

    this.router.navigate(['patientlist']);
  }

}
