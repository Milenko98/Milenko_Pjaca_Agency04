import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateHeistMemberComponent } from './Components/create-heist-member/create-heist-member.component';
import { CreateHeistComponent } from './Components/create-heist/create-heist.component';
import { DeletedMemberSkillComponent } from './Components/deleted-member-skill/deleted-member-skill.component';
import { HeistMembersComponent } from './Components/heist-members/heist-members.component';
import { HeistSkillsComponent } from './Components/heist-skills/heist-skills.component';
import { HeistsComponent } from './Components/heists/heists.component';
import { MemberSkillsComponent } from './Components/member-skills/member-skills.component';
import { MembersProfileComponent } from './Components/members-profile/members-profile.component';
import { OutComeHeistsComponent } from './Components/out-come-heists/out-come-heists.component';
import { ReadyHeistsComponent } from './Components/ready-heists/ready-heists.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/HeistMembers',
    pathMatch: 'full',
  },
  {
    path: 'HeistMembers',
    component: HeistMembersComponent,
  },

  {
    path: 'member',
    component: CreateHeistMemberComponent,
  },

  {
    path: 'heist',
    component: CreateHeistComponent,
  },

  {
    path: 'Heists',
    component: HeistsComponent,
  },

  {
    path: 'ReadyHeists',
    component: ReadyHeistsComponent,
  },

  {
    path: 'OutComesHeists',
    component: OutComeHeistsComponent,
  },

  {
    path: 'MembersProfile',
    component: MembersProfileComponent,
  },

  {
    path: 'member/:id/skills',
    component: MemberSkillsComponent,
  },

  {
    path: 'heist/:id/skills',
    component: HeistSkillsComponent,
  },

  {
    path: 'member/:id/skills/:name',
    component: DeletedMemberSkillComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
