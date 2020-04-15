import React, { Component } from 'react';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
const GET_BOOKS = gql`
  query {
    books {
      
      title,
      author
    }
  }
`;

class BookList extends Component {
  render() {
    return (
      <Query query={GET_BOOKS}>
        {({ loading, error, data }) => {
          if (loading) {
            return <div>Loading</div>
          }

          if (error) {
            return <div>Error: {error.toString()}</div>
          }

          console.log("books data ",data);

          return (
            <ul>
              {
                data.books.map((b) => {
                  return <div >
                    <div>
                    {/* {b.id} */}
                  </div>
                      <div> 
                          
                      {b.title}
                      </div>
                      <div>
                          {b.author}
                      </div>
                      </div>
                })
              }
            </ul>
          )
        }}
      </Query>
    );
  }
}

export default BookList;
