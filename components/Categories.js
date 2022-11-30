import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';
import sanityClient, { urlFor } from '../sanity';

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        sanityClient.fetch(`
            *[_type == "category"]
        `).then(data => setCategories(data))
    })

    return (
        <ScrollView contentContainerStyle={{
            paddingHorizontal: 15, 
        }} horizontal showsHorizontalScrollIndicator={false} className='pt-4'>
            {/* Category Card */}
            {categories.map((category) => ( 
                <CategoryCard key={category._id} imgUrl={urlFor(category.image).url()} title={category.name}/>
            ))} 
        </ScrollView>
    )
}

export default Categories