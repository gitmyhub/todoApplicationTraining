import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  message: string;
  rank: number;
  usernames: string[];
  username: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.username = this.route.snapshot.params.name;
  }

    getUserName(): string {
        return 'shiksha';

    }
}

