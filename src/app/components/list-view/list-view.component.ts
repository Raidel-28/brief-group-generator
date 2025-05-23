import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonList } from '../../models/list.model';

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent {
  lists: PersonList[] = [
    {
      id: '1',
      name: 'Promo CDA',
      persons: [
        { id: 'p1', name: 'Alice', gender: 'féminin', frenchLevel: 3, isDwwmAlumni: false, techLevel: 2, profile: 'à l’aise', age: 25 }
      ],
      draws: []
    },
    {
      id: '2',
      name: 'Groupe JS',
      persons: [],
      draws: []
    }
  ];
}
