import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../../services/firebase.service';

@Component({
  selector: 'app-items',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {
  items:any;

  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getItemList().subscribe(items => {
      console.log(items);
      this.items = items;
    });
  }

}
