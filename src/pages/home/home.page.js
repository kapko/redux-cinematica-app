import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setStars } from '../../store/stars/action';
import Star from './components/star.component';
import { Loader } from '../../common/components/loader/loader.component';
import { ErrorMessage } from '../../common/components/error.component'
import {env} from '../../env';

class HomePage extends Component {
    url = env.api;

    componentDidMount() {
        this.getStars();
    }

    render() {
        const {loading, error} = this.props.data;

        if (loading) {
            return <Loader />;
        }

        if (error) {
            return <ErrorMessage message={error.message} />
        }

        return <div>
            <h2 className="text-center">Cinematica Page</h2>

            <Star data={this.props.data.results}/>
        </div>;
    }
    getStars() {
        this.props.dispatch(setStars(
            axios.get(`${this.url}all.json`)
        ));
    }

}
export default connect(
    state => ({
        data: state.stars,
    })
)(HomePage);
