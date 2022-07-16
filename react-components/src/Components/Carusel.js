import React, {Component} from 'react';

const caruselStyle = {
    display: 'flex',
    width: '80vw',
    alignItems: 'center',
    justifyContent: 'center',
}
const contentStyle = {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
}
const valueStyle = {
    textAlign: 'center',
}
const buttonStyle = {
    userSelect: 'none',
    cursor: 'pointer',
}
class Carusel extends Component {
    state = {
        itemArray: [
            {
                name: "Item name",
                value: "Item value"
            },
            {
                name: "Item name 2",
                value: "Item value 222"
            },
            {
                name: "Item name 3",
                value: "Item value 333"
            },
            {
                name: "Item name 4",
                value: "Item value 444"
            },
            {
                name: "Item name 5",
                value: "Item value 555"
            },
            {
                name: "Item name 6",
                value: "Item value 666"
            },
            {
                name: "Item name 7",
                value: "Item value 777"
            },
            {
                name: "Item name 8",
                value: "Item value 888"
            },
        ],
        itemId: 0,
    }

    previousItem = () => {
        if (this.state.itemId === 0){
            this.setState({
                ...this.state,
                itemId: this.state.itemArray.length -1
            })
        } else {
            this.setState({
                ...this.state,
                itemId: this.state.itemId -1
            })
        }
    }
    nextItem = () => {
        if (this.state.itemId === this.state.itemArray.length -1){
            this.setState({
                ...this.state,
                itemId: 0
            })
        } else {
            this.setState({
                ...this.state,
                itemId: this.state.itemId +1
            })
        }
    }
    render(){
        return(
            <div style={caruselStyle}>
                <div style={buttonStyle} onClick={this.previousItem}>{'<'}</div>
                <div style={contentStyle}>
                    <h3 style={valueStyle}>{this.state.itemArray[this.state.itemId].name}</h3>
                    <p style={valueStyle}>{this.state.itemArray[this.state.itemId].value}</p>
                </div>
                <div style={buttonStyle} onClick={this.nextItem}>{'>'}</div>
            </div>
        )
    }
}

export default Carusel;