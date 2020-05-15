import { Component } from '@angular/core';
import { Team } from 'src/app/model/team';
import { Member } from 'src/app/model/member';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})

/**
 * Presents all team members with photos
 */
export class TeamComponent {
  // Array containing all members
  team: Array<Member> = new Team().team;

  constructor() {}
}
