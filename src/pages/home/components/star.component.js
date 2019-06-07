import React, { Component } from 'react'
import Image from '../../../common/components/image/image.component'
import './star.component.css'

export default class StarComponent extends Component {
    render() {
        if (!this.props.data) {
            return <h1>Don't have any items</h1>;
        }

        return this.props.data.map((item, i) =>
            <div className="col-md-4" key={i}>
                <div
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
                        <a href={'/'} className="btn btn-primary">Show details</a>
                    </div>
                </div>
            </div>
        )

    }
}
