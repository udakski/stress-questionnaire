import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {QuestionnaireComponent} from "./questionnaire/questionnaire.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuestionnaireComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stress-survey';
}
