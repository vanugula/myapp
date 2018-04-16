import React, { Component } from 'react';

export default class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date:new Date()};
    }
    render(){
        return <h1>This is vijayVarunReddy {this.props.text}
        <h2>time is {this.state.date.toLocaleTimeString()}</h2>
        </h1>
    }
}
