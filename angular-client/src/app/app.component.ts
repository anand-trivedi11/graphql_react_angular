import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-client';
  loading = false;
  booksData = [];
  constructor(private apollo: Apollo) {

  }
  ngOnInit() {
    this.apollo.watchQuery({
      query: gql`
      {
        books{
            name
            id
        }
    }
      `
    })
      .valueChanges.subscribe(result => {
        this.renderData(result);
      });
  }

  renderData(result) {
    if (result.loading) {
      this.loading = true;
    } else {
      this.booksData = result.data.books;
    }
  }
}
