import React, { Component } from 'react'
import { Mutation } from 'react-apollo';

import { gql } from 'apollo-boost';



const ADDBOOKS = gql`
    
mutation addBook($title: String!,$author:String) {
  addBook(title: $title,author:$author,) {
  
    title,
    author
  }
}
`;
class Createbook extends Component {

  state = {
    title: '',
    author: ''
  }

  render() {
    console.log('===================', this.state)
      console.log('---------------------------------->',ADDBOOKS)
    return (
      <div>


        <Mutation mutation={ADDBOOKS}>
          {(addBook, {data}) => (

            <div>
              <div>
                <input
                  value={this.state.title}
                  onChange={(e) => this.setState({ title: e.target.value })}
                  type='text'
                  placeholder='title'
                />
                <input
                  className='mb2'
                  value={this.state.author}
                  onChange={(e) => this.setState({ author: e.target.value })}
                  type='text'
                  placeholder='author'
                />
              </div>
              <button onClick={(e) => {
                e.preventDefault();
                addBook({
                  variables: { title: this.state.title, author: this.state.author }
                })
              }}>
                ADD </button>
            </div>
          )}
        </Mutation>

      </div>


      //   <div>

      //     <div className='flex flex-column mt3'>
      //     <Mutation></Mutation>
      //       <input
      //         value={this.state.title}
      //         onChange={(e) => this.setState({ title: e.target.value })}
      //         type='text'
      //         placeholder='title'
      //       />
      //       <input
      //         className='mb2'
      //         value={this.state.author}
      //         onChange={(e) => this.setState({ author: e.target.value })}
      //         type='text'
      //         placeholder='author'
      //       />
      //     </div>
      //     <button
      //     >submit</button>

      // {/* </Mutation> */}
      //   </div>
      // //   </Mutation>
    )

  }



}

export default Createbook