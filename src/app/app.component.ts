import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  employee = {
    name: '',
    task: '',
    priority: '',
    date: ''
  };

  tasks: any[] = [];
  dateError = false;

  submitForm() {
    const today = new Date();
    const dueDate = new Date(this.employee.date);

    const todayDateOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const dueDateOnly = new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate());

    // Check for past due date
    if (dueDate < todayDateOnly) {
      this.dateError = true;
      return;
    }

    this.dateError = false;
    this.tasks.push(this.employee );
    this.employee = { name: '', task: '', priority: '', date: '' };
  }

  getPriorityClass(priority: string): string {
    return {
      low: 'low-priority',
      medium: 'medium-priority',
      high: 'high-priority'
    }[priority] || '';
  }

  getFontStyle(priority: string): any {
    return {
      fontSize: {
        low: '14px',
        medium: '16px',
        high: '18px'
      }[priority] || '14px'
    };
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
