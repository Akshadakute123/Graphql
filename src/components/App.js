
import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import BookList from './Booklist'
import Books from './Books';
import AddTodo from './Booksadd';

const client = new ApolloClient({ uri: 'http://localhost:4000/graphql' });

class App extends Component {
  render() {
    return ( 
      <div className="App">
        <h1>hiiiii</h1>
        <ApolloProvider client={client}>
          <BookList/>
          <Books/>
          {/* <AddTodo /> */}
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
