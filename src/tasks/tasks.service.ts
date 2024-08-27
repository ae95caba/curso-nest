import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  async getTask(id: string): Promise<Task> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException('Please enter corrrect id');
    }
    const task = await this.taskModel.findById(id);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return task;
  }
  async createTask(task: Task): Promise<Task> {
    const res = await this.taskModel.create(task);
    return res;
  }
  async updateTask(id: string, task: Task): Promise<Task> {
    return await this.taskModel.findByIdAndUpdate(id, task, {
      new: true,
      runValidators: true,
    });
  }
  async deleteTask(id: string): Promise<Task> {
    return await this.taskModel.findByIdAndDelete(id);
  }
}
