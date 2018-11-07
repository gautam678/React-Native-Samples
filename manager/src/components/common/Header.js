import { Text, View } from 'react-native';

import React from 'react';


const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (<View style={viewStyle}><Text style={textStyle}> {props.headerText} </Text></View>);
};
const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }
};

export {Header};
