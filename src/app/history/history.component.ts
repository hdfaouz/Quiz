import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-history',
  imports: [CommonModule],
  templateUrl:'./history.component.html',
  styleUrl:'./history.component.css'
})
export class HistoryComponent implements OnInit {
  history: any[] = [];

  ngOnInit() {
    this.history = JSON.parse(localStorage.getItem('quiz-history') || '[]');
  }
}
