import React, { Component } from 'react';
import { isRequired, isEmail } from '../../common/helpers/validator';
import {credos, setItem} from '../../services/storage.js';
import InputText from '../../common/fields/input';
import Button from '../../common/fields/button';

export class LoginPage extends Component {

    state = {
        data: {
            email: '',
            password: ''
        },
        errors: null
    }

    onChange(e) {
        const data = {...this.state.data, [e.target.name]: e.target.value};
        this.setState({data});
    }

    onSubmit(e) {
        e.preventDefault();
        // validate
        this.validate();

        if (!this.state.errors) {
            const loginData = JSON.stringify(credos);
            const data = JSON.stringify(this.state.data);

            if (loginData === data) {
                this.props.history.push('/');
                setItem('auth', 'true');
            }
        }
    }

    validate() {
        let {email, password} = this.state.data;
        let errors = {};

        if (!isEmail(email)) {
            errors.email = 'Email is not correct';
        }

        if (isRequired(password)) {
            errors.password = 'Password is required';
        }

        if (!Object.keys(errors).length) {
            errors = null;
        }

        this.setState({errors});
    }

    render() {
        return (
            <form className="needs-validation" onSubmit={this.onSubmit.bind(this)}>
                <InputText 
                    className="form-control"
                    onChange={this.onChange.bind(this)}
                    name="email"
                    label="Email address"
                    errorText={this.state.errors && this.state.errors.email}
                    placeholder="Enter email"
                />
                <InputText 
                    className="form-control"
                    onChange={this.onChange.bind(this)}
                    name="password"
                    label="Password"
                    errorText={this.state.errors && this.state.errors.password}
                    placeholder="Password"
                />
                <Button text="Submit" className="btn btn-primary"/>
            </form>

        );
    }
}
