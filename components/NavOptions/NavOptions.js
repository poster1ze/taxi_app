import React from "react";
import { FlatList, View, Image, Text, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames"
import { Icon } from "react-native-elements"
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {selectOrigin} from "../../Redux/slices/navSlice";

const data = [
    {
        id: '1',
        title: 'Подать машину',
        image: 'https://images.ctfassets.net/q8mvene1wzq4/2DS1wcFwCBPt7BDZDnC2Wo/846cc676fe7004f74dc4794a198c9de5/lyft_icon_2x.png?w=&q=60&fm=webp',
        screen: "Map Screen"
    },
    {
        id: '2',
        title: 'Заказать готовую еду',
        image: 'https://links.papareact.com/28w',
        screen: "Map Screen"
    }
]


const NavOptions = () => {
    const navigation = useNavigation()
    const origin = useSelector(selectOrigin)

    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => navigation.navigate(item.screen)}
                    style={tw`p-2 pl-6 pb-8 pt-4 bg-pink-500 m-2 w-40`}
                    disabled={!origin}
                >
                    <View style={tw`${!origin && "opacity-20"}`}>
                        <Image
                            style={{ width : 120, height: 120, resizeMode: "contain" }}
                            source={{ uri: item.image }}
                        />
                        <Text style={tw`mt-2 text-lg font-bold`}>{item.title}</Text>
                        <Icon
                            style={tw`p-2 bg-white rounded-full w-10 mt-4`}
                            name="arrowright"
                            color="black"
                            type="antdesign"
                        />
                    </View>
                </TouchableOpacity>
            )} />
    )
}

export default NavOptions
