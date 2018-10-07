import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Rotate = styled.div`
  animation: ${rotate360} 1.5s linear infinite;
  width: 100px;
  height: 100px;
`
class Loading extends Component {
    static propTypes = {
        loading: PropTypes.bool
    }
    render() {
        const { loading } = this.props;
        if (loading) {
            return (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,0.3)',
                    display: 'flex',
                    alignItems:'center',
                    justifyContent: 'center'
                }}>
                    <Rotate>
                        <svg style={{ width: '100%', height: '100%' }}>
                            <use xlinkHref='#icon-loading'></use>
                        </svg>
                    </Rotate>
                </div>
            )
        } else {
             return <div></div>
        }

    }
}

export default Loading;