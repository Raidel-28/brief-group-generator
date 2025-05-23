import { LoginFormComponent } from './components/login-form/login-form.component';
import { HomeComponent } from './pages/home/home.component';
import { AccountComponent } from './pages/account/account.component';
import { LegalComponent } from './pages/legal/legal.component';
import { ListViewComponent } from './components/list-view/list-view.component';

import { ListDetailComponent } from './components/list-detail/list-detail.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'compte', component: AccountComponent },
    { path: 'mentions-legales', component: LegalComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'listes', component: ListViewComponent },
];

