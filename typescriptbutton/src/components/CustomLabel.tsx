import React from 'react';

interface CustomLabelProps {
    text: string;
    // set style
    style?: {
        fontFamily?: string, 
        fontSize?: string;
        padding?: string;
        margin?: string;
        display?: string;
        position?: string;
        top?: string;
        left?: string;
        right?: string;
        bottom?: string;
        color?: string;
}


}

const CustomLabel: React.FC<CustomLabelProps> = ({ text }) => {
    return <label>{text}</label>;
};

export default CustomLabel;
