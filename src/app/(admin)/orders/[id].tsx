import { Stack, useLocalSearchParams  } from "expo-router"
import { Text, View, StyleSheet, Pressable, FlatList } from "react-native"
import orders from "@assets/data/orders";
import { OrderStatusList } from "@/types";
import OrderListItem from "@/components/OrderListItem";
import OrderItemListItem from "@/components/OrderItemListItem";
import { Colors } from "@/constants/Colors";
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
        renderItem={({ item }) => <OrderItemListItem item={item} />}
        contentContainerStyle={{ gap: 10 }}
        ListHeaderComponent={() => <OrderListItem order={order} />}
        ListFooterComponent={() => (
          <>
            <Text style={{ fontWeight: 'bold' }}>Status</Text>
            <View style={{ flexDirection: 'row', gap: 5 }}>
              {OrderStatusList.map((status) => (
                <Pressable
                  key={status}
                  onPress={() => console.warn('Update order')}
                  style={{
                    borderColor: Colors.light.tint,
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 5,
                    marginVertical: 10,
                    backgroundColor:
                      order.status === status
                        ? Colors.light.tint
                        : 'transparent',
                  }}
                >
                  <Text
                    style={{
                      color:
                        order.status === status ? 'white' : Colors.light.tint,
                    }}
                  >
                    {status}
                  </Text>
                </Pressable>
              ))}
            </View>
          </>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    gap:10,
    flex: 1
  },
  
});
export default OrderDetailsScreen