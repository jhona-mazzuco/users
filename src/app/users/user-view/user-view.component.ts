import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/interfaces/user';
import { UsersService } from '../../shared/services/users.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  users: User[];

  constructor(private service: UsersService) {
  }

  async ngOnInit(): Promise<void> {
    this.users = await this.service.getUsers();
  }
}
