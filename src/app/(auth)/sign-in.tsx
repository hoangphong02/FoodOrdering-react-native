import Button from "@/components/Button"
import { Colors } from "@/constants/Colors"
import { supabase } from "@/lib/supabase"
import { Link, Stack } from "expo-router"
import { useState } from "react"
import { Alert, StyleSheet, Text, TextInput, View } from "react-native"

const signInScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')
    const [loading ,setLoading] = useState(false)

      const validateInput =()=>{
        setErrors('')
        if(!email){
            setErrors('Email is required')
            return false
        }
        if(!password){
            setErrors('Password is required')
            return false
        }
        return true
    }
    const resetFields = ()=>{
        setEmail('')
        setPassword('')
    }
    const signIn = async () => {
        setLoading(true)
        const {error} = await supabase.auth.signInWithPassword({email, password});
        if(error) Alert.alert(error.message)
         setLoading(false)
    }

  return (
    <View style={styles.container}>
        <Stack.Screen options={{title:"Sign-in"}}/>
        <Text style={styles.label}>Email:</Text>
        <TextInput style={styles.input} placeholder="abc@gmail.com" value={email} onChangeText={setEmail}/>
        <Text style={styles.label}>Password:</Text>
        <TextInput style={styles.input} placeholder="password" value={password} onChangeText={setPassword}/>
        <Text style={{color:"red"}}>{errors}</Text>
        <Button text={loading? 'Sign in ...': 'Sign in' } disabled={loading} onPress={signIn}/>
        <Link href='/(auth)/sign-up' style={styles.btnSelectCreateAccount}>
            <Text >Create an account</Text>
        </Link>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        justifyContent: 'center',
        flex: 1,
    },
    label: {
        color: 'gray',
        fontSize: 16
    },
    input:{
        backgroundColor:'white',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'gray',
        
    },
    btnSelectCreateAccount: {
        color: Colors.light.tint,
        marginVertical: 10, 
        textAlign: 'center',
    }

})

export default signInScreen