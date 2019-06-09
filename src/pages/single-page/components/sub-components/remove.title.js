import React, { Component } from 'react';

export default class RemoveTitle extends Component {
    render() {
        return (
            <div className="alert alert-danger">Please accept to remove <h3><i>{this.props.name}</i></h3>
                <b className="text-success" onClick={this.props.remove}>Accept</b>
                <b className="text-warning" onClick={this.props.cancel}>Cancel</b>
            </div>
        )
    }
}
