import { Injectable } from '@angular/core';
import questions from '../../assets/questions.json';
import {Question} from "../question";

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  questionList: Question[];
  constructor() {
    this.questionList=questions;

    console.log("*************" + this.questionList.length)
  }


  getAnswers(){
      return this.questionList;
  }
}
