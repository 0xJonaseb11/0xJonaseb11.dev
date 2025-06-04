import React, { useState, useEffect } from "react";
import Web3 from "web3";
import WelcomeContract from "./Welcome.json";

function Welcome() {
  // eslint-disable-next-line no-unused-vars
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [message, setMessage] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [account, setAccount] = useState("");

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          setWeb3(web3Instance);
          const accounts = await web3Instance.eth.getAccounts();
          setAccount(accounts[0]);
          const networkId = await web3Instance.eth.net.getId();
          const deployedNetwork = WelcomeContract.networks[networkId];
          const contractInstance = new web3Instance.eth.Contract(
            WelcomeContract.abi,
            deployedNetwork && deployedNetwork.address
          );
          setContract(contractInstance);
          const message = await contractInstance.methods.getMessage().call();
          setMessage(message);
        } catch (error) {
          console.error("Error connecting to MetaMask or getting account information:", error);
        }
      } else {
        console.error("MetaMask not detected.");
        window.alert("Non-ethereum browser detected.. Consider installing Metamask Wallet!!")

      }
    };

    initWeb3();
  }, []);

  const fetchMessage = async () => {
    if (!contract) return;
    try {
      const message = await contract.methods.getMessage().call();
      setMessage(message);
    } catch (error) {
      console.error("Error fetching message:", error);
    }
  };

  const handleSetMessage = async () => {
    if (!contract) return;
    try {
      await contract.methods.setGreeting(newMessage).send({ from: account });
      fetchMessage(); // Fetch the updated message after setting it
    } catch (error) {
      console.error("Error setting message:", error);
    }
  };

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  return (
    <div className="Welcome">
      {/* <h1>You are highly welcome to my portfolio website</h1>
      <p><i className="flex flex-col font-bold text-green text-3xl p-2">Current Message: </i>{message}</p>
      <button className="flex flex-col text-white" onClick={fetchMessage}>Fetch Message</button>
      <br />
      <input type="text" value={newMessage} onChange={handleInputChange} />
      <button onClick={handleSetMessage}>Set Message</button> */}
    </div>
  );
}

export default Welcome;
