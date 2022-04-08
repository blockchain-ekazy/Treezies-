import { white } from "./whiteaddresses.js";
import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";

import React, { useState, useEffect } from "react";
import abi from "./abi.json";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
require("dotenv").config();

const leaf = white.map((addr) => keccak256(addr));
const merkleTree = new MerkleTree(leaf, keccak256, { sortPairs: true });

const REACT_APP_CONTRACT_ADDRESS = "0xD4555309Cd9B053E8D472c4D9EB9D68Ca7b17758";
const SELECTEDNETWORK = "4";
const SELECTEDNETWORKNAME = "Ethereum Testnet";
const nftquantity = 7777;

function checkWhitelist(a) {
  const check = keccak256(a);
  const proof = merkleTree.getHexProof(check);
  const root = merkleTree.getRoot();

  return merkleTree.verify(proof, check, root);
}

function getProof(a) {
  const check = keccak256(a);
  return merkleTree.getHexProof(check);
}

function Mintbtn() {
  const [errormsg, setErrorMsg] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [totalSupply, settotalSupply] = useState(0);
  const [walletConnected, setWalletConnected] = useState(0);
  const [whitelistedUser, setWhitelistedUser] = useState(0);

  useEffect(async () => {
    if (await detectEthereumProvider()) {
      // setProvider(true);
      window.web3 = new Web3(window.ethereum);
      const web3 = window.web3;
      if ((await web3.eth.net.getId()) == SELECTEDNETWORK) {
        const contractaddress = REACT_APP_CONTRACT_ADDRESS;
        const ct = new web3.eth.Contract(abi, contractaddress);
        settotalSupply(await ct.methods.totalSupply().call());

        if (nftquantity - (await ct.methods.totalSupply().call()) == 0) {
          setErrorMsg("All NFTs minted, Sale has ended");
        }
      } else {
        // setProvider(false);
        setErrorMsg(
          'Select "' +
            SELECTEDNETWORKNAME +
            '" network in your wallet to buy the nft'
        );
      }
    } else {
      setErrorMsg(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
      // setProvider(false);
    }
    if (window.ethereum) {
      handleEthereum();
    } else {
      window.addEventListener("ethereum#initialized", handleEthereum, {
        once: true,
      });
      setTimeout(handleEthereum, 10000);
    }

    function handleEthereum() {
      const { ethereum } = window;
      if (ethereum && ethereum.isMetaMask) {
        console.log("Ethereum successfully detected!");
        // setProvider(true);
      } else {
        setErrorMsg("Please install MetaMask!");
        // setProvider(false);
      }
    }
  }, []);

  async function loadWeb3() {
    if (await detectEthereumProvider()) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;

      let metaMaskAccount = await web3.eth.getAccounts();
      metaMaskAccount = metaMaskAccount[0];

      if ((await web3.eth.net.getId()) == SELECTEDNETWORK) {
        const contractaddress = REACT_APP_CONTRACT_ADDRESS;
        const ct = new web3.eth.Contract(abi, contractaddress);

        let current = await ct.methods.totalSupply().call();
        if (Number(current) === nftquantity) {
          setErrorMsg("Sold out");
          return;
        }

        let maxmints = await ct.methods.MAX_PER_Address().call();
        let bal = await ct.methods.numberMinted(metaMaskAccount).call();
        if (bal + quantity > maxmints) {
          setErrorMsg("Cannot mint more than " + maxmints + " Treezies");
          return;
        }

        let price = await ct.methods.PRICE().call();
        let proof = getProof(metaMaskAccount);

        let statusone = await ct.methods.status().call();

        if (statusone == 1) {
          await ct.methods
            .whitelistMint(quantity, proof)
            .send({ from: metaMaskAccount, value: price * quantity });
          settotalSupply(await ct.methods.totalSupply().call());
        } else {
          await ct.methods
            .mint(quantity)
            .send({ from: metaMaskAccount, value: price * quantity });
          settotalSupply(await ct.methods.totalSupply().call());
        }
        setQuantity(1);
      } else {
        setErrorMsg(
          'Select "' +
            SELECTEDNETWORKNAME +
            '" network in your wallet to buy the nft'
        );
      }
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      {
        setErrorMsg(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
      }
    }
  }

  async function connectWallet() {
    if (await detectEthereumProvider()) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;

      if ((await web3.eth.net.getId()) == SELECTEDNETWORK) {
        // // creating contract instance
        const contractaddress = REACT_APP_CONTRACT_ADDRESS;
        const ct = new web3.eth.Contract(abi, contractaddress);

        let metaMaskAccount = await web3.eth.getAccounts();
        metaMaskAccount = metaMaskAccount[0];

        let statusone = await ct.methods.status().call();

        if (statusone == 0) {
          setErrorMsg("Minting not started, please wait for launch");
          return;
        } else if (statusone == 1) {
          checkWhitelist(metaMaskAccount)
            ? setWalletConnected(1)
            : setErrorMsg("Not whitelisted, please wait for public sale");
          return;
        } else if (statusone == 2) setWalletConnected(1);
      }
    }
  }

  return (
    <div className="container BtnDiv">
      {!errormsg ? (
        <div className="row align-items-center">
          {walletConnected == 0 ? (
            <div className="col-12">
              <button
                onClick={() => {
                  connectWallet();
                }}
                className="btn4"
              >
                Connect Wallet
              </button>
            </div>
          ) : (
            ""
          )}
          {walletConnected == 1 ? (
            <>
              <div className="col-sm-12">
                <div className="d-flex justify-content-center align-items-center">
                  <button
                    className="btn4 px-3 py-1"
                    onClick={() => setQuantity(quantity - 1)}
                    disabled={quantity == 1}
                  >
                    <span className="button_text">-</span>
                  </button>
                  <span
                    className="text-white"
                    style={{
                      padding: "20px",
                      fontSize: "25px",
                      fontWeight: "700",
                    }}
                  >
                    {quantity}
                  </span>
                  <button
                    className="btn4 px-3 py-1"
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={quantity == 3}
                  >
                    <span className="button_text">+</span>
                  </button>
                </div>
              </div>
              <div className="col-sm-12 pt-3">
                <button
                  type="button"
                  className="btn4"
                  onClick={() => loadWeb3()}
                  style={{ marginBottom: "0px" }}
                >
                  <span className="button_text">Mint a Treezies</span>
                </button>
              </div>
            </>
          ) : (
            ""
          )}
          {/* <p className="mt-3 text-white mx-auto mb-0 text-center">{nftquantity-totalSupply}/{nftquantity} Available</p> */}
        </div>
      ) : (
        <p className="mt-2 text-white">
          <b>{errormsg}</b>
        </p>
      )}
    </div>
  );
}

export default Mintbtn;
