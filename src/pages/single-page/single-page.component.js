import React, { Component } from 'react'
import {connect} from 'react-redux'
// local files
import { fetchStar, removeStarById } from '../../store/stars/action'
import ShowStar from './components/show.component';

class SinglePage extends Component {

    componentDidMount() {
        if (!this.props.data.results.length) {
            this.redirectToHome();
        }
    }

    componentWillMount() {
        this.fetchStars();
    }

    render() {
        const { singleStar } = this.props.data;

        return singleStar ? <ShowStar
            toHome={this.redirectToHome.bind(this)}
            item={singleStar}
            removeStar={this.removeStar.bind(this)}/> : null;
    }

    fetchStars() {
        this.props.dispatch(fetchStar(+this.props.match.params.id));
    }

    removeStar(id) {
        this.props.dispatch(removeStarById(id));
        this.redirectToHome();
    }

    redirectToHome() {
        this.props.history.push('/');
    }

}
export default connect(
    state => ({
        data: state.stars,
    })
)(SinglePage);
