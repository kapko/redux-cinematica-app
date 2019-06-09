import React, { Component } from 'react'
import { Link } from "react-router-dom";
// local files
import Image from '../image/image.component'
import './star.component.css'

export default class StarComponent extends Component {
    render() {
        const {item} = this.props;

        return (<div
            className="card">
            <Image class="card-img-top" src={item.image} />
            <div className="card-body">
                <h5 className="card-title text-center font-weight-bold">{item.name}</h5>
                <p><b>Gender:</b>  {item.gender}</p>
                <p><b>Species:</b>  {item.species}</p>
                <p><b>DiedLocation:</b>  {item.diedLocation || '-'}</p>
                <p><b>Died:</b>  {item.died || '-'}</p>
                <p><b>Gender:</b>  {item.gender || '-'}</p>
                <p><b>Mass:</b>  {item.mass || '-'}</p>
                <p><b>Height:</b>  {item.height || '-'}</p>
                <p><b>Eye Color:</b>  {item.eyeColor || '-'}</p>
                <Link className="btn btn-primary" to={`star/${item.id}`}>Show details</Link>
            </div>
        </div>
        )

    }
}
