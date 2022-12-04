import { useNavigation } from '@react-navigation/core';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import { AdjustmentsHorizontalIcon as AdjustmentIcon, ChevronDownIcon, MagnifyingGlassIcon as SearchIcon, UserIcon } from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';

const HomeScreen = () => {
    const navigation = useNavigation()
    const [featuredCategories, setFeaturedCategories] = useState([])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        }) 
    }, [])

    useEffect(() => {
        sanityClient.fetch(
        `
            *[_type == 'featured'] {
                ...,
                restaurants[]-> {
                    ...,
                    dishes[] -> 
                }
            }
        `).then(data => {
            setFeaturedCategories(data)
        })
    },[]) 
 
    return (
        <SafeAreaView className='bg-white pt-5'>  
            {/* Header */}
            <View className='flex-row pb-3 items-center mx-4 space-x-2'>
                <Image className='h-7 w-7 bg-gray-300 p-4 rounded-full' source={{
                    uri: 'https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450',
                }} />
                <View className='flex-1'>
                    <Text className='font-bold text-gray-400 text-xs'>Pedidos a Domicilio!</Text>
                    <Text className='font-bold text-xl'>Ubicación Actual
                        <ChevronDownIcon size={20} color='#00CCBB' /> 
                    </Text>
                </View> 
                <UserIcon size={35} color='#00CCBB'/> 
            </View>  
            {/* Search */}
            <View className='flex-row items-center space-x-2 pb-2 mx-4'>
                <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3 rounded-2xl'>
                    <SearchIcon size={20} color='gray' />
                    <TextInput placeholder='Restaurantes y Mercados' keyboardType='default' className='text-gray-500 text-sm w-[100%] '/>
                </View>
                <AdjustmentIcon size={35} color='#00CCBB'/>
            </View> 
            {/* Body */}
            <ScrollView className='bg-gray-100' contentContainerStyle={{
                paddingBottom: 100,
            }}>
                {/* Categories */}
                <Categories/>

                {/* Featured Rows */}
                {featuredCategories?.map((category) => (
                    <FeaturedRow key={category._id} id={category._id} title={category.name} description={category.short_description}/>
                ))} 
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen