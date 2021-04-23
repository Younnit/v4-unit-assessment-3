import React, { Component } from 'react'

class Shelf extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        let mappedTitles = this.props.shelf.map((element)=>{
            return(
                <p>{element}</p>
            )
        })
        return (
            <div className="Shelf">
                <h1>Your Shelf</h1>
                <button onClick={this.props.clearShelf}>Clear Shelf</button>
                {mappedTitles}
            </div>
        )
    }
}

export default Shelf
