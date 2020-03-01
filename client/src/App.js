import React, { Component } from 'react';
import './App.css';
import BookList from './components/BookList'
import AddBook from './components/AddBook'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:4005/graphql',
})
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h2>GraphQL Demo App.</h2>
          <BookList/>
          <AddBook />
        </div>
      </ApolloProvider>

    );
  }
}

export default App;
