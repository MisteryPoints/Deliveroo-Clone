import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../extra/restaurantSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../extra/basketSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';
import Currency from 'react-currency-formatter';

const BasketScreen = () => { 
    const navigation = useNavigation() 
    const restaurant = useSelector(selectRestaurant)
    const items = useSelector(selectBasketItems)
    const basketTotal = useSelector(selectBasketTotal)
    const [groupedItemsBasket, setGroupedItemsBasket] = useState([])
    const dispatch = useDispatch()

    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item)
            return results
        }, {})

        setGroupedItemsBasket(groupedItems)
    }, [items]) 

    return (
        <SafeAreaView className='flex-1 bg-white'>
            <View className='flex-1 bg-gray-100'>
                <View className='p-5 border-b border-[#00CCBB] bg-white shadow-md'>
                    <View>
                        <Text className='text-lg font-bold text-center'> Carrito </Text>
                        <Text className='text-center text-gray-400'> {restaurant.title} </Text>
                    </View>

                    <TouchableOpacity onPress={navigation.goBack} className='rounded-full bg-gray-100 absolute top-3 right-5' >
                        <XCircleIcon color='#00CCBB' height={50} width={50} />
                    </TouchableOpacity>
                </View>
                <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
                    <Image source={{ uri: 'https://links.papareact.com/wru' }} className='h-7 w-7 bg-gray-300 p-4 rounded-full' />
                    <Text className='flex-1'>Tu pedido llega en 50-75 min</Text>
                    <TouchableOpacity>  
                        <Text className='text-[#00CCBB]'>Cambiar</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView className='divide-y divide-gray-200 '>
                    {Object.entries(groupedItemsBasket).map(([key, items]) => (
                        <View key={key} className='flex-row items-center space-x-3 bg-white py-2 px-5'> 
                            <Text className='text-[#00CCBB]'>{items.length} x</Text>
                            <Image source={{ uri: urlFor(items[0]?.image).url() }} className='h-12 w-12 rounded-full' />
                            <Text className='flex-1'>{items[0]?.name}</Text>
                            <Text className='text-gray-600'>
                                <Currency quantity={items[0]?.price} currency='DOP' pattern="##,### !" />
                            </Text>
                            <TouchableOpacity>
                                <Text className='text-[#00CCBB] text-xs' onPress={() => dispatch(removeFromBasket({ id: key }))}> 
                                    Eliminar
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>

                <View className='p-5 bg-white mt-5 space-y-4'>
                    <View className='flex-row justify-between'>
                        <Text className='text-gray-400'> Subtotal </Text>
                        <Text className='text-gray-400'>
                            <Currency quantity={basketTotal} currency='DOP' pattern="##,### !" />
                        </Text>
                    </View>
                    <View className='flex-row justify-between'>
                        <Text className='text-gray-400'> Gastos de Envío </Text>
                        <Text className='text-gray-400'>
                            <Currency quantity={150} currency='DOP' pattern="##,### !" />
                        </Text>
                    </View>
                    <View className='flex-row justify-between'>
                        <Text> Total a Pagar </Text>
                        <Text className='font-extrabold'>
                            <Currency quantity={basketTotal + 150} currency='DOP' pattern="##,### !" />
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('PreparingOrderScreen')} className='rounded-lg bg-[#00CCBB] p-4'>
                        <Text className='text-center text-white text-lg font-bold'>Realizar Pedido</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default BasketScreen