import { Component, computed, inject, OnInit, output, signal } from '@angular/core';
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
  public currentQuestionIndex = signal<number>(0);
  // public progresoActual = 0;

  public progreso = computed(()=> {
    if(this.questions().length === 0) return 0;
    return ((this.currentQuestionIndex() + 1) / this.questions().length) * 100;
  })

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

  // aumentarProgreso () {
  //   if(this.progreso < 100) {
  //     this.progresoActual+= 10;
  //     document.getElementById("miBarra")!.style.width = this.progresoActual + "%";
  //   }
  // }

  public nextQuestion() {
    this.hideAnswer();
    const currentIndex = this.currentQuestionIndex();
    if (currentIndex < this.questions().length - 1) {
      this.currentQuestionIndex.set(currentIndex + 1);
      console.log('cuantas preguntas estoy viendo?', this.currentQuestionIndex);
      
      // this.aumentarProgreso();
    } else {
      this.currentQuestionIndex.set(currentIndex + 1);
    }
  }

  public previousQuestion() {
    this.hideAnswer();
    const currentIndex = this.currentQuestionIndex();
    if (currentIndex > 0) {
      this.currentQuestionIndex.set(currentIndex - 1);
    } else {
      this.currentQuestionIndex.set(this.questions().length - 1);
    }
  }
}
