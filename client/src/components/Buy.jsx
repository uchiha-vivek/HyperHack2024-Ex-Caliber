import { ethers } from 'ethers';
import React from 'react';

function Buy({ state }) {
    const buyCarbon = async (event) => {
        event.preventDefault();
        const { contract } = state;
        const name = document.querySelector('#name').value;
        const message = document.querySelector('#message').value;
        console.log(name, message, contract);
        const amount = { value: ethers.parseEther("0.001") };
        const transaction = await contract.buyCredits(name, message, amount);
        await transaction.wait();
        console.log('Carbon Transaction Done!');
    };

    return (
        <div className="justify-center flex min-h-screen items-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Buy Carbon Credits</h2>
                
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="Enter your name" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                
                <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                    <input 
                        type="text" 
                        id="message" 
                        placeholder="Enter your message" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                
                <button 
                    type="submit" 
                    disabled={!state.contract} 
                    className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400"
                >
                    Pay 0.001 ETH
                </button>
            </div>
        </div>
    );
}

export default Buy;