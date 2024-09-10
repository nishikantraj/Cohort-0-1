/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todo = []; // Initialize an empty array to hold todos
  }

  // Add a new todo to the list
  add(todo) {
    this.todo.push(todo); // Add the todo to the array
    return this.todo; // Return the updated list of todos
  }

  // Remove a todo from the list by index
  remove(indexOfTodo) {
    this.todo.splice(indexOfTodo, 1); // Remove the item at the specified index
    return this.todo; // Return the updated list of todos
  }

  // Update a todo at a specific index
  update(index, updatedTodo) {
    if(index<0 || index>=this.todo.length)
      return this.todo
    this.todo[index] = updatedTodo; // Update the todo at the specified index
    return this.todo; // Return the updated list of todos
  }

  // Get all todos
  getAll() {
    return this.todo; // Return the complete list of todos
  }

  // Get a todo by index
  get(indexOfTodo) {
    if (indexOfTodo < 0 || indexOfTodo >= this.todo.length) {
      return null; // Return null for invalid index
    }
    return this.todo[indexOfTodo]; // Return the todo at the specified index
  }

  // Clear all todos
  clear() {
    this.todo = []; // Reset the todo list to an empty array
  }
}
module.exports = Todo;
