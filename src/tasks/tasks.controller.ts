import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get()
  getTaks() {
    return this.tasksService.getTasks();
  }
  @Post()
  createTask() {
    return this.tasksService.createTask();
  }
  @Put()
  updateTask() {
    return this.tasksService.updateTask();
  }
  @Delete()
  deleteTask() {
    return this.tasksService.deleteTask();
  }
}
