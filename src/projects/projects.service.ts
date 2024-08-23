import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {
  getProjects() {
    return 'projects';
  }
}
