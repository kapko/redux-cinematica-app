import React from 'react';

export const SmallText = (props) => {
    return <p className="text-left" style={{ color: 'red', paddingBottom: '10px' }}><small>{props.text}</small></p>;
};

