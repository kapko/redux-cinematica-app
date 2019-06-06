import React, { Component } from 'react';
import Image from '../../../common/components/image/image.component';

export default class StarComponent extends Component {
    render() {
        if (!this.props.data) {
            return <h1>Don't have any items</h1>;
        }

        return this.props.data.map((item, i) => {
            return <div
                key={i}
                className="card"
                style={{
                    width: '30%',
                    float: "left",
                    margin: '5px',
                    minHeight: "600px"
                }}>
                <Image class="card-img-top" src={item.image} />
                <div className="card-body">
                    <h5 className="card-title"><b>name:</b> {item.name}</h5>
                    <p className="card-text"><b>gender:</b>  {item.gender}</p>
                    <p className="card-text"><b>birth day:</b>  {item.birth_year}</p>
                    <a href={'/'} className="btn btn-primary">Show details</a>
                </div>
            </div>
        }
        )
    }
}
