import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Questions } from '../interfaces/questions.interface';

const API_URL = 'https://opentdb.com/api.php?amount=10';

@Service()
export class QuestionsService{
    http = inject(HttpClient);
    

    public getQuestions() {
        return this.http.get<Questions>(API_URL);
    }
}
