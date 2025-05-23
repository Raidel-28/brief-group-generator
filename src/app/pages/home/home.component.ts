import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) { }

  goToLogin() {
    this.router.navigate(['/login']); // on ajoutera cette route plus tard
  }

  goToLists() {
    this.router.navigate(['/listes']); // idem, à prévoir dans l’app
  }
}

