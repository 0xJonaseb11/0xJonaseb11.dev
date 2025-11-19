import { useEffect } from "react";
import { toast } from "react-toastify";
import { FiAlertTriangle } from "react-icons/fi";
import Web3 from "web3";
import WelcomeContract from "./Welcome.json";

const WalletWarningToast = () => (
  <div className="wallet-toast__content">
    <span className="wallet-toast__icon" aria-hidden="true">
      <FiAlertTriangle />
    </span>
    <div className="wallet-toast__copy">
      <p className="wallet-toast__title">Non-Ethereum browser detected!</p>
      <p className="wallet-toast__subtitle">
        Please install or enable an EVM wallet to have a smooth experience!
      </p>
    </div>
  </div>
);

function Welcome() {
  useEffect(() => {
    const initWeb3 = async () => {
      if (!window.ethereum) {
        console.error("MetaMask not detected.");
        toast.error(<WalletWarningToast />, {
          toastId: "no-wallet-detected",
          icon: false,
        });
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
