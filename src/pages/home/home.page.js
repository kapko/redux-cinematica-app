import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setStars, setError } from '../../store/stars/action';
// import Star from './components/star.component';

class HomePage extends Component {
    url = 'https://raw.githubusercontent.com/akabab/starwars-api/0.2.1/api/';

    state = {
        showError: null,
        data: []
    }

    componentDidMount() {
        // this.getStars();
    }

    render() {
        let {loading} = this.props.data;

        if (loading) {
            return <button onClick={this.getStars.bind(this)}>Loading Data</button>
        }

        return (
            <div>
                <button onClick={this.getStars.bind(this)}>First Data</button>
            </div>
        );
    }

    getStars() {
        // this.props.dispatch(setStars({
        //     count: 18,
        //     results: axios.get(`${this.url}all.json`)
        // }));
        this.props.dispatch(setStars(
            axios.get(`${this.url}al.json`)
        ));

        // axios.get(`${this.url}all.json`)
        //     .then(res => {
                
        //     })
        //     .catch(err => {
        //         console.log(err);
        //         // this.props.dispatch(setError(err))
        //     });
        console.log(this.props);
    }
}
export default connect(
    state => ({
        data: state.stars
    })
)(HomePage);




// import React, { Component } from 'react';
// import axios from 'axios';
// import { connect } from 'react-redux';
// import { setStars } from '../../store/stars/action';
// import Star from './components/star.component';

// class HomePage extends Component {
//     url = 'https://raw.githubusercontent.com/akabab/starwars-api/0.2.1/api/';

//     state = {
//         showError: null,
//         data: []
//     }

//     componentDidMount() {
//         this.getStars();
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.showError ?
//                     <h1 className="text-center text-danger">ERROR: {this.state.showError}</h1> :
//                     <Star data={this.props.data.results} />}
//             </div>
//         );
//     }

//     getStars() {
//         axios.get(`${this.url}all.json`)
//             .then(res => {
//                 this.props.dispatch(setStars({
//                     count: 18,
//                     results: res.data.splice(0, 18)
//                 }));
//             })
//             .catch(err => {
//                 this.setState({showError: err.response.statusText});
//             });

//     }
// }
// export default connect(
//     state => ({
//         data: state.stars
//     }),
//     dispatch => ({ dispatch })
// )(HomePage);