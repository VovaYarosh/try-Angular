import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../interfaces';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post$: Observable<Post>;
  @Input() post: Post;
  constructor(
  ) { }

  ngOnInit(){
  }

}
