import {NewTaskData, Task} from "./task/task.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular & how to apply them',
      dueDate: '2024-03-02',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-03-02',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary: 'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-03-02',
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular & how to apply them',
      dueDate: '2024-03-02',
    },
    {
      id: 't5',
      userId: 'u5',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-03-02',
    },
    {
      id: 't6',
      userId: 'u6',
      title: 'Prepare issue template',
      summary: 'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-03-02',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  addTask(taskData: NewTaskData, userId: string) {
     this.tasks.unshift({
       id: new Date().getTime().toString(),
       userId: userId,
       title: taskData.title,
       summary: taskData.summary,
       dueDate: taskData.date,
     });
    this.saveTasks();
   }

  getUserTasks(userId: string) {
    return this.tasks.filter((task: Task) => task.userId === userId);
   }

  removeTask(id: string) {
     this.tasks = this.tasks.filter((task: Task) => task.id !== id);
     this.saveTasks();
   }

   private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
   }
}
