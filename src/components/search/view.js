import React, { Component } from 'react'
import './index.scss'
import classnames from 'classnames'

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            isShowResult: false,
        }
    }
    showResult = () => {
        this.setState({ isShowResult: true })
    }
    hidenResult = () => {
        this.setState({ isShowResult: false,text: ''})
    }
    handleChange = (e) => {
       this.setState({[e.target.name]: e.target.value})
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
                    <svg className={classnames('icon close',{isShowResult: this.state.isShowResult})}
                         onClick={this.hidenResult}
                         >
                        <use xlinkHref="#icon-close"></use>
                    </svg>
                </div>
                <div className={classnames('searchResult', { isShowResult: this.state.isShowResult })}>
                    <div>哈哈哈哈撒旦法</div>
                    <div>哈哈哈哈撒旦法</div>
                    <div>哈哈哈哈撒旦法</div>
                    <div>哈哈哈哈撒旦法</div>
                    <div>哈哈哈哈撒旦法</div>
                    <div>哈哈哈哈撒旦法</div>
                </div>
            </div>
        )
    }
}