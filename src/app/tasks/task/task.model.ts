export interface Task {
  id: string,
  userId: string,
  title: string,
  summary: string,
  dueDate: string,
}

export interface NewTaskData {
  title: string;
  summary: string;
  date: string;
}

export const tasksArray = [
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
