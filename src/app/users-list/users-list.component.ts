import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { Observable } from '../../../node_modules/rxjs';
import { user } from '../models/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
users:Observable<user[]>;
  constructor(private dbs: DatabaseService) { }

  ngOnInit() {
 
  }

}
