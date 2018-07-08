import React from 'react';
import { View } from 'react-native';

const CardItems = (props) => {

    return (
        <View style={styles.cardStyles}>
            {props.children}
        </View>

    );
};

const styles = {
    cardStyles: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#FFF',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flex: 1,
        borderColor: '#ddd',
        position: 'relative',
        width: null

    }
};
export default CardItems;
