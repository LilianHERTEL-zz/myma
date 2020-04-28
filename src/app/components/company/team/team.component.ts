import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/model/team';
import { Member } from 'src/app/model/member';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  team: Array<Member> = new Team().team;
  constructor(private navigationService: NavigationService) {}

  onContactClick() {
    // this.navigationService.selectLink('contact');
  }

  ngOnInit(): void {}
}
