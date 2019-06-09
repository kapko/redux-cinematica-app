import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
// local files
import { fetchStar, updateStar } from '../../store/stars/action'
import { RadioButton, Button, Input } from '../../common/fields'
import {isRequired} from '../../common/helpers/validator'

const genderData = [
    {
        label: 'Male',
        name: 'gender',
        value: 'male'
    },
    {
        label: 'Female',
        name: 'gender',
        value: 'female'
    }
];

class UpdateStarPage extends Component {

    state = {
        data: {
            name: '',
            species: '',
            diedLocation: '',
            died: '',
            gender: '',
            mass: '',
            height: ''
        },
        errors: null
    }

    componentWillMount() {
        this.updateFields();
        this.fetchStars();
    }

    updateFields() {
        const {results, singleStar} = this.props.data;

        if (!results.length) {
            this.redirectToHome();
            return;
        }

        this.setState({
            data: {
                id: singleStar.id,
                name: singleStar.name,
                species: singleStar.species,
                diedLocation: singleStar.diedLocation,
                died: singleStar.died,
                gender: singleStar.gender,
                mass: singleStar.mass,
                height: singleStar.height
            }
        });

    }

    render() {
        const { data, } = this.state;
        const errors = this.state.errors || {};

        return <div>
            <h3>Update this Star</h3>
            <Link to="/">Home page</Link>
            <form onSubmit={this.onSubmit.bind(this)}>
                <Input
                    type="text"
                    value={data.name}
                    name="name"
                    label="Name"
                    id="name"
                    errorText={errors.name}
                    onChange={this.onChange.bind(this)} />
                <Input
                    type="text"
                    value={data.species}
                    name="species"
                    label="Species"
                    id="species"
                    errorText={errors.species}
                    onChange={this.onChange.bind(this)} />
                <Input
                    type="text"
                    value={data.diedLocation}
                    name="diedLocation"
                    label="Sied Location"
                    id="diedLocation"
                    errorText={errors.diedLocation}
                    onChange={this.onChange.bind(this)} />
                <Input
                    type="number"
                    value={data.died}
                    name="died"
                    label="Sied Location"
                    id="Died"
                    errorText={errors.died}
                    onChange={this.onChange.bind(this)} />
                <Input
                    type="number"
                    value={data.mass}
                    name="mass"
                    label="Mass"
                    id="mass"
                    errorText={errors.mass}
                    onChange={this.onChange.bind(this)} />
                <Input
                    type="number"
                    value={data.height}
                    name="height"
                    label="Height"
                    id="height"
                    errorText={errors.height}
                    onChange={this.onChange.bind(this)} />
                    
                <RadioButton
                    data={genderData}
                    checked={data.gender}
                    onChange={this.onChange.bind(this)} />
                <hr/>
                <Button text="Update" className="btn btn-primary" />
            </form>
        </div>
    }

    onChange(e) {
        const data = { ...this.state.data, [e.target.name]: e.target.value }
        this.setState({ data });
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.isValid()) {
            this.props.dispatch(updateStar(this.state.data))
        }
    }

    fetchStars() {
        this.props.dispatch(fetchStar(+this.props.match.params.id));
    }

    isValid() {
        const {data} = this.state;
        let errors = {};
        
        // required fields
        ['name', 'species', 'diedLocation', 'died', 'mass', 'height'].map(name => {
            if (isRequired(data[name])) {
                errors[name] = `${name} is required`;
            }
        });

        this.setState({errors})

        return !Object.keys(errors).length;
    }

    redirectToHome() {
        this.props.history.push('/');
    }

}

export default connect(
    state => ({
        data: state.stars,
    })
)(UpdateStarPage);
