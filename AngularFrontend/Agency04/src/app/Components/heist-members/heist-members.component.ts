import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HeistMember } from 'src/app/Models/heist-member';
import { MemberSkill } from 'src/app/Models/member-skill';
import { HeistServiceService } from 'src/app/Service/heist-service.service';
import { CreateHeistMemberComponent } from '../create-heist-member/create-heist-member.component';

@Component({
  selector: 'app-heist-members',
  templateUrl: './heist-members.component.html',
  styleUrls: ['./heist-members.component.css'],
})
export class HeistMembersComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'sex',
    'mainSkill',
    'status',
    'skills',
  ];
  dataSource!: MatTableDataSource<HeistMember>;
  members!: HeistMember[];
  skills = new Array<MemberSkill>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private route: Router,
    private heistService: HeistServiceService
  ) {}

  ngOnInit(): void {
    this.heistService.getMembers().subscribe(
      (res: any) => {
        if (res !== null) {
          this.dataSource = new MatTableDataSource(res);
          this.ngAfterViewInit();
        } else {
        }
      },
      (err) => {
        console.log('Error!');
        console.log(err);
      }
    );
  }

  ngAfterViewInit() {
    if (this.dataSource !== undefined) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  viewSkills(id: any, member: HeistMember) {
    this.heistService.sendMember(member);
    this.route.navigate(['/member/' + id + '/skills']);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateHeistMemberComponent, {
      width: '250px',
    });
  }

  Create() {
    this.route.navigate(['/member']);
  }
}
