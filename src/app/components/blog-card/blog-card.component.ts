import { Component, OnInit } from '@angular/core';
import { Post } from '../../services/post';
import { BlogService } from '../../services/blog.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss'
})
export class BlogCardComponent implements OnInit {

  posts: Post[] = [];

  constructor(private blogService: BlogService) {

  }

  ngOnInit() {
    this.listarPosts();
  }

  listarPosts() {
    this.blogService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
}
