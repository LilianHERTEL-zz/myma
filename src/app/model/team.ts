import { Member } from './member';

export class Team {
  team: Array<Member> = [
    new Member('Leon', 'CEO', '/assets/images/leon.png'),
    new Member('Alan', 'CTO', '/assets/images/alan.png'),
    new Member('Lewis', 'Lead App Developer', '/assets/images/lewis.png'),
    new Member('Andrew', 'Deep Learning Engineer', '/assets/images/andrew.png'),
    new Member('Miriam', 'CMO', '/assets/images/miriam.png'),
    new Member('Craig', 'USA Lead', '/assets/images/craig.png'),
    new Member('Laurence', 'CFO', '/assets/images/laurence.png'),
  ];
}
