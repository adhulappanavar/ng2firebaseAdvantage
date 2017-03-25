import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})

export class EditPatientComponent implements OnInit {
  id;
  p_name;
  p_guardian;
  p_city;
  p_age;
  p_roomtype;
  p_initial_deposit;


  constructor(
    private firebaseService:FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getPatientDetail (this.id).subscribe(patient => {
      this.p_name = patient.p_name;
      this.p_guardian = patient.p_guardian;
      this.p_city = patient.p_city;
      this.p_age = patient.p_age;
      this.p_initial_deposit = patient.p_initial_deposit;
      this.p_roomtype = patient.p_roomtype;
    });
  }

  onEditSubmit(){
    let patient = {
        p_name: this.p_name,
        p_guardian: this.p_guardian,
        p_city: this.p_city,
        p_age: this.p_age,
        p_initial_deposit: this.p_initial_deposit,
        p_roomtype: this.p_roomtype
    }

    this.firebaseService.updatePatientDetail (this.id, patient);

    this.router.navigate(['/patientlist']);
  }

}
