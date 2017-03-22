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
  title;
  owner;
  city;
  bedrooms;
  price;
  image;
  type;

  constructor(
    private firebaseService:FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getPatientDetail (this.id).subscribe(patient => {
      this.title = patient.title;
      this.owner = patient.owner;
      this.city = patient.city;
      this.bedrooms = patient.bedrooms;
      this.price = patient.price;
      this.type = patient.type;
    });
  }

  onEditSubmit(){
    let patient = {
        title: this.title,
        owner: this.owner,
        city: this.city,
        bedrooms: this.bedrooms,
        price: this.price,
        type: this.type
    }

    this.firebaseService.updatePateintDetail (this.id, patient);

    this.router.navigate(['/patientlist']);
  }

}
