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
  getTask(id: number): TaskDto | NotFoundException {
    const taskFound = this.tasks.find((task) => task.id == id);
    if (!taskFound) {
      return new NotFoundException(`task with id ${id} not found`);
    }
    return taskFound;
  }
  createTask(task: CreateTaskDto) {
    this.tasks.push({ ...task, id: this.tasks.length + 1 });
    return task;
  }
  updateTask(task: UpdateTaskDto) {
    console.log(task);
    return 'task actualizada';
  }
  deleteTask() {
    return 'task borrada';
  }
}
