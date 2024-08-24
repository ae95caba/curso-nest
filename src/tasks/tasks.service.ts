import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update_task.dto';
import { TaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
  private tasks = [];
  getTasks(): TaskDto[] | NotFoundException {
    if (this.tasks.length === 0) {
      return new NotFoundException('No tasks found.');
    }
    return this.tasks;
  }
  getTask(id: number): TaskDto | NotFoundException {
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
