import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormularioTareaComponent } from './components/formulario-tarea/formulario-tarea.component';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet , FormularioTareaComponent , ListaTareasComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dmb-tsys-Angular-0412-ta38-3';
}
