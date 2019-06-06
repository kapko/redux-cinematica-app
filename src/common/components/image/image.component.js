import React, { Component } from 'react'
import './image.component.css'

export default class Image extends Component {
    state = {
        loaded: false
    }

    render() {
        const loader = this.state.loaded ? null : <div className={`${this.props.class} gradient`}></div>;

        return (
            <div className="image-parent">
                {loader}
                <img src={this.props.src}
                    onLoad={() => this.setState({ loaded: true })}
                    style={this.state.loaded ? { opacity: 1 } : { opacity: 0 }}
                    className={`image`} />
            </div>

        )
    }
}
