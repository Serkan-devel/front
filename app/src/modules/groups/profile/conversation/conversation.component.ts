import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

// import { GroupsService } from '../../groups-service';

import { Client } from '../../../../services/api';
import { Session, SessionFactory } from '../../../../services/session';

@Component({
  moduleId: module.id,
  selector: 'minds-groups-profile-conversation',
  templateUrl: 'conversation.component.html'
})
export class GroupsProfileConversation {
  @Input() group: any;

  session: Session = SessionFactory.build();

  constructor(private router: Router) { }

  ngOnInit() {
    if (!this.group['is:member'] && this.group.membership != 2) {
      this.router.navigate(['/groups/profile', this.group.guid, 'activity']);
      return;
    }
  }
}
