import React from 'react';
import Button from '../Button/Button';

function FadeInCard() {
   
    return (
        <div className="flex justify-center items-center min-h-screen  bg-gray-100 ">
        <div className="relative">
            <div className="bg-white p-4 rounded-lg shadow-md w-64  h-64 transition-opacity duration-1000 opacity-0 animate-fadeIn absolute -top-16 left-1/2 transform -translate-x-1/2">
                <h2 className="text-lg font-bold text-center text-gray-800">Carbon Credit</h2>
                <p className="text-gray-600 text-center mt-8 ">
                    Offset your footprint today.
                </p>
                 <div className='mt-20 ml-10 justify-center ' >
                    <Button />
                 </div>
            </div>

           
        </div>
    </div>
    );
}

export default FadeInCard;
