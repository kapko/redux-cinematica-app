import React, { Component } from 'react'
import { isRequired, isEmail } from '../../common/helpers/validator'
import { credos, setItem } from '../../services/storage.js'
import InputText from '../../common/fields/input'
import Button from '../../common/fields/button'
import { SmallText } from '../../common/helpers/error-text/error-text'

export class LoginPage extends Component {

    state = {
        data: {
            email: '',
            password: ''
        },
        errors: null
    }

    onChange(e) {
        const data = { ...this.state.data, [e.target.name]: e.target.value };
        this.setState({ data });
    }

    onSubmit(e) {
        e.preventDefault();
        // validate
        if (!this.validate()) {
            const loginData = JSON.stringify(credos);
            const data = JSON.stringify(this.state.data);

            if (loginData === data) {
                this.props.history.push('/');
                setItem('auth', 'true');
            } else {
                this.setState({errors: {auth: 'Password or email is not correct'}})
            }
        }

    }

    validate() {
        let { email, password } = this.state.data;
        let errors = {};

        if (!isEmail(email)) {
            errors.email = 'Email is not correct';
        }

        if (isRequired(password)) {
            errors.password = 'Password is required';
        }

        this.setState({errors});

        return Object.keys(errors).length;
    }

    render() {
        const errors = this.state.errors || {};

        return (
            <form className="needs-validation" onSubmit={this.onSubmit.bind(this)}>
                <InputText
                    className="form-control"
                    onChange={this.onChange.bind(this)}
                    name="email"
                    label="Email address"
                    errorText={errors.email}
                    placeholder="Enter email"
                />
                <InputText
                    className="form-control"
                    onChange={this.onChange.bind(this)}
                    name="password"
                    label="Password"
                    errorText={errors.password}
                    placeholder="Password"
                />
                <SmallText text={errors.auth} />
                <Button text="Submit" className="btn btn-primary" />
            </form>

        );
    }
}
