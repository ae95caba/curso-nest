import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ProjectsModule, AuthModule],
})
export class AppModule {}
