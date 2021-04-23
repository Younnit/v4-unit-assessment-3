import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            inputVal: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(val){
        this.setState({
            inputVal: val
        })
    }

    handleClick(val){
    this.props.filterBooks(val)
    }

    handleClear(){
        this.props.reset()
        this.setState({
            inputVal: ''
        })
    }
    
    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Search for a book" value={this.state.inputVal} onChange={(e) => this.handleChange(e.target.value)}/>
                <button onClick={()=>this.handleClick(this.state.inputVal)}>Search</button>
                <button onClick={this.handleClear}>Clear Search</button>
            </div>
        )
    }
}

export default SearchBar
