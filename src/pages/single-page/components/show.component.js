import React, { Component } from 'react'
// local files
import Image from '../../../common/components/image/image.component'
import RemoveTitle from './sub-components/remove.title'
import '../single-page.component.css'

export default class ShowStar extends Component {
    state = {
        showTitle: false
    }

    render() {
        const { item } = this.props;

        const removeTitle = this.state.showTitle ? <RemoveTitle
            name={item.name}
            remove={this.removeStar.bind(this)}
            cancel={() => this.setState({showTitle: false})}/> : null;

        return (
            <div className="col-md-6 offset-3">
                {removeTitle}
                <h2><b>Name:</b> {item.name}</h2>
                <Image src={item.image} />
                <p><b>Gender:</b>  {item.gender}</p>
                <p><b>Species:</b>  {item.species}</p>
                <p><b>DiedLocation:</b>  {item.diedLocation || '-'}</p>
                <p><b>Died:</b>  {item.died || '-'}</p>
                <p><b>Gender:</b>  {item.gender || '-'}</p>
                <p><b>Mass:</b>  {item.mass || '-'}</p>
                <p><b>Height:</b>  {item.height || '-'}</p>
                <p><b>Eye Color:</b>  {item.eyeColor || '-'}</p>
                <hr />
                <button className="btn btn-warning text-white">Update star</button>
                <button
                    className="btn btn-danger"
                    onClick={() => this.setState({showTitle: true})}>Remove start</button>
                <button
                    onClick={this.props.toHome}
                    className="btn btn-warning text-white">Cancel</button>
            </div>
        );
    }

    removeStar() {
        const {item} = this.props;
        this.props.removeStar(+item.id);
    }
}