import React from 'react'

export class ErrorMessage extends React.Component {
    render() {
        return <div className="alert alert-danger" role="alert">
            {this.props.message}
        </div>
    }
}
