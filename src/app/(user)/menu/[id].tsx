import { Stack, useLocalSearchParams, useRouter } from "expo-router"
import { Image, Text, View, StyleSheet, Pressable } from "react-native"
import products from "@assets/data/products";
import { useState } from "react";
import Button from "@/components/Button";
import { useCart } from "@/provider/CartProvider";
import { PizzaSize } from "@/types";
export const PizzaNotFound ='https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/6cheese.png'
const ProductDetailsScreen = () => {
  const [selectedSize, setSelectedSize] = useState<PizzaSize>('S')
  const size: PizzaSize[] = ['S','M','L','XL']
  const {id} = useLocalSearchParams();
  const {addItem} = useCart()
  const router = useRouter()
  const product = products?.find((pro)=> pro.id.toString() === id)
  if(!product){
    return <Text>Product not found</Text>
  }
  const addToCart = () => {
    if(!product){return}
    addItem(product, selectedSize)
    router.push('/cart')
  }
  return (
    <View style={styles.container}> 
      <Stack.Screen options={{title: product?.name}}/>
        <Image source={{uri: product.image || PizzaNotFound}} style={styles.image}/>
        <Text>Select size</Text>
        <View style={styles.sizes}>
          {
            size.map((size)=> (
              <Pressable
              key={size}
              onPress={()=> {setSelectedSize(size)}}
               style={[styles.size, {backgroundColor: selectedSize === size ? '#ddd': '#fff'}] 
              }> 
                <Text style={[styles.sizeText, {color: selectedSize === size ? '#000': '#ddd'}]} key={size}>{size}</Text>
              </Pressable>
            ))
          }
        </View>
        <Text style={styles.price}>${product.price}</Text>
        <Button text="Add cart" onPress={addToCart}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding:10
  },
  image:{
    width: '100%',
    aspectRatio:1
  }, 
  price: {
    fontSize: 18,
    fontWeight:'bold',
    marginTop: 'auto',
  },
  sizes: {
    display:'flex',
    flexDirection: 'row',
    justifyContent:'space-around',
    marginVertical: 10
  },
  size: {
    backgroundColor: '#ddd',
    width: 50,
    aspectRatio:1,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 25
  },
  sizeText: {
    fontSize: 20,
    fontWeight:'bold'
  }
});
export default ProductDetailsScreen