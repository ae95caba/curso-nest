import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getTasks() {
    return 'tasks...';
  }
  createTask() {
    return 'task creada';
  }
  updateTask() {
    return 'task actualizada';
  }
  deleteTask() {
    return 'task borrada';
  }
}
