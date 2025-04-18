import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl:'./home.component.css'
})
export class HomeComponent implements OnInit {
  categories: any[] = [];
  category: number = 9;
  difficulty: string = 'easy';

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit() {
    this.quizService.getCategories().subscribe(data => {
      this.categories = data.trivia_categories;
    });
  }

  startQuiz() {
    localStorage.setItem('quiz-settings', JSON.stringify({ category: this.category, difficulty: this.difficulty }));
    this.router.navigate(['/quiz']);
  }
}
