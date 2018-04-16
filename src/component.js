import React, { Component } from 'react';

export default class Welcome extends React.Component {
    render() {
        return <h1>hello guys{this.props.text}</h1>

    }
}
