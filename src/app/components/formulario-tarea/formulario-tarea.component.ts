import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup,  } from '@angular/forms';
import TaskService from '../../services/task.service';

@Component({
  selector: 'app-formulario-tarea',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-tarea.component.html',
  styleUrl: './formulario-tarea.component.css',
})
export class FormularioTareaComponent {

  servTask = inject(TaskService);

  form: FormGroup = new FormGroup({
    titulo: new FormControl(''),
    descripcion: new FormControl(''),
  })

  agregarTarea() {
    this.servTask.addTask(this.form.value);
    this.form.reset();
  }
}
