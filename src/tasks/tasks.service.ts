import { Injectable } from '@nestjs/common';
export interface Task {
  name: string;
  description: string;
}
@Injectable()
export class TasksService {
  getTasks(): Task[] {
    return [
      { name: 'Task 1', description: 'This is the first task.' },
      { name: 'Task 2', description: 'This is the second task.' },
      // Add more tasks as needed
    ];
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
