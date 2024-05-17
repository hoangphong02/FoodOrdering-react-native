import { StatusBar } from 'expo-status-bar'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { useCart } from '@/provider/CartProvider'
import { FlatList } from 'react-native'
import CartListItem from '@/components/CartListItem'
import Button from '@/components/Button'
const CartScreen = () => {
    const {items, total} = useCart()
  return (
    <View style={{padding:10}}>
        <FlatList  
      data={items}
      renderItem = {({item})=> 
        <CartListItem cartItem={item}/>
      }
      contentContainerStyle={{ gap: 10 }}
        />
      
      <Text style={styles.total} >Total: ${total.toFixed(2)}</Text>
      <Button text='Checkout'/>

        <StatusBar style={Platform.OS==='ios'?'light': 'auto'}/>
    </View>
  )
}   

const styles = StyleSheet.create({
  total: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 20
  }
})

export default CartScreen

