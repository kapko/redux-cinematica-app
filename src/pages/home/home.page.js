import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
// local files
import { env } from '../../env'
import { fetchStars } from '../../store/stars/action'
import { Loader } from '../../common/components/loader/loader.component'
import { ErrorMessage } from '../../common/components/error.component'
import Star from '../../common/components/star/star.component'

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

        if (!results.length) {
            return <h1>Don't have any items</h1>
        }

        const items = results
            .slice(0, 20)
            .map(item => <div key={item.id} className="col-md-4">
                <Star item={item} />
            </div>);

        return <div>
            <h2 className="text-center">Cinematica Page</h2>
            <div className="row">{items}</div>
        </div>
    }

    fetchStars() {
        if (!this.props.data.results.length) {
            this.props.dispatch(fetchStars(
                axios.get(`${this.url}all.json`)
            ));
        }
    }

}
export default connect(
    state => ({
        data: state.stars,
    })
)(HomePage);
