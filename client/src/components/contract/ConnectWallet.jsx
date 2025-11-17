import { useEffect } from "react";
import Web3 from "web3";
import WelcomeContract from "./Welcome.json";

function Welcome() {
  useEffect(() => {
    const initWeb3 = async () => {
      if (!window.ethereum) {
        console.error("MetaMask not detected.");
        window.alert("Non-ethereum browser detected.. Consider installing Metamask Wallet!!");
        return;
      }

      const web3Instance = new Web3(window.ethereum);
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const networkId = await web3Instance.eth.net.getId();
        const deployedNetwork = WelcomeContract.networks[networkId];

        if (!deployedNetwork?.address) {
          console.warn("Welcome contract not deployed on the connected network.");
          return;
        }

        const contractInstance = new web3Instance.eth.Contract(
          WelcomeContract.abi,
          deployedNetwork.address
        );

        const message = await contractInstance.methods.getMessage().call();
        console.info("Welcome contract message:", message);
      } catch (error) {
        console.error(
          "Error connecting to MetaMask or interacting with the Welcome contract:",
          error
        );
      }
    };

    initWeb3();
  }, []);

  return null;
}

export default Welcome;
