import { Stack, useLocalSearchParams, useRouter } from "expo-router"
import { Image, Text, View, StyleSheet, Pressable, FlatList } from "react-native"
import { useState } from "react";
import Button from "@/components/Button";
import orders from "@assets/data/orders";
import dayjs from "dayjs";
import { Order } from "@/types";
import OrderListItem from "@/components/OrderListItem";
import OrderItemListItem from "@/components/OrderItemListItem";
export const PizzaNotFound ='https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/6cheese.png'
const OrderDetailsScreen = () => {
  const {id} = useLocalSearchParams();
  const order = orders?.find((order)=> order.id.toString() === id)
  if(!order){
    return <Text>Order not found</Text>
  }
  return (
    <View style={styles.container}> 
      <Stack.Screen options={{title: `Order: #${order?.id}` }}/>
        <FlatList
          data={order.order_items}
          renderItem={({item}) => <OrderItemListItem item={item}/> }
          contentContainerStyle={{gap: 10}}
          ListFooterComponent={()=> <OrderListItem order={order}/>}
        />
        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    gap:10
  },
});
export default OrderDetailsScreen