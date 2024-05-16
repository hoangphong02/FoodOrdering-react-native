import { Stack, useLocalSearchParams, useRouter } from "expo-router"
import { Image, Text, View, StyleSheet, Pressable } from "react-native"
import { useState } from "react";
import Button from "@/components/Button";
import orders from "@assets/data/orders";
import dayjs from "dayjs";
import { Order } from "@/types";
export const PizzaNotFound ='https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/6cheese.png'
const OrderDetailsScreen = () => {
  const {id} = useLocalSearchParams();
  const router = useRouter()
  const order = orders?.find((order)=> order.id.toString() === id)
  if(!order){
    return <Text>Order not found</Text>
  }
  //3:12.44
  return (
    <View style={styles.container}> 
      <Stack.Screen options={{title: `Order: #${order?.id}` }}/>
        <View style={styles.title}>
        <View style={styles.info}>
         <Text style={styles.name}>Order #{order.id}</Text>
         <Text>{dayjs(order.created_at).fromNow()}</Text>
         </View>
         <Text>{order.status}</Text>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding:10
  },
  title:{
backgroundColor: "#fff", 
   borderRadius: 10,
   padding:10,
   flex:1 ,
   marginBottom: 10,
   justifyContent: "space-between",
   flexDirection:'row',
   alignItems:'center'
  },
  image:{
    width: '100%',
    aspectRatio:1
  }, 
   name:{
    fontWeight:"bold",
    fontSize: 14
  },
  info: {
    flexDirection: 'column',
    alignItems:"center",
    gap:10
  }, 
  order:{

  },
  quantity:{

  },
  priceAndSize:{
    
  },
  price:{

  }
});
export default OrderDetailsScreen