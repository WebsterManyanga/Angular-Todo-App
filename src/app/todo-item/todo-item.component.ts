import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() todoClicked: EventEmitter<void> = new EventEmitter();
  @Output() editClicked: EventEmitter<void> = new EventEmitter();


  constructor(public dialog: MatDialog) {}

  onTodoClicked() {
    this.todoClicked.emit();
  }

  onEditClicked() {
    this.editClicked.emit();
    const dialogRef = this.dialog.open(EditTodoDialogComponent,{
      data: this.todo
    });
  }
}
