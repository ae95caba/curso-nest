import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update_task.dto';
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
  createTask(task: CreateTaskDto) {
    this.tasks.push({ ...task, id: this.tasks.length + 1 });
    return task;
  }
  updateTask(task: UpdateTaskDto) {
    console.log(task);
    return 'task actualizada';
  }
  deleteTask() {
    return 'task borrada';
  }
}
