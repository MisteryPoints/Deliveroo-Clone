import React from 'react';
import { ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';

const Categories = () => {
    return (
        <ScrollView contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10,
        }} horizontal showsHorizontalScrollIndicator={false}>
            {/* Category Card */}
        
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Testing 1'/>
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Testing 2'/>
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Testing 3'/> 
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Testing 4'/> 
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Testing 5'/> 
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Testing 6'/> 
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Testing 7'/> 
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Testing 8'/> 
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Testing 9'/> 
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Testing 10'/> 
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Testing 11'/> 
        </ScrollView>
    )
}

export default Categories