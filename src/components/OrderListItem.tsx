import { StyleSheet,View, Text, Image, Pressable} from 'react-native';
import { Order} from '../types';
import { Colors } from '@/constants/Colors';
import { Link, useSegments } from 'expo-router';
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs';
export const PizzaNotFound ='https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/6cheese.png'
dayjs.extend(relativeTime)

type OrderListItemProps ={
  order: Order
}
const OrderListItem = ({order}: OrderListItemProps) => {
    return (
      <Link href={`/(user)/orders/${order.id}`} asChild>
        <Pressable style={styles.container}>
         <View style={styles.info}>
         <Text style={styles.name}>Order #{order.id}</Text>
         <Text>{dayjs(order.created_at).fromNow()}</Text>
         </View>
         <Text>{order.status}</Text>
        </Pressable>
      </Link>
    )
};
export default OrderListItem;

const styles = StyleSheet.create({
  container: {
   backgroundColor: "#fff", 
   borderRadius: 10,
   padding:10,
   flex:1 ,
   marginBottom: 10,
   justifyContent: "space-between",
   flexDirection:'row',
   alignItems:'center'
  },
  name:{
    fontWeight:"bold",
    fontSize: 14
  },
  info: {
    flexDirection: 'column',
    alignItems:"center",
    gap:10
  }
});
