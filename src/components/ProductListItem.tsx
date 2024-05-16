import { StyleSheet,View, Text, Image, Pressable} from 'react-native';
import { Product } from '../types';
import { Colors } from '@/constants/Colors';
import { Link, useSegments } from 'expo-router';
export const PizzaNotFound ='https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/6cheese.png'
type ProductListItemProps ={
  product: Product
}
const ProductListItem = ({product}: ProductListItemProps) => {
  const segments = useSegments()
    return (
      <Link href={`/${segments[0]}/menu/${product.id}`} asChild>
        <Pressable style={styles.container}>
         <Image style={styles.image} source={{uri: product.image || PizzaNotFound}}
         resizeMode='contain'/>
         <Text style={styles.name}>{product.name}</Text>
         <Text>${product.price}</Text>
        </Pressable>
      </Link>
    )
};
export default ProductListItem;

const styles = StyleSheet.create({
  container: {
   backgroundColor: "#fff", 
   borderRadius: 20,
   padding:10,
   flex:1 
  },
  name:{
    fontWeight:"bold",
    fontSize: 14
  },
  price:{
    color: Colors.light.tint
  },
  image:{
    width: "100%",
    aspectRatio: 1,
  }
});
