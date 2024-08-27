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
import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('/tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get()
  async getTaks(@Query() query: ExpressQuery): Promise<Task[]> {
    console.log(query);
    return this.tasksService.getTasks(query);
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
  @Put(':id')
  async updateTask(
    @Param('id') id: string,
    @Body() task: UpdateTaskDto,
  ): Promise<Task> {
    return this.tasksService.updateTask(id, task);
  }
  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<Task> {
    return this.tasksService.deleteTask(id);
  }
}
