import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent {
  listId: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.listId = this.route.snapshot.paramMap.get('id');
  }
}

