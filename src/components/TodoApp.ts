export class TodoApp {
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  async initialize(): Promise<void> {
    this.render();
  }

  private render(): void {
    this.container.innerHTML = `
      <div class="space-y-6">
        <div class="card">
          <h2 class="text-xl font-semibold text-gray-800 mb-4">Add New Task</h2>
          <div class="space-y-3">
            <input
              type="text"
              placeholder="What needs to be done?"
              class="input-field"
              id="new-todo-input"
            />
            <div class="flex gap-3">
              <select class="input-field flex-1" id="priority-select">
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
                <option value="low">Low Priority</option>
              </select>
              <button class="btn-primary">Add Task</button>
            </div>
          </div>
        </div>

        <div class="card">
          <h2 class="text-xl font-semibold text-gray-800 mb-4">Tasks</h2>
          <div id="todo-list" class="space-y-2">
            <!-- Todo items will be rendered here -->
            <div class="text-gray-500 text-center py-8">
              No tasks yet. Add one above to get started!
            </div>
          </div>
        </div>
      </div>
    `;
  }
}