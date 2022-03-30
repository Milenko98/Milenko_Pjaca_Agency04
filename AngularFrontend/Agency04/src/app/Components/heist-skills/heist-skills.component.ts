import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { HeistSkill } from 'src/app/Models/heist-skill';
import { HeistServiceService } from 'src/app/Service/heist-service.service';
import { AddHeistSkillsComponent } from '../add-heist-skills/add-heist-skills.component';
import { UpdateHeistSkillComponent } from '../update-heist-skill/update-heist-skill.component';

@Component({
  selector: 'app-heist-skills',
  templateUrl: './heist-skills.component.html',
  styleUrls: ['./heist-skills.component.css'],
})
export class HeistSkillsComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'level',
    'members',
    'update',
    'delete',
  ];
  dataSource!: MatTableDataSource<HeistSkill>;
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

    this.heistService.getHeistSkills(parseInt(this.id)).subscribe(
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
    const modalref = this.dialog.open(AddHeistSkillsComponent);
    modalref.componentInstance.id = this.id;
    this.dialog._getAfterAllClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  updateSkill(skill: HeistSkill) {
    this.heistService.sendHeistSkillToUpdate(skill);
    this.heistService.sendHeistId(parseInt(this.id));
    const modalref = this.dialog.open(UpdateHeistSkillComponent);
    modalref.componentInstance.id = this.id;
    this.dialog._getAfterAllClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  goBack() {
    this.route.navigate(['/Heists']);
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
