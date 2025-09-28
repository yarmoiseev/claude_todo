export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  priority: Priority;
  createdAt: Date;
  updatedAt: Date;
  order: number;
}

export enum Priority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export interface TodoCreateInput {
  text: string;
  priority?: Priority;
}

export interface TodoUpdateInput {
  text?: string;
  completed?: boolean;
  priority?: Priority;
}