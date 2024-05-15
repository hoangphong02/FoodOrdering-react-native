import { StatusBar } from 'expo-status-bar'
import { Platform, Text, View } from 'react-native'
import { useContext } from 'react'
import { useCart } from '@/provider/CartProvider'

const CartScreen = () => {
    const {items} = useCart()
  return (
    <View>
        <Text> Cart is length : {items.length}</Text>
        <StatusBar style={Platform.OS==='ios'?'light': 'auto'}/>
    </View>
  )
}

export default CartScreen