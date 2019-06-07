import React, { Component } from 'react';
import Pagination from "react-js-pagination";
import './paginatio.component.css';

export class Paginate extends Component {
    render() {
        return (
            <Pagination
                activePage={this.props.activePage}
                itemsCountPerPage={this.props.itemCount}
                totalItemsCount={this.props.totalCount}
                hideNavigation
                itemClass="page-item"
                linkClass="page-link"
                onChange={this.props.onChange}
            />
        )
    }
}
