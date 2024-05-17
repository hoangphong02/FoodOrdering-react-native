import { StyleSheet,View, Text, Image, Pressable} from 'react-native';
import { OrderItem} from '../types';
import { Colors } from '@/constants/Colors';
import { Link, useSegments } from 'expo-router';
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs';
export const PizzaNotFound ='https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/6cheese.png'
dayjs.extend(relativeTime)

type OrderItemListItemProps ={
  item: OrderItem
}
const OrderItemListItem = ({item}: OrderItemListItemProps) => {
    return (
      <View style={styles.container}>
        <Image source ={{uri: item.products.image || PizzaNotFound}} style={styles.image}/>
        <View style={styles.info}>
            <View >
                <Text style={styles.name}>{item.products.name}</Text>
                <View style={styles.priceandsize}>
                <Text style={styles.price} >${item.products.price}</Text>
                <Text >Size: {item.size}</Text>
                </View>
            </View>
                <Text style={styles.quantity}>{item.quantity}</Text>
        </View>
      </View>
    )
};
export default OrderItemListItem;

const styles = StyleSheet.create({
  container: {
   backgroundColor: "#fff", 
   borderRadius: 10,
   padding:10,
   flex:1 ,
   justifyContent: "space-between",
   flexDirection:'row',
   alignItems:'center'
  },
  name:{
    fontWeight:"bold",
    fontSize: 14
  },
  info: {
    flexDirection: 'row',
    alignItems:"center",
    gap:10,
    flex:1,
    justifyContent: 'space-around'
  },
  image:{
    height: 100,
    aspectRatio: 1
  },
  price: {
    color: Colors.light.tint
  },
  quantity:{

  },
  priceandsize:{
    flexDirection: 'row',
    gap: 10
  }
});
