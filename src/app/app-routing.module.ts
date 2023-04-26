import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';

import { TareasComponent } from './pages/tareas/tareas.component';
import { DetalleTareaComponent } from './pages/detalle-tarea/detalle-tarea.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard], data: {
    role: 'usuario'
  } },
  { path: 'tareas', component: TareasComponent, canActivate: [AuthGuard]},
  { path: 'tareas/:id', component: DetalleTareaComponent, canActivate: [AuthGuard] },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
