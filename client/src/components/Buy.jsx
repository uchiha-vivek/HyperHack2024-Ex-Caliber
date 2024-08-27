import { ethers } from 'ethers';
import React, { useState } from 'react';

function Buy({ state }) {
    const [submissions, setSubmissions] = useState([]); // State to track submissions
    const [loading, setLoading] = useState(false); // State to track loading status
    const [error, setError] = useState(null); // State to track errors

    const buyCarbon = async (event) => {
        event.preventDefault();
        const { contract } = state;
        if (!contract) {
            console.error('No contract found');
            return;
        }

        const name = document.querySelector('#name').value;
        const message = document.querySelector('#message').value;

        try {
            setLoading(true);
            const amount = { value: ethers.parseEther("0.001") };
            console.log('Sending transaction with', name, message, amount);

            const transaction = await contract.buyCredits(name, message, amount);
            console.log('Transaction sent:', transaction);

            await transaction.wait();
            console.log('Carbon Transaction Done!');

            // Update submissions state
            setSubmissions([...submissions, { name, message }]);

            // Clear form fields after submission
            document.querySelector('#name').value = '';
            document.querySelector('#message').value = '';
        } catch (err) {
            console.error('Transaction failed:', err);
            setError('Transaction failed. Please check the console for more details.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="justify-center flex min-h-screen items-center bg-neutral-900 text-white">
            <div className="bg-neutral-800 p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Buy Carbon Credits</h2>
                
                <div className="mb-4">
                    <label htmlFor="name" className="block font-semibold mb-2">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="Enter your name" 
                        className="w-full p-3 border border-neutral-700 rounded-lg bg-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                
                <div className="mb-6">
                    <label htmlFor="message" className="block font-semibold mb-2">Message</label>
                    <input 
                        type="text" 
                        id="message" 
                        placeholder="Enter your message" 
                        className="w-full p-3 border border-neutral-700 rounded-lg bg-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                
                <button 
                    type="submit" 
                    disabled={!state.contract || loading} 
                    onClick={buyCarbon}
                    className='rounded-md bg-gradient-to-r from-green-700 to-green-400 py-2 px-3 w-full text-black font-semibold'
                >
                    {loading ? 'Processing...' : 'Pay 0.001 CARBON CREDITS'}
                </button>

                {error && <p className="text-red-500 mt-4">{error}</p>}

                {/* Display the submissions */}
                <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Submitted Transactions</h3>
                    <ul className="space-y-2">
                        {submissions.map((submission, index) => (
                            <li key={index} className="p-4 bg-neutral-700 rounded-lg shadow text-white">
                                <p><strong>Name:</strong> {submission.name}</p>
                                <p><strong>Message:</strong> {submission.message}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Buy;
