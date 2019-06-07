import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
// local files
import { env } from '../../env';
import { setStars } from '../../store/stars/action';
import Star from './components/star.component';
import { Loader } from '../../common/components/loader/loader.component';
import { ErrorMessage } from '../../common/components/error.component'

class HomePage extends Component {

    url = env.api;

    componentWillMount() {
        this.fetchStars();
    }

    render() {
        const { loading, error, results } = this.props.data;

        if (loading) {
            return <Loader />;
        }

        if (error) {
            return <ErrorMessage message={error.message} />
        }

        return <div>
            <h2 className="text-center">Cinematica Page</h2>
            <div className="clearfix row">
                {/* don't have any pagination from Server */}
                <Star data={results.slice(0, 20)} />
            </div>
        </div>;
    }

    fetchStars() {
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
