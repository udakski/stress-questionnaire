import {Answer} from "./answer";

export class Question {

  questionNumber!: string;
  questionText!: string;
  questionAnswers!: Answer[];
  selectedAnswer!: Answer;
}
