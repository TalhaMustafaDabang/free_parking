import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Observable } from '../../../../node_modules/rxjs';
import { user } from '../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Observable<user[]>;
  constructor(private dbs: DatabaseService) { }

  ngOnInit() {
    this.users=this.dbs.getUsersList();
  }

}
