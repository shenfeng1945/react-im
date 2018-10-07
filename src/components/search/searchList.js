import React, { Component } from 'react'
import SearchItem from './searchItem'

export default class SearchList extends Component {
    handleAddRoster = (name) => {
        this.props.addRoster(name)
    }
    
    render() {
        return (
            <ul className="searchList">
                {this.props.searchData.map(item => (
                    <SearchItem key={item._id} 
                                searchItem={item} 
                                addRoster={this.handleAddRoster}/>
                ))}
            </ul>
        )
    }
}
