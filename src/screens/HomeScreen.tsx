import { View, Text } from 'react-native'
import React from 'react'
import BookCard from '../components/BookCard'

const HomeScreen = () => {
  return (
    <View style={{flex:1, backgroundColor:"gold"}}>
      <BookCard />
    </View>
  )
}

export default HomeScreen