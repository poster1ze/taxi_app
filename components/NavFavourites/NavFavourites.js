import React from "react";
import {FlatList, TouchableOpacity, Text, View} from "react-native";
import {Icon} from "react-native-elements";
import tw from "tailwind-react-native-classnames"

const data = [
    {
        id: 123,
        icon: "home",
        location: "Дом",
        destination: "улица Липатова, 7, Казань, Россия",
    },
    {
        id: 456,
        icon: "briefcase",
        location: "Работа",
        destination: "улица Копылова, 1б, Казань, Россия",
    }
]


const NavFavourites = () => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item => item.id)}
            ItemSeparatorComponent={() => (
                <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
            )}
            renderItem={({item: {location, destination, icon} }) => (
                <TouchableOpacity style={tw`flex-row items-center p-5`}>
                    <Icon
                        style={tw `mr-4 rounded-full bg-pink-300 p-3`}
                        name={icon}
                        type="ionicon"
                        color="white"
                        size={18}
                    />
                    <View>
                        <Text style={tw`font-semibold text-lg`}>{location}</Text>
                        <Text style={tw`text-pink-500`}>{destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />

    )
}

export default NavFavourites
