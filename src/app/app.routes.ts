import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layout/flash-cards-layout/flash-cards-layout')
    }
];
