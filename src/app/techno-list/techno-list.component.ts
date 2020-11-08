import { Component, OnInit } from '@angular/core';
import { Technology } from '../models/technology';
import { TechnoService } from '../services/techno.service';

@Component({
  selector: 'app-techno-list',
  templateUrl: './techno-list.component.html',
  styleUrls: ['./techno-list.component.css']
})
export class TechnoListComponent implements OnInit {
  allTechnos: Array<Technology> = [];

  constructor(private technoService: TechnoService) { }

  ngOnInit(): void {
    this.getTechnos();
  }

  getTechnos() {
    this.allTechnos = this.technoService.getAllTechno();
  }

  deleteTechno(techno: Technology) {
    this.allTechnos = this.technoService.deleteTechno(techno);
  }
}
