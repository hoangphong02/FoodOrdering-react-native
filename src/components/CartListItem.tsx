import { Colors } from "@/constants/Colors"
import { useCart } from "@/provider/CartProvider";
import { CartItem } from "@/types"
import { FontAwesome } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native"
import 'react-native-gesture-handler';
type CartListItemProps ={
    cartItem: CartItem
  }
const CartListItem = ({cartItem}: CartListItemProps) => {
    const {updateQuantity}= useCart()
  return (
    <View style={styles.container}>  
        <Image style={styles.image} source={{uri: cartItem?.product?.image || ''}} resizeMode="contain"/>
        <View style={styles.info}>
            <View>
                <Text style={styles.title}>{cartItem?.product?.name}</Text>
                <View style={styles.priceAndSize}>
                <Text style={styles.price}>${cartItem?.product?.price}</Text>
                <Text>Size : {cartItem?.size}</Text>
                </View>
            </View>
            <View style={styles.quantitySelector}>
            <FontAwesome
                    name='minus'
                    size={25}
                    color='gray'
                    style={{fontSize: 15}}
                    onPress={()=> updateQuantity(cartItem.id, -1)}
                  />
                <Text style={styles.quantity}>{cartItem?.quantity}</Text>
                <FontAwesome
                    name='plus'
                    size={25}
                    color='gray'
                    style={{fontSize: 15}}
                    onPress={()=> updateQuantity(cartItem.id, 1)}
                  />
            </View>
        </View>
    </View>
  )
}

export default CartListItem

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        backgroundColor:'white',
        padding:5,
        borderRadius:10
    },
    image: {
        height: 100,
        aspectRatio: 1
    },
    info:{
        flexDirection:'row',
        justifyContent:'space-between',
        flex:1,
        padding:10,
        alignItems: 'center'
    },
    priceAndSize:{
        flexDirection: 'row',
        gap: 10
    },
    title: {
        fontWeight:'bold'
    },
    price: {
        color: Colors.light.tint
    },
    quantitySelector: {
        flexDirection: 'row',
        gap: 10,
        fontSize:10,
        alignItems: 'center'
    },
    quantity: {
        fontSize: 16
    }
})