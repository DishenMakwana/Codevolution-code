import React, { Component } from 'react';
import MemoComp from './MemoComp';
import PureComp from './PureComp';
import RegComp from './RegComp';

class ParentComp extends Component {
    constructor(props) {
        super(props);

        this.state = { name: 'Dishen' };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Dishen',
            });
        }, 2000);
    }

    render() {
        console.log('**********ParentComp**********');
        return (
            <div>
                <div>parent Component</div>
                {/* <RegComp name={this.state.name} /> */}
                {/* <PureComp name={this.state.name} /> */}
                <MemoComp name={this.state.name} />
            </div>
        );
    }
}

export default ParentComp;
