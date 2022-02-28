import React from "react";
import { View, Image, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from "../NavOptions/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGlE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../../Redux/slices/navSlice";
import NavFavourites from "../NavFavourites/NavFavourites";

const HomeScreen = () => {
    const dispatch = useDispatch()

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
           <View style={tw `p-5`}>
               <Image
               style={{
                   width: 100,
                   height: 100,
                   resizeMode: "contain"
               }}
               source={{
                   uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lyft_logo.svg/1200px-Lyft_logo.svg.png"
               }}
               />

               <GooglePlacesAutocomplete
                   placeholder="Адрес отправки?"
                   styles={{
                       container: {
                           flex: 0
                       },
                       textInput: {
                           fontSize: 18
                       },
                   }}
                   onPress={(data, details = null) => {
                       dispatch(setOrigin({
                           location: details.geometry.location,
                           description: data.description,
                       }))

                       dispatch(setDestination(null))
                   }}
                   fetchDetails={true}
                   returnKeyType={"search"}
                   enablePoweredByContainer={false}
                   minLength={2}
                   query={{
                       key: GOOGlE_MAPS_APIKEY,
                       language: "ru"
                   }}
                   nearbyPlacesAPI="GooglePlacesSearch"
                   debounce={300}
               />

               <NavOptions />
               <NavFavourites />
           </View>
        </SafeAreaView>
    );
}

export default HomeScreen

