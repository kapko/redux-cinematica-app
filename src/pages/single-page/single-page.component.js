// import React, { Component } from 'react';
// import {connect} from 'react-redux';
// import axios from 'axios';
// // local files
// import { env } from '../../env';
// import { setStars } from '../../store/stars/action';
// import Star from './components/star.component';
// import { Loader } from '../../common/components/loader/loader.component';
// import { ErrorMessage } from '../../common/components/error.component'

// class SinglePage extends Component {

//     url = env.api;

//     componentWillMount() {
//         this.fetchStars();
//     }

//     render() {
        
//     }

//     fetchStars() {
//         this.props.dispatch(setStars(
//             axios.get(`${this.url}all.json`)
//         ));
//     }

// }
// export default connect(
//     state => ({
//         data: state.stars,
//     })
// )(HomePage);
