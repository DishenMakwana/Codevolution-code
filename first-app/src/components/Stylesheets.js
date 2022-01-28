import React from 'react';
import './myStyle.css';

function Stylesheets(props) {
    let className = props.primary ? 'primary' : '';
    return (
        <div>
            <h2 className={`${className} font-xl`}>StyleSheet</h2>
        </div>
    );
}

export default Stylesheets;
