import React, { Component } from 'react'
import './index.scss'
import classnames from 'classnames'
import { connect } from 'react-redux';
import { searchAction, addRoster } from './actions'
import SearchList from './searchList'
import { getLocal } from '../../utils/localStorage'
import { USER_NAME } from '../../utils/constants'
import eventEmitter from '../../utils/event'

let timer = null
class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            isShowResult: false,
            searchData: [],
            username: getLocal(USER_NAME)
        }
    }
    componentWillMount(){
        eventEmitter.on('toggleLeft',this.hidenResult)
    }
    showResult = () => {
        this.setState({ isShowResult: true })
    }
    hidenResult = (val) => {
        this.setState({ isShowResult: false, text: '', searchData: [] })
    }
    handleChange = (e) => {

        this.setState({ [e.target.name]: e.target.value })

        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            if (this.state.text) {
                this.props.searchAction({ username: this.state.text }).then(res => {
                    this.setState({ searchData: res.data.searchData.filter(item => item.username !== this.state.username) })
                })
            }
        }, 600)
    }

    render() {
        return (
            <div className="search">
                <svg className="icon s-icon">
                    <use xlinkHref="#icon-search"></use>
                </svg>
                <div className="ui input search-input">
                    <input type="text"
                        name="text"
                        value={this.state.text}
                        onFocus={this.showResult}
                        onChange={this.handleChange}
                        autoComplete="off"
                        placeholder="搜索或添加好友" />
                    <svg className={classnames('icon close', { isShowResult: this.state.isShowResult })}
                        onClick={this.hidenResult}
                    >
                        <use xlinkHref="#icon-close"></use>
                    </svg>
                </div>
                <div className={classnames('searchResult', { isShowResult: this.state.isShowResult })}>
                    {
                        this.state.searchData.length ?
                            <SearchList searchData={this.state.searchData} addRoster={this.props.addRoster}/> :
                            <div className="empty-data">暂无好友数据</div>
                    }
                </div>
            </div>
        )
    }
}

export default connect(null, { searchAction, addRoster })(Search)