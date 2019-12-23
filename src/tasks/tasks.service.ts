import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

  getTasks(): string[] {
    return ['foo', 'bar'];
  }

  getTask(taskId: string): string {
    return 'foo';
  }
}
