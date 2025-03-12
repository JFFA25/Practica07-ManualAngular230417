import { Routes } from '@angular/router';
import { Page1Component } from './pages/page1/page1.component'; // Asegúrate de importar el componente correcto
import { Page2Component } from './pages/page2/page2.component'; // Asegúrate de importar el componente correcto
import { Page3Component } from './pages/page3/page3.component'; // Asegúrate de importar el componente correcto

export const routes: Routes = [
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component },
  { path: '', redirectTo: '/page1', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/page1' } // Ruta para manejar 404
];
