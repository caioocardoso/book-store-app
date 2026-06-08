import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const AppTextInput = ({value, onChangeText, placeHolder, keyboardType, ...otherProps}) => {
  return (
    <View style={styles.container}>
      <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeHolder}
      keyboardType={keyboardType}
      {...otherProps}
      ></TextInput>
    </View>
  )
}

export default AppTextInput

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#f4f4f4",
        width:"100%",
        height:40,
        borderRadius:8,
        justifyContent:"center",
        paddingHorizontal:8,
        marginBottom:20
    }
})