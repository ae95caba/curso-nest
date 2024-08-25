import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update_task.dto';
import { TaskDto } from './dto/task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './task.schema';
import mongoose from 'mongoose';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task.name) private taskModel: mongoose.Model<Task>,
  ) {}
  async getTasks(): Promise<Task[]> {
    const tasks = await this.taskModel.find();

    return tasks;
  }
  private tasks = [];
  async getTask(id: string): Promise<Task> {
    const task = await this.taskModel.findById(id);

    return task;
  }
  async createTask(task: Task): Promise<Task> {
    const res = await this.taskModel.create(task);
    return res;
  }
  updateTask(task: UpdateTaskDto) {
    console.log(task);
    return 'task actualizada';
  }
  deleteTask() {
    return 'task borrada';
  }
}
