import React from 'react';
import { View, TextInput,Text } from 'react-native';

const InputField = (props) =>
{
    return(
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{props.label} </Text>
    <TextInput secureTextEntry={props.secureTextEntry} placeholder = {props.placeHolder} autoCorrect = {false} value={props.value} onChangeText={props.onChangeText} style={styles.inputStyle} />
    </View>
    );

};



const styles = {
    inputStyle: {
      color: '#000',
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: 18,
      lineHeight: 23,
      flex: 2
    },
    labelStyle: {
      fontSize: 18,
      paddingLeft: 20,
      flex: 1
    },
    containerStyle: {
      height: 40,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
    }
  };

export {InputField}