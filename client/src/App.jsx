import abi from './contract/Carbon.json'
import './App.css'
import { useEffect, useState } from 'react'
import { ethers } from 'ethers'  // Correctly import from 'ethers'
import Buy from './components/Buy.jsx'
import Memo from './components/Memo.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  })
 const[account,setAccount] = useState("None")
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0xAAC129A3e6e9f44147951dDD5655d66c312A4713"
      const contractABI = abi.abi

      try {
        const { ethereum } = window
        if (ethereum) {
          // Request account access if needed
          await ethereum.request({ method: "eth_requestAccounts" })

          // Create provider and signer using ethers
          window.ethereum.on("chainchanged",() => {
            window.location.reload()
          } )
          window.ethereum.on("accounts changed",() => {
            window.location.reload()
          } )
          const provider = new ethers.BrowserProvider(ethereum)
          const signer = provider.getSigner()

          // Create contract instance
          const contract = new ethers.Contract(contractAddress, contractABI, signer)

          // Update state with provider, signer, and contract
          setState({ provider, signer, contract })
          setAccount(account)
        } else {
          console.log("Ethereum object doesn't exist!")
          alert("Please install MetaMask!")
        }
      } catch (error) {
        console.error("Error connecting to MetaMask", error)
      }
    }

    connectWallet()
  }, [])

  // console.log(state)

  return (
    <>
    
       <Navbar/>
        <Buy state={state} >

        </Buy>
        <Memo state={state} ></Memo>
     
    </>
  )
}

export default App
