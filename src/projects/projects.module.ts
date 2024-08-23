import { Module } from '@nestjs/common';
import { TaskController } from './projects.controller';

@Module({ controllers: [TaskController] })
export class ProjectsModule {}
