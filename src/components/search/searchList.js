import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchItem from './searchItem'

export default class SearchList extends Component {
    // static propTypes = {
    //     friendList: PropTypes.array
    // }
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
