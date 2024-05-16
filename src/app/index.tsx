import Button from '@/components/Button'
import { Link } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const index = () => {
  return (
    <View style={{flex: 1, justifyContent:'center', padding: 10 }}>
        <Link href={'/(user)'} asChild>
            <Button text='User'/>
        </Link>
        <Link href={'/(admin)'} asChild>
            <Button text='Admin'/>
        </Link>
    </View>
  )
}

export default index