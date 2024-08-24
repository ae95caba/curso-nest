import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';

import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [ProjectsModule, AuthModule, TasksModule, PaymentsModule],
})
export class AppModule {}
