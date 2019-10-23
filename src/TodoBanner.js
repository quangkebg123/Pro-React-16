import React, { Component } from 'react';

export class TodoBanner extends Component {
    render = () =>
        <h4 className="bg-primary text-white text-center p-2">
            {this.props.name}'s Quạt bánh đa 3
            ({this.props.tasks.filter(a => !a.done).length} items to do)
        </h4>
}
