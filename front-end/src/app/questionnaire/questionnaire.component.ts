import {Component, OnInit} from '@angular/core';
import {AnswerService} from "../services/answer.service";
import {Question} from "../question";
import {JsonPipe, NgForOf} from "@angular/common";
import {RadioButtonModule} from "primeng/radiobutton";
import {FormsModule} from "@angular/forms";
import {Answer} from "../answer";
import {BadgeModule} from "primeng/badge";
import {Carousel, CarouselModule} from "primeng/carousel";
import {FileUploadModule} from "primeng/fileupload";
import {CardModule} from "primeng/card";
import {MeterGroupModule} from "primeng/metergroup";

@Component({
  selector: 'app-questionnaire',
  standalone: true,
  imports: [
    JsonPipe,
    NgForOf,
    RadioButtonModule,
    FormsModule,
    BadgeModule,
    CarouselModule,
    FileUploadModule,
    CardModule,
    MeterGroupModule
  ],
  templateUrl: './questionnaire.component.html',
  styleUrl: './questionnaire.component.css'
})
export class QuestionnaireComponent{
  questions!: Question[];
  level0:number=0;
  level1:number=0;
  level2:number=0;
  level3:number=0;
  level4:number=0;
  questionsAnswered:number =0;

  value = [
    { label: 'Tempereret ', color1: '#34d399', color2: '#fbbf24', value: this.level0, icon: 'pi pi-table' },
    { label: 'Opvarmet ', color1: '#d0de09', color2: '#60a5fa', value: this.level1, icon: 'pi pi-inbox' },
    { label: 'Overophedet ', color1: '#fac960', color2: '#c084fc', value: this.level2, icon: 'pi pi-image' },
    { label: 'Nedsmeltet ', color1: '#fc9284', color2: '#c084fc', value: this.level3, icon: 'pi pi-cog' },
    { label: 'Udbrændt ', color1: '#be3732', color2: '#c084fc', value: this.level4, icon: 'pi pi-cog' }
  ];
    constructor(private answerService: AnswerService) {
      console.log("questions loading : " );
      this.questions = this.answerService.getAnswers();
      console.log("questions loading : "  + this.questions.length);
    }


  getQuestionSize(){
    return this.questions.length;
  }


  summarizeAnswers(questionCarousel: Carousel){
      this.level0 = this.getScoreForLevel(Answer.TEMPERERET);
      this.value[0].value= this.level0;
      this.level1 = this.getScoreForLevel(Answer.OPVARMET);
      this.level2 = this.getScoreForLevel(Answer.OVEROPHEDET);
      this.level3 = this.getScoreForLevel(Answer.NEDSMELTET);
      this.level4 = this.getScoreForLevel(Answer.UDBRÆNDT);
      this.updateQuestionsAnswered();
      const activeIndex = questionCarousel.findFocusedIndicatorIndex();
      if(activeIndex<19)
        questionCarousel.step(1,activeIndex+1)

  }

  private getScoreForLevel(level: number) {
    const answers:Answer[] = this.questions.filter(q=>q.selectedAnswer!=null).map(question=>question.selectedAnswer);
    let levelScore = 0;
    answers.forEach(ans=>levelScore +=ans.answerValues[level]);
    return levelScore;
  }

   updateQuestionsAnswered(){
    this.questionsAnswered =this.questions.filter(q=>q.selectedAnswer!=null).map(question=>question.selectedAnswer).length;
  }

  private getNumberOfQuestions(){
    this.questions.length;
  }

}
