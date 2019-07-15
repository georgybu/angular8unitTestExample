import {Component, OnInit} from '@angular/core';
import {UsersService} from '@services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng8test1';

  constructor(private users: UsersService) {
  }

  ngOnInit(): void {
    this.users.fetchUsers().subscribe((users) => {
      console.log(users);
    });
  }
}
