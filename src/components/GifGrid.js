import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const {data: images,loading} = useFetchGifs(category);

    return (
        <>
            <h3 className='card animate__animated animate__fadeIn'> { category } </h3>
            { loading && 'Loading...' }
            <div className="wrapperCards ">
                {
                    images.map( img => (
                        <GifGridItem key={ img.id } {...img} />
                    ))
                } 
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}