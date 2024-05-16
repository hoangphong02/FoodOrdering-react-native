import ProductListItem from '@/components/ProductListItem';
import products from '@assets/data/products';
import { FlatList} from 'react-native';
export default function HomeScreen() {
  return (
      <FlatList
      data={products}
      renderItem = {({item})=> 
        <ProductListItem product={item}/>
      }
      numColumns={2}
      contentContainerStyle={{gap:10}}
      columnWrapperStyle={{gap:10}}
        />
  );
}

