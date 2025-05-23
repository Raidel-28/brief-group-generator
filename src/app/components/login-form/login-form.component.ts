import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  error = '';
  form: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.form = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  async onSubmit() {
    const { email, password } = this.form.value;
    const success = await this.auth.login(email!, password!);
    if (success) {
      this.router.navigate(['/listes']);
    } else {
      this.error = 'Identifiants incorrects.';
    }
  }
}

