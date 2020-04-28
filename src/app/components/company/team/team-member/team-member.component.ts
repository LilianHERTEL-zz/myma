import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/model/member';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss'],
})
export class TeamMemberComponent implements OnInit {
  @Input() member: Member;
  constructor() {}

  ngOnInit(): void {}
}
