import React, {useState} from "react";
import {FlatList, SafeAreaView, Text, TouchableOpacity, View, Image} from "react-native";
import {Icon} from "react-native-elements";
import tw from "tailwind-react-native-classnames"
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {selectTravelTimeInformation} from "../../Redux/slices/navSlice";

const data = [
    {
        id: "Lyft",
        title: "Эконом",
        multiplier: 1,
        image: "https://images.ctfassets.net/q8mvene1wzq4/2DS1wcFwCBPt7BDZDnC2Wo/846cc676fe7004f74dc4794a198c9de5/lyft_icon_2x.png?w=&q=60&fm=webp",
    },
    {
        id: "Lyft-XL",
        title: "Классик",
        multiplier: 1.3,
        image: "https://images.ctfassets.net/q8mvene1wzq4/2HtCyRlopxqoxhbHCuEiqn/3e837bec9c7a45e2e70fea5b175973fe/xtra_seats_icon_2x.png?w=&q=60&fm=webp",
    },
    {
        id: "Lyft-LUX",
        title: "Люкс",
        multiplier: 1.75,
        image: "https://images.ctfassets.net/q8mvene1wzq4/2AtXOCguvjUEhNmgrWlWlF/cd201b0f49037eec6ca6c0be2c0e309a/lux_icon_2x.png?w=&q=60&fm=webp",
    },
]

const SURGE_CHARGE_RATE = 15


const RideOptionsCard = () => {
    const navigation = useNavigation()
    const [selected, setSelected] = useState(null)
    const travelTimeInformation = useSelector(selectTravelTimeInformation)

    return (
        <SafeAreaView style={tw `bg-white flex-grow`}>
            <View>
                <TouchableOpacity
                    onPress={() =>navigation.navigate('NavigateCard')}
                    style={tw`absolute top-3 left-5 p-3 rounded-full`}
                >
                    <Icon name="chevron-left" type="fontawesome" />
                </TouchableOpacity>
                <Text style={tw `text-center py-5 text-xl`}>  Длина Пути
                    -  {travelTimeInformation?.distance?.text}
                </Text>
            </View>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item: { id, title, multiplier, image}, item }) => (
                    <TouchableOpacity
                        onPress={() => setSelected(item)}
                        style={tw`flex-row justify-between items-center px-3 ${
                        id === selected?.id && "bg-pink-300"}`}
                    >
                        <Image
                            style={{
                            width: 100,
                            height: 100,
                            resizeMode: "contain"
                        }}
                        source={{ uri: image }}
                        />
                        <View style={tw`-ml-6`}>
                            <Text style={tw`text-xl font-semibold`}>{title}</Text>
                            <Text>{travelTimeInformation?.duration?.text} в поездке</Text>
                        </View>
                        <Text style={tw`text-xl`}>
                            {new Intl.NumberFormat("ru", {
                                style: "currency",
                                currency: "RUB",
                            }).format(
                                (travelTimeInformation?.duration.value *
                                        SURGE_CHARGE_RATE *
                                        multiplier) / 100
                            )}
                        </Text>
                    </TouchableOpacity>
                )}
            />
            <View style={tw`mt-auto border-t border-gray-200`}>
                <TouchableOpacity
                    disabled={!selected}
                    style={tw`bg-black py-3 m-3 ${!selected && "bg-pink-300"}`}
                >
                    <Text style={tw`text-center text-white text-xl`}>
                        Выбрать {selected?.title}
                    </Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default RideOptionsCard
