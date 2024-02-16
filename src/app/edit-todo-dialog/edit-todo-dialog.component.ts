import { Component, Inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Todo } from '../shared/todo.model';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button'
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-edit-todo-dialog',
  standalone: true,
  imports: [FormsModule,MatDialogModule, MatButtonModule],
  templateUrl: './edit-todo-dialog.component.html',
  styleUrl: './edit-todo-dialog.component.css'
})
export class EditTodoDialogComponent {


  constructor(@Inject(MAT_DIALOG_DATA) public data: {todo: Todo}) { }
  onFormSubmit(form: NgForm) {
    const updatedTodo 
  } 
}
