import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { AcceuilComponent } from "./acceuil/acceuil.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, AcceuilComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'QuizApp';
  public questionsLimit : number;
  public difficulty : string;

  constructor(){
    this.questionsLimit = 10;
    this.difficulty = "Easy"
  }
}
