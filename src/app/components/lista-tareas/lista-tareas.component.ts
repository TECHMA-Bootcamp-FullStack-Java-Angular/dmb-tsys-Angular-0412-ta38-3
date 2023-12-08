import { Component, inject } from '@angular/core';
import TaskService from '../../services/task.service';
import { Task } from '../../model/task';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent {

  taskServ = inject(TaskService);

  listaTareas = this.taskServ.listTask;

  isDone = "";

  doneTarea(tarea: Task) {
    tarea.done = !tarea.done;
    }

  eliminarTarea(tarea: Task) {
    this.taskServ.deleteTask(tarea);
  }


}
