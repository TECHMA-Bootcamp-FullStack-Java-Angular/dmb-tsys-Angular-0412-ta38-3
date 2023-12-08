import { Injectable, signal } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root',
})
export default class TaskService {
  constructor() {}

  listTask = signal<Task[]>([]);

  addTask(task: Task) {
    task.done = false;
    this.listTask.update((tasks) => [...tasks, task]);
  }

  deleteTask(task: Task) {
    this.listTask.update((tasks) => tasks.filter((t) => t !== task));

  }

  updateTask(task: Task) {
    this.listTask.update((tasks) => tasks.map((t) => (t === task ? task : t)));
  }


}
