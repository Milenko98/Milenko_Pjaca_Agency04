import { NgModule, ChangeDetectorRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './Components/side-nav/side-nav.component';
import { HeistMembersComponent } from './Components/heist-members/heist-members.component';
import { HeistsComponent } from './Components/heists/heists.component';
import { ReadyHeistsComponent } from './Components/ready-heists/ready-heists.component';
import { OutComeHeistsComponent } from './Components/out-come-heists/out-come-heists.component';
import { MembersProfileComponent } from './Components/members-profile/members-profile.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateHeistMemberComponent } from './Components/create-heist-member/create-heist-member.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MemberSkillsComponent } from './Components/member-skills/member-skills.component';
import { UpdateSkillComponent } from './Components/update-skill/update-skill.component';
import { AddSkillsComponent } from './Components/add-skills/add-skills.component';
import { DeletedMemberSkillComponent } from './Components/deleted-member-skill/deleted-member-skill.component';
import { CreateHeistComponent } from './Components/create-heist/create-heist.component';
import { HeistSkillsComponent } from './Components/heist-skills/heist-skills.component';
import { AddHeistSkillsComponent } from './Components/add-heist-skills/add-heist-skills.component';
import { UpdateHeistSkillComponent } from './Components/update-heist-skill/update-heist-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeistMembersComponent,
    HeistsComponent,
    ReadyHeistsComponent,
    OutComeHeistsComponent,
    MembersProfileComponent,
    CreateHeistMemberComponent,
    MemberSkillsComponent,
    UpdateSkillComponent,
    AddSkillsComponent,
    DeletedMemberSkillComponent,
    CreateHeistComponent,
    HeistSkillsComponent,
    AddHeistSkillsComponent,
    UpdateHeistSkillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
  ],
  entryComponents: [CreateHeistMemberComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
