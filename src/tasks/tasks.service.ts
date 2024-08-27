import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Task } from './task.schema';
import mongoose from 'mongoose';
import { Query as ExpressQuery } from 'express-serve-static-core';
@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task.name) private taskModel: mongoose.Model<Task>,
  ) {}
  async getTasks(query: ExpressQuery): Promise<Task[]> {
    console.log(query);
    const resPerPage = 2;
    const currentPage = Number(query.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    const keyword = query.keyword
      ? { title: { $regex: query.keyword, $options: 'i' } }
      : {};
    const tasks = await this.taskModel
      .find({ ...keyword })
      .limit(resPerPage)
      .skip(skip);

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
