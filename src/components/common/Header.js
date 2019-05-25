import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>

    )
}

const styles = {
    viewStyle: {
        backgroundColor: 'mediumorchid',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 21,
        color: '#fff'
    }
}

export { Header };