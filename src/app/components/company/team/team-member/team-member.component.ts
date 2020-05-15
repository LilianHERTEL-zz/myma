import { Component, Input } from '@angular/core';
import { Member } from 'src/app/model/member';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss'],
})

/**
 * Presents a single team member with a photos
 */
export class TeamMemberComponent {
  // The member instance, given in the html template
  @Input() member: Member;

  constructor() {}
}
