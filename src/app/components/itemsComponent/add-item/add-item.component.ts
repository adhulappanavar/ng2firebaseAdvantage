import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  i_name:any;
  i_unitprice:any;

  constructor(
    private firebaseService:FirebaseService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit(){
    let item = {
      i_name: this.i_name,
      i_unitprice: this.i_unitprice
    }

    console.log("Calling firebaseService.addItemDetail with item ", item);
    this.firebaseService.addItemDetail(item);

    this.router.navigate(['itemlist']);
  }

}
