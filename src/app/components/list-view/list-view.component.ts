import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DragDropModule, CdkDragDrop, transferArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [CommonModule, RouterModule, DragDropModule],
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent {
  lists = [
    {
      id: 1,
      name: 'Liste 1',
      persons: [
        { name: 'Alice' },
        { name: 'Bob' },
        { name: 'Charlie' },
        { name: 'David' }
      ],
      draws: []
    },
    {
      id: 2,
      name: 'Liste 2',
      persons: [
        { name: 'Eva' },
        { name: 'Fred' },
        { name: 'Gina' }
      ],
      draws: []
    }
  ];

  // Génère des groupes de 2 personnes
  generateGroups(list: any) {
    const shuffled = [...list.persons].sort(() => Math.random() - 0.5);
    const groups: any[][] = [];
    while (shuffled.length > 0) {
      groups.push(shuffled.splice(0, 2));
    }
    list.draws = groups;
  }

  // Fonction de drag & drop
  drop(event: CdkDragDrop<any[]>, listIndex: number, groupIndex: number) {
    const list = this.lists[listIndex];

    if (event.previousContainer === event.container) {
      moveItemInArray(list.draws[groupIndex], event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}


