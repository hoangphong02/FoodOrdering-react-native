import Button from '@/components/Button'
import { useAuth } from '@/provider/AuthProvider'
import { Link, Redirect } from 'expo-router'
import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { supabase } from "@/lib/supabase";


const index = () => {
  const {session, loading} = useAuth()

  if(loading){
    return <ActivityIndicator/>
  }
  if(!session){
    return <Redirect href={'/sign-in'}/>
  }
  return (
    <View style={{flex: 1, justifyContent:'center', padding: 10 }}>
        <Link href={'/(user)'} asChild>
            <Button text='User'/>
        </Link>
        <Link href={'/(admin)'} asChild>
            <Button text='Admin'/>
        </Link>
        <Link href={'/(auth)/sign-in'} asChild>
            <Button text='Sign in'/>
        </Link>
        <Button text='Sign-out' onPress={()=> supabase.auth.signOut()}/>
    </View>
  )
}

export default index