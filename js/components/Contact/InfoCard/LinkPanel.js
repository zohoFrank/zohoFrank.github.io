/**
 * Created by Zoho on 16/9/2.
 */
// todo

import React from 'react';

import uuid from 'uuid';

import Icon from './LinkPanel/IconButton'

export default class LinkPanel extends React.Component {
    constructor() {
        super();

        const IconArray = ['fa-archive','fa-github','fa-envelope','fa-linkedin-square'].map((name) => {
            return <Icon iconName={name} key={uuid.v1()}/>
        });

        this.data = {
            className: 'contact-link',
            elements: IconArray
        };
    }

    render() {
        return (
            <div class={this.data.className}>
                {this.data.elements}
            </div>
        );
    }
}