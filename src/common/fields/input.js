import React, { Component } from 'react';
import { SmallText } from '../helpers/error-text/error-text';


export default class InputText extends Component {
    render() {
        return (
            <div className="form-group">
                <label>{this.props.label}</label>
                <input
                    type={this.props.type}
                    className="form-control"
                    onChange={this.props.onChange}
                    name={this.props.name}
                    placeholder={this.props.placeholder} />
                <SmallText text={this.props.errorText} />
            </div>
        );
    }
}
