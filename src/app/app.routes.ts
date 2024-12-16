import { Routes } from '@angular/router';
import { SearchTableComponent } from './search-table/search-table.component';

export const rootRouterConfig: Routes = [
    { path: 'searchTable', component: SearchTableComponent, pathMatch:'full' },
];
