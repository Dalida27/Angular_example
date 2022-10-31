import { Component, OnInit } from '@angular/core';
import { FirebaseMethods } from 'src/utils/firebaseMethods';
import { Posts } from './product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Posts[] = []
  constructor(private firebaseMethods: FirebaseMethods) { }

  async ngOnInit(): Promise<void> {
    const productsSnapshot = await this.firebaseMethods.getDocuments('posts')
    productsSnapshot.forEach((doc) => {
      const data = doc.data()
      this.posts.push({
        id: doc.id,
        title: data['title'],
        username: data['username'],
        text: data['text']
      })
    });
    console.log(this.posts);
  }
}
