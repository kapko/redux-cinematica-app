import React from 'react'

export default class RadioButton extends React.Component {
    state = {
        checked: null
    }

    componentDidMount() {
        this.setState({ checked: this.props.checked });
    }

    render() {
        const { data } = this.props;
        const items = data.map((item, i) =>
            <div className="form-check form-check-inline" key={i}>
                <input
                    className="form-check-input"
                    type="radio"
                    name={item.name}
                    id={item.value}
                    value={item.value}
                    onChange={this.onChange.bind(this)}
                    checked={item.value === this.state.checked} />
                <label className="form-check-label" htmlFor={item.value}>{item.label}</label>
            </div>
        );

        return (
            <div>{items}</div>
        )
    }

    onChange(e) {
        this.setState({ checked: e.target.value });
        this.props.onChange(e);
    }
}
