import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Query,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update_task.dto';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { Task } from './task.schema';

@Controller('/tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get()
  async getTaks(@Query() query: any): Promise<Task[]> {
    console.log(query);
    return this.tasksService.getTasks();
  }
  @Get('/:id')
  async getTask(@Param('id') id: string): Promise<Task> {
    console.log(id);
    return this.tasksService.getTask(id);
  }
  @Post()
  @UseGuards(AuthGuard)
  async createTask(@Body() task: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(task);
  }
  @Put()
  updateTask(@Body() task: UpdateTaskDto) {
    return this.tasksService.updateTask(task);
  }
  @Delete()
  deleteTask() {
    return this.tasksService.deleteTask();
  }
}
