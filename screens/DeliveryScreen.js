import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { selectRestaurant } from '../extra/restaurantSlice'
import { useSelector } from 'react-redux'
import { XMarkIcon } from 'react-native-heroicons/outline'
import * as Progress from 'react-native-progress'; 
import MapView, { Marker } from 'react-native-maps'

const DeliveryScreen = () => {
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)

  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className='z-50'>
        <View className='flex-row justify-between items-center p-5'>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <XMarkIcon color='white' size={30}/>
          </TouchableOpacity>
          <Text className='font-light text-white text-lg'>Ayuda</Text>
        </View>

        <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'>
          <View className='flex-row justify-between'>
            <View>
              <Text className='text-lg text-gray-400'>Llegada Estimada</Text>
              <Text className='text-3xl font-bold'>45-55 Minutos</Text>
            </View>
            <Image source={{
              uri:'https://media2.giphy.com/media/gsr9MG7bDvSRWWSD1Y/giphy.gif?cid=790b76117452e294f4466a226c7bb2d49a2074744f8e9181&rid=giphy.gif&ct=s'
            }} className='h-20 w-20'/>
          </View>
          <Progress.Bar size={30} color='#00CCBB' indeterminate={true}/>
          <Text className='mt-3 text-gray-500'>
            Tu orden de {restaurant.title} está siendo preparada
          </Text>
        </View>
      </SafeAreaView>

      <MapView initialRegion={{
        latitude: restaurant.lat,
        longitude: restaurant.long,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }} className='flex-1 -mt-14 z-0' mapType='mutedStandard'>
        <Marker coordinate={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
        }} title={restaurant.title} description={restaurant.short_description} identifier='origin' pinColor='#00CCBB' />
      </MapView>

      <SafeAreaView className='bg-white flex-row items-center space-x-5 h-28'>
        <Image source={{
          uri:'https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450qs',
        }} className='h-12 w-12 bg-gray-300 p-4 rounded-full ml-5' />
        <View className='flex-1'>
          <Text className='text-lg'>Víctor Tejada</Text>
          <Text className='text-gray-400'>Su Conductor</Text>
        </View>

        <Text className='text-[#00CCBB] text-lg mr-5 font-bold'>Llamar</Text>
      </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen