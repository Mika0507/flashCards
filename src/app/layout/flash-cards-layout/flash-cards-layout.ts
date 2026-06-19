import { Component } from '@angular/core';
import { Cards } from "../../components/cards/cards";
import { ProgressBar } from '../../components/progress-bar/progress-bar';

@Component({
  selector: 'flash-cards-layout',
  imports: [Cards, ProgressBar],
  templateUrl: './flash-cards-layout.html',
  styleUrl: './flash-cards-layout.css',
})
export default class FlashCardsLayout {}
