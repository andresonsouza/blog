import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BlogCardComponent } from '../../components/blog-card/blog-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [CommonModule, BlogCardComponent],
  standalone: true,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
