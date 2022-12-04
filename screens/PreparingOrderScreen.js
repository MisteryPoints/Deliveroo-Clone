import { View, Text, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress'; 
import { useNavigation } from '@react-navigation/core';

const PreparingOrderScreen = () => {
  const navigation = useNavigation()

  useEffect(() => { 
    setTimeout(() => {
      navigation.navigate('Delivery')
    }, 4000)
  }, [])
   
  return (
    <SafeAreaView className='bg-[#00ccbb85] flex-1 justify-center items-center'>
        <Animatable.Image source={require('../assets/deliveroo.gif')} animation='slideInUp' iterationCount={1} className='h-96 w-96' />
        <Animatable.Text animation='slideInUp' iterationCount={1} className='text-lg my-10 text-white font-bold text-center'>
            Esperando que el Restaurante acepte tu Pedido!
        </Animatable.Text> 
        <Progress.Circle size={60} indeterminate={true} color='white' fill='#00ccbb' className='md:hidden' />  
    </SafeAreaView>
  )
}

export default PreparingOrderScreen