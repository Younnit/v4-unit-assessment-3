import React, { Component } from 'react'
import './App.css';
import data from './data'
import Header from './components/Header'
import BookList from './components/BookList'
import Shelf from './components/Shelf'
import SearchBar from './components/SearchBar'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       books: data,
       shelf: []
    }
    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
    this.filterBooks = this.filterBooks.bind(this)
    this.reset = this.reset.bind(this)
  }

  

  addToShelf(name){
    let newShelf = this.state.shelf
    newShelf.push(name)
    this.setState({
      shelf: newShelf
    })
  }

  clearShelf(){
    this.setState({
      shelf: []
    })
  }

  filterBooks(input){
    let lowerInput = input.toLowerCase()
    let newData = []
    let bookThings = this.state.books
    for(let i = 0; i < bookThings.length; i++){
      if(bookThings[i].title.toLowerCase().includes(lowerInput)){
        newData.push(bookThings[i])
      }else if(bookThings[i].author.toLowerCase().includes(lowerInput)){
        newData.push(bookThings[i])
      }
    }

    this.setState({
      books: newData
    })
  }

  reset(){
    this.setState({
      books: data
    })
  }
  
  render() {
    console.log(this.state)
    return (
      <div className='App'>
        <Header />

        <SearchBar 
        filterBooks={this.filterBooks}
        reset={this.reset}
        />

        <div className="SideBySide">

          <BookList 
          books={this.state.books}
          addToShelf={this.addToShelf}
          />

          <Shelf 
          shelf={this.state.shelf}
          clearShelf={this.clearShelf}
          />

        </div>
      </div>
    )
  }
}

export default App
