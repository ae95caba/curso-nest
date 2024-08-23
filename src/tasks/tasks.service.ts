import { Injectable, NotFoundException } from '@nestjs/common';
export interface Task {
  name: string;
  description: string;
}
@Injectable()
export class TasksService {
  private tasks = [];
  getTasks(): Task[] {
    return this.tasks;
  }
  getTask(id: number): any {
    const taskFound = this.tasks.find((task) => task.id == id);
    if (!taskFound) {
      return new NotFoundException(`task with id ${id} not found`);
    }
    return taskFound;
  }
  createTask(task: any) {
    this.tasks.push({ ...task, id: this.tasks.length + 1 });
    return task;
  }
  updateTask() {
    return 'task actualizada';
  }
  deleteTask() {
    return 'task borrada';
  }
}
