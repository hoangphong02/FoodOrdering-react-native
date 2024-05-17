import { withLayoutContext } from "expo-router";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
const Toptabs = withLayoutContext(createMaterialTopTabNavigator().Navigator)
export default function OrderListNavigation(){
    return (
        <SafeAreaView style={{flex:1, backgroundColor:'white' }}>
            <Toptabs>
            <Toptabs.Screen name='index' options={{title: 'Active'}}/>
            </Toptabs>
        </SafeAreaView>
    )
}