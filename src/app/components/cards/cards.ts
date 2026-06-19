import { Component, inject, OnInit, signal } from '@angular/core';
import { Result } from '../../interfaces/questions.interface';
import { QuestionsService } from '../../services/questionsService';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
  selector: 'cards',
  imports: [],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards implements OnInit {
  public answer = signal<boolean>(false);
  public service = inject(QuestionsService);

  public questions = signal<Result[]>([]);
  public currentQuestionIndex = 0;

  ngOnInit() {
    this.questionsAndAnswers();
  }

  public showAnswer(): boolean {
    this.answer.set(true);
    return this.answer();
  }

  public hideAnswer(): boolean {
    this.answer.set(false);
    return this.answer();
  }

  public questionsAndAnswers(): void {
    this.service
      .getQuestions()
      .pipe(
        tap((response) => {
          console.log('Response from API:', response);
        }),
      )
      .subscribe((response) => {
        this.questions.set(response.results);
      });
  }

  public nextQuestion() {
    this.hideAnswer();
    if (this.currentQuestionIndex < this.questions().length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.currentQuestionIndex = 0;
    }
  }

  public previousQuestion() {
    this.hideAnswer();
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    } else {
      this.currentQuestionIndex = this.questions().length - 1;
    }
  }
}
