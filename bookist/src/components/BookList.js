import React, { Component } from 'react'

export class BookList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        let mappedBooks = this.props.books.map((element) => {
            return(
                <div className="Spacers">
                    <img src={element.img} onClick={() => this.props.addToShelf(element.title)}></img>
                    <h3>{element.title}</h3>
                    <p>{element.author}</p>
                </div>
                
            )
        })
        return (
            <div className="BookList">
                {mappedBooks}
            </div>
        )
    }
}

export default BookList
