export interface Task {
  id: string;
  description: string;
  status: 'To Do' | 'Done';
  time: string;
  frequency: 'one-time' | '1/day' | '2/day' | '3/day' | '4/day';
}

export interface CreateTaskRequest {
  description: string;
  status: 'To Do' | 'Done';
  time: string;
  frequency: 'one-time' | '1/day' | '2/day' | '3/day' | '4/day';
}
