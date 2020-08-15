import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../shared/interfaces/user';
import { UsersService } from '../../shared/services/users.service';

@Component({
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: User;

  constructor(private service: UsersService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.url.subscribe(async url => {
      const id = Number.parseInt(url[0].path, 0);
      if (id !== undefined) {
        this.user = await this.service.findById(id);
      }
    });
  }

  openWebsite(): void {
    window.open(this.user.website, '_blank');
  }

}
