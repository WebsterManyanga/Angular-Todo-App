import { Component, Inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Todo } from '../shared/todo.model';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-todo-dialog',
  standalone: true,
  imports: [FormsModule, MatDialogModule, MatButtonModule, CommonModule],
  templateUrl: './edit-todo-dialog.component.html',
  styleUrl: './edit-todo-dialog.component.css',
})
export class EditTodoDialogComponent {
  showValidationErrors = false;

  constructor(
    public dialogRef: MatDialogRef<TodoItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { todo: Todo },
  ) {}

  onFormSubmit(form: NgForm) {
    if (form.invalid) {
      this.showValidationErrors = true;
      return;
    }
    const updatedTodo = { ...Todo, text: form.value.editText };
    this.dialogRef.close(updatedTodo);
  }
}
