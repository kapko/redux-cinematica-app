import React from 'react';

export default class Input extends React.Component {
    render() {
        const { label, type, id, placeholder, onChange, errorText } = this.props;

        return (
            <div className="form-group">
                <label htmlFor={id}>{label}</label>
                <input
                    onChange={onChange}
                    type={type}
                    className="form-control"
                    id={id}
                    placeholder={placeholder} />
                <small className="text-danger">{errorText}</small>
            </div>
        )
    }
}
