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
  Req,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update_task.dto';

import { Task } from './task.schema';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { AuthGuard } from '@nestjs/passport';

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
  @UseGuards(AuthGuard())
  async createTask(@Body() task: CreateTaskDto, @Req() req): Promise<Task> {
    console.log(req.user);
    return this.tasksService.createTask(task, req.user);
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
