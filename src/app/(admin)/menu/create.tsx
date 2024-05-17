import Button from '@/components/Button'
import { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { PizzaNotFound } from './[id]'
import { Colors } from '@/constants/Colors'
import * as ImagePicker from 'expo-image-picker';
import { Stack, useLocalSearchParams } from 'expo-router'
const create = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [errors, setErrors] = useState('')
    const [image, setImage] = useState<string|null>(null);
    const {id} = useLocalSearchParams();
    const isUpdating = !!id
    const resetFields = ()=>{
        setName('')
        setPrice('')
        setImage(null)
    }
    const validateInput =()=>{
        setErrors('')
        if(!name){
            setErrors('Name is required')
            return false
        }
        if(!price){
            setErrors('Price is required')
            return false
        }
        if(isNaN(parseFloat(price))){
            setErrors('Price is not a number')
            return false
        }
        return true
    }
    const onSubmit = ()=>{
        if(isUpdating){
            onUpdateCreate()
        }
        else{
            onCreate()
        }
    }
    const onCreate = () =>{
        console.warn('creating ptroduct', name, price)
        if(!validateInput()){
            return;
        }
            resetFields()
    }
    const onUpdateCreate = () =>{
        console.warn('creating ptroduct', name, price)
        if(!validateInput()){
            return;
        }
            resetFields()
    }
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        console.log(result);
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };

    const onDelete =()=>{

    }

    const onConfirmDelete = ()=>{
        console.warn('Confirm delete')
    }
    
  return (
    <View style={styles.container} >
        <Stack.Screen options={{title: isUpdating? 'Update Product': 'Create Product'}}/>
        <Image source={{uri: image || PizzaNotFound}} style={styles.image}/>
        <Text onPress={pickImage} style={styles.btnSelectImage}>Select image</Text>
        <Text style={styles.label}>Name</Text>
        <TextInput value={name} placeholder='Name' style={styles.input} onChangeText={setName}/>
        <Text style={styles.label}>Price $</Text>
        <TextInput value={price} placeholder='Price' style={styles.input} keyboardType='numeric' onChangeText={setPrice}/>
        <Text style={{color:"red"}}>{errors}</Text>
        <Button onPress={onSubmit} text={isUpdating? 'Update':'Create'}/>
        {isUpdating ? <Text onPress={onConfirmDelete} style={styles.btnSelectImage}>Delete</Text>: null}
    </View>
  )
}
const styles= StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        padding: 10 
    },
    label: {
        color: 'gray',
        fontSize: 16
    },
    input:{
        backgroundColor:'white',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10
    },
    image: {
        height: 100,
        aspectRatio: 1,
        alignSelf: 'center'
    },
    btnSelectImage: {
        color: Colors.light.tint,
        marginVertical: 10, 
        textAlign: 'center'
    }
})
export default create