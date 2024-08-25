import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';

import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';
import { PaymentsModule } from './payments/payments.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.DB_URI),
    ProjectsModule,
    AuthModule,
    TasksModule,
    PaymentsModule,
  ],
})
export class AppModule {}
