import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Heist } from 'src/app/Models/heist';
import { HeistSkill } from 'src/app/Models/heist-skill';
import { HeistServiceService } from 'src/app/Service/heist-service.service';

@Component({
  selector: 'app-heists',
  templateUrl: './heists.component.html',
  styleUrls: ['./heists.component.css'],
})
export class HeistsComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'location',
    'startTime',
    'endTime',
    'status',
    'skills',
  ];
  dataSource!: MatTableDataSource<Heist>;
  heists!: Heist[];
  skills = new Array<HeistSkill>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private route: Router,
    private heistService: HeistServiceService
  ) {}

  ngOnInit(): void {
    this.heistService.getHeists().subscribe(
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

  viewSkills(id: any, heist: Heist) {
    this.heistService.sendHeist(heist);
    this.route.navigate(['/heist/' + id + '/skills']);
  }

  Create() {
    this.route.navigate(['/heist']);
  }
}
