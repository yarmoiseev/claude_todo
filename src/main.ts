import './style.css';
import { TodoApp } from './components/TodoApp.ts';

async function initializeApp(): Promise<void> {
  const appContainer = document.getElementById('todo-container');

  if (!appContainer) {
    throw new Error('Todo container element not found');
  }

  const todoApp = new TodoApp(appContainer);
  await todoApp.initialize();
}

document.addEventListener('DOMContentLoaded', () => {
  initializeApp().catch((error) => {
    console.error('Failed to initialize app:', error);
  });
});

// TODO(human) - Add any additional app initialization logic here