import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { QuizService } from './services/quiz.service';
import { AcceuilComponent } from "./acceuil/acceuil.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, AcceuilComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 title = 'quizApp'
  public questionsLimit : number;
  public difficulty : string;

  constructor(private quizService:QuizService){
    this.questionsLimit = 10;
    this.difficulty = "Easy"
  }
}
