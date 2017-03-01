import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, password, autoCapitalize }) => {

  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
   <View style={ containerStyle }>
     <Text style={ labelStyle }>{ label }</Text>
     <TextInput
       autoCapitalize={ autoCapitalize || 'none' }
       password={ password }
       placeholder = { placeholder }
       value={ value }
       onChangeText={ onChangeText }
       style={ inputStyle }
       autoCorrect={ false }
      />
   </View>
 );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 16,
    lineHeight: 21,
    flex: 2,
  },
  labelStyle: {
    fontSize: 16,
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

export { Input };
