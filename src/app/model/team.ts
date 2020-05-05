import { Member } from './member';

export class Team {
  team: Array<Member> = [
    new Member('Leon', 'CEO', 'assets/images/team/leon.png'),
    new Member('Alan', 'CTO', 'assets/images/team/alan.png'),
    new Member('Lewis', 'Lead App Developer', 'assets/images/team/lewis.png'),
    new Member('Andrew', 'Deep Learning Engineer', 'assets/images/team/andrew.png'),
    new Member('Miriam', 'CMO', 'assets/images/team/miriam.png'),
    new Member('Craig', 'USA Lead', 'assets/images/team/craig.png'),
    new Member('Laurence', 'CFO', 'assets/images/team/laurence.png'),
  ];
}
