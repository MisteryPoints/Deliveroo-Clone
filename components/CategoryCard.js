import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const CategoryCard = ({ imgUrl, title }) => {
    return (
        <TouchableOpacity className='relative mr-2'> 
            <Image source={{
                uri: imgUrl
            }} className='h-20 w-20 rounded'/>
            <Text className='absolute bottom-1 left-1 w-full text-center bg-white opacity-80 text-gray-600 font-bold rounded-sm'>{ title }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})

export default CategoryCard;
