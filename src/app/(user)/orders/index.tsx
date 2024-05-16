import OrderListItem from '@/components/OrderListItem';
import orders from '@assets/data/orders';
import { FlatList} from 'react-native';
export default function HomeScreen() {
  return (
      <FlatList
      data={orders}
      renderItem = {({item})=> 
        <OrderListItem order={item}/>
      }
      style={{padding: 10}}
/>
  );
}