import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../constants/tasks.interface';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
})
export class TasksListComponent implements OnInit {
  @Input() tasks: Task[];
  isDisabled: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  removeTask(task: Task) {
    const taskIndex = this.tasks.indexOf(task);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    }
  }

  toggleCompleted(task: Task) {
    if (!task.completed) {
      task.completed = true;
      // Optionally, you can disable the button after completing the task
      task.disabled = true;
    } else {
      // Optionally, you can enable the button if the task is uncompleted
      task.completed = false;
      task.disabled = false;
    }
  }
}
