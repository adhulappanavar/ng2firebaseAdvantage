import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})

export class EditItemComponent implements OnInit {
  id;
  i_name;
  i_unitprice;


  constructor(
    private firebaseService:FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getItemDetail (this.id).subscribe(item => {
      this.i_name = item.i_name;
      this.i_unitprice = item.i_unitprice;
    });
  }

  onEditSubmit(){
    let item = {
        i_name: this.i_name,
        i_unitprice: this.i_unitprice
    }

    this.firebaseService.updateItemDetail (this.id, item);

    this.router.navigate(['/itemlist']);
  }

}
