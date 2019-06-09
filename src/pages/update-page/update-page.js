import React, { Component } from 'react'
import { connect } from 'react-redux'
// local files
import Input from '../../common/fields/input'
import { fetchStar, removeStarById } from '../../store/stars/action'

class UpdateStarPage extends Component {
    mock = `{"id":1,"name":"Luke Skywalker","height":1.72,"mass":73,"gender":"male","homeworld":"tatooine","wiki":"http://starwars.wikia.com/wiki/Luke_Skywalker","image":"https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg","born":-19,"bornLocation":"polis massa","died":34,"diedLocation":"ahch-to","species":"human","hairColor":"blond","eyeColor":"blue","skinColor":"light","cybernetics":"Prosthetic right hand","affiliations":["Alliance to Restore the Republic","Red Squadron","Rogue Squadron","Massassi Group","Leia Organa's team","Endor strike team","Jedi Order","Bright Tree tribe","New Republic","Resistance"],"masters":["Obi-Wan Kenobi","Yoda"],"apprentices":["Leia Organa","Ben Solo (along with a dozen apprentices)","Rey"],"formerAffiliations":[]}`;

    state = {
        name: '',
        species: '',
        diedLocation: '',
        died: '',
        gender: '',
        mass: '',
        height: ''
    }

    componentDidMount() {
        // const {results, singleStar} = this.props.data;

        // if (!results.length) {
        //     this.redirectToHome();
        //     return;
        // }

        // const {name} = singleStar;
        // this.setState({ name,  })
        const data = JSON.parse(this.mock);

        this.setState({
            name: data.name
        });

    }

    componentWillMount() {
        this.fetchStars();
    }

    render() {
        const { singleStar } = this.props.data;
        console.log('singleStar', singleStar);

        return <div>
            <h3>Update this Star</h3>
            <form>
                <Input
                    type="text"
                    value="kap12"
                    name="name"
                    label="Name"
                    id="name"
                    errorText="some errors"
                    onChange={this.onChange.bind(this)}/>
            </form>
        </div>
    }

    onChange(e) {
        console.log(e);
    }
    
    fetchStars() {
        this.props.dispatch(fetchStar(+this.props.match.params.id));
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
