import React, { Component } from 'react';
import { SmallText } from '../helpers/error-text/error-text';


export default class InputText extends Component {
    state = {
        value: ''
    }

    componentDidMount() {
        this.setState({value: this.props.value || ''});
    }

    render() {
        const type = this.props.type || 'text';

        return (
            <div className="form-group">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input
                    id={this.props.id}
                    type={type}
                    className="form-control"
                    value={this.state.value}
                    onChange={this.updateValue.bind(this)}
                    name={this.props.name}
                    placeholder={this.props.placeholder} />
                <SmallText text={this.props.errorText} />
            </div>
        );
    }

    updateValue(e) {
        const value = e.target.value; 
        this.setState({value})
        this.props.onChange(e);
        // this.props.onChange(value)
    }
}
