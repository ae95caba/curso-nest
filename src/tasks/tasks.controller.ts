import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Query,
  Param,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get()
  getTaks(@Query() query: any) {
    console.log(query);
    return this.tasksService.getTasks();
  }
  @Get('/:id')
  getTask(@Param('id') id: string) {
    console.log(id);
    return this.tasksService.getTask(parseInt(id));
  }
  @Post()
  createTask(@Body() task: any) {
    return this.tasksService.createTask(task);
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
