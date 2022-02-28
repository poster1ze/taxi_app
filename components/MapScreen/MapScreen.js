import React from "react";
import {TouchableOpacity, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import Map from '../Map/Map';
import { createStackNavigator } from "@react-navigation/stack";
import NavigateCard from "../NavigateCard/NavigateCard";
import RideOptionsCard from "../RideOptionsCard/RideOptionsCard";
import {Icon} from "react-native-elements/dist/icons/Icon"
import {useNavigation} from "@react-navigation/native";

const MapScreen = () => {
    const Stack = createStackNavigator()
    const navigation = useNavigation()



    return (
        <View>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={tw`bg-gray-100 absolute top-7 left-5 z-50 p-3 rounded-full shadow-lg`}
            >
                <Icon name="menu"/>
            </TouchableOpacity>

            <View style={tw`h-1/3`}>
                <Map />
            </View>

            <View style={tw`h-2/3`}>
                <Stack.Navigator>
                    <Stack.Screen
                        name="NavigateCard"
                        component={NavigateCard}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="RideOptionsCard"
                        component={RideOptionsCard}
                        options={{
                            headerShown: false
                        }}
                    />
                </Stack.Navigator>
            </View>
        </View>
    )
}

export default MapScreen

