import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { CommonModule } from '@angular/common';
import { Todo } from '../shared/todo.model';
import { FormsModule, NgForm } from '@angular/forms';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})

export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  showValidationErrors = false;
  
  constructor(private dataService: DataService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos()

  }

  onFormSubmit(form: NgForm) {
    console.log('form Submitted');
    console.log(form);
    if (form.invalid) {
      this.showValidationErrors = true;
      return;
    }

    this.dataService.addTodo(new Todo(form.value.text));
    this.showValidationErrors = false;
    form.reset();
  }


  toggleCompleted(todo: Todo ) {
    todo.completed = !todo.completed;
  }

  editTodo(todo: Todo) {
    const dialogRef = this.dialog.open(EditTodoDialogComponent, {
      data: todo
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataService.updateTodo(this.todos.indexOf(todo), result);
      }
    })
  }

  deleteTodo(todo: Todo){
    this.dataService.deleteTodo(this.todos.indexOf(todo));
  }
}
