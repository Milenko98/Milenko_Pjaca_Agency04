import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberSkill } from 'src/app/Models/member-skill';
import { HeistServiceService } from 'src/app/Service/heist-service.service';
import { AddSkillsComponent } from '../add-skills/add-skills.component';
import { UpdateSkillComponent } from '../update-skill/update-skill.component';

@Component({
  selector: 'app-member-skills',
  templateUrl: './member-skills.component.html',
  styleUrls: ['./member-skills.component.css'],
})
export class MemberSkillsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'level', 'update', 'delete'];
  dataSource!: MatTableDataSource<MemberSkill>;
  id!: string;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private activatedRoute: ActivatedRoute,
    private heistService: HeistServiceService,
    private route: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;

    this.heistService.getSkillsDB(parseInt(this.id)).subscribe(
      (res: any) => {
        if (res !== null) {
          this.dataSource = new MatTableDataSource(res);
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

  addSkills() {
    const modalref = this.dialog.open(AddSkillsComponent);
    modalref.componentInstance.id = this.id;
    this.dialog._getAfterAllClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  updateSkill(skill: MemberSkill) {
    this.heistService.sendSkillToUpdate(skill);
    this.heistService.sendMemberId(parseInt(this.id));
    const modalref = this.dialog.open(UpdateSkillComponent);
    modalref.componentInstance.id = this.id;
    this.dialog._getAfterAllClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  goBack() {
    this.route.navigate(['/HeistMembers']);
  }

  deleteSkills(id: any, name: any) {
    this.heistService.deleteSkill(id, name).subscribe(
      (res: any) => {
        if (res !== null) {
        } else {
          this.route.navigate(['/member/' + this.id + '/skills/' + name]);
        }
      },
      (err) => {
        console.log('Error!');
        console.log(err);
      }
    );
  }
}
