import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const AddButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AntDesign name="plus" size={40} color="#fff" />
    </TouchableOpacity>
  )
}

export default AddButton

const styles = StyleSheet.create({
    container:{
        height: 60,
        width: 60,
        backgroundColor: "#1273DE",
        borderRadius:40,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom:30,
        position: "absolute",
        bottom: 0
    }
})