import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deleted-member-skill',
  templateUrl: './deleted-member-skill.component.html',
  styleUrls: ['./deleted-member-skill.component.css'],
})
export class DeletedMemberSkillComponent implements OnInit {
  name!: string;
  id!: string;

  constructor(private activatedRoute: ActivatedRoute, private route: Router) {}
  ngOnInit(): void {
    this.name = this.activatedRoute.snapshot.paramMap.get('name') as string;
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  onBack() {
    this.route.navigate(['/member/' + this.id + '/skills']);
  }
}
