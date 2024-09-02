import { View, Text, Platform } from 'react-native'
import React, { StatusBar } from 'expo-status-bar'


const CartScreen = () => {
  return (
    <View>
      <Text>Cart</Text>
      <StatusBar style={Platform.OS === 'ios'? 'light':'auto'}/>
    </View>
  )
}

export default CartScreen