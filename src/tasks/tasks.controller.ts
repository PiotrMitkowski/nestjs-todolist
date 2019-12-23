import { Controller, Get, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

  constructor(private readonly tasksService: TasksService) {
  }

  @Get()
  getTasks(): string[] {
    return this.tasksService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') id: string): string {
    return this.tasksService.getTask(id);
  }
}
