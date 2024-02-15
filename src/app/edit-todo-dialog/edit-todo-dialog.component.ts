import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-edit-todo-dialog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-todo-dialog.component.html',
  styleUrl: './edit-todo-dialog.component.css'
})
export class EditTodoDialogComponent {


  constructor() {

  }

  onFormSubmit(form: NgForm) {
      
  } 
}
