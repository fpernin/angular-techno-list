import { Injectable } from '@angular/core';
import { Data } from '@angular/router';

import { Technology } from '../models/technology';

@Injectable({
  providedIn: 'root'
})
export class TechnoService {
  technos: Array<Technology> = [
    {id: Date.now() + 1, technoName: 'Angular', category: 'front', details: 'Un framework. Mobile & desktop.' },
    {id: Date.now() + 2, technoName: 'React', category: 'front', details: 'Une bibliothèque JavaScript pour créer des interfaces utilisateurs' },
    {id: Date.now() + 3, technoName: 'Laravel', category: 'fullstack', details: 'Une progressive librairie JavaScript' },
    {id: Date.now() + 4, technoName: 'NestJS', category: 'back', details: 'Un framework Node.js progressif pour créer des applications côté serveur efficaces, fiables et évolutives.' },
  ];

  constructor() { }
  
  createTechno(techno: Technology) {
    const newTechno = { id: Date.now(), ...techno };

    this.technos = [newTechno, ...this.technos];
  }

  getAllTechno() {
    return this.technos;
  }

  deleteTechno(techno: Technology) {
    this.technos = this.technos.filter(t => t.id !== techno.id);
    return this.technos;
  }
}
