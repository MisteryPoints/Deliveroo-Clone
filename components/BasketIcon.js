import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Currency from 'react-currency-formatter';
import { useDispatch, useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../extra/basketSlice';
import { useNavigation } from '@react-navigation/core';

const BasketIcon = ({ modal }) => {
    const items = useSelector(selectBasketItems) 
    const basketTotal = useSelector(selectBasketTotal)
    const navigation = useNavigation()  

    if (items.length === 0) return null
  
    return (
        <View className={`absolute bottom-10 w-full z-50 `}>
            <TouchableOpacity onPress={() => navigation.navigate('Basket')} className='bg-[#00CCBB] mx-5 p-4 rounded-lg flex-row items-center space-x-1'>
                <Text className='text-white font-extrabold text-lg bg-[#01A296] py-1 px-2'>{items.length}</Text>
                <Text className='flex-1 text-white font-extrabold text-lg text-center'> Ver Carrito </Text> 
                <Text className='text-lg text-white font-extrabold'>
                    <Currency quantity={basketTotal} currency='DOP' pattern="##,### !" />
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default BasketIcon