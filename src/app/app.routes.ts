import { Routes } from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';

export const rootRouterConfig: Routes = [
    { path: 'currencyGates', component: CurrencyComponent, pathMatch:'full' },
];
