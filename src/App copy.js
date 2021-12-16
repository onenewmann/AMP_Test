import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import example from './assets/example.gif';
import './App.css';

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    let costValue = blockchain.web3.utils.toWei((CONFIG.DISPLAY_COST * mintAmount).toString(), "ether")
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(blockchain.account, mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: costValue,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, You have a ${CONFIG.NFT_NAME} citizen! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };


  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };


  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <div className='screen'>
      <div className='darkBg'>
          <p className="bottom-space-md" />
          <div className="token__container">
                    <h1 style={{
                                display: 'flex',
                                fontSize: '15px',
                                fontWeight: '200',
                                textAlign: 'center',
                                marginTop: '-20px',
                                color: 'whitesmoke'
                              }}>Cosmosapiens</h1>
          </div>
          <div className="token__container">
            <img className='styled-img'  alt='example' src={example} style={{ transform: "scaleX(-1)" }} href={CONFIG.SCAN_LINK} />
          </div>
          <div className='text-description'
              style={{
                textAlign: "center",
                color: "var(--primary-text)",
              }}
            >
              <a className='styled-link' target={"_blank"} href={CONFIG.SCAN_LINK}>
                {truncate(CONFIG.CONTRACT_ADDRESS, 25)}
              </a>
            </div>
                  <div className="token__container">
                    <h2 style={{
                display: 'flex',
                fontSize: '30px',
                fontWeight: '900',
                textAlign: 'center',
                color: 'whitesmoke'
              }}>{data.totalSupply}&emsp;</h2>
              <hr width="3" size="50"/>
              <h2 style={{
                display: 'flex',
                fontSize: '55px',
                fontWeight: '100',
                textAlign: 'center',
                color: 'whitesmoke'
              }}>&emsp; {CONFIG.MAX_SUPPLY} MAX</h2>
                  </div>
                  <div className="token__container">
                    <p style={{color:'whitesmoke'}}>of total supply*</p>
                  </div>
                  <div className='token_container' style={{
              backgroundColor: "var(--accent)",
              padding: 24,
              borderRadius: 24,
              border: "4px dashed var(--secondary)",
              boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
            }}>
                  <p className="bottom-space-sm" />
            
            {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
              <>
                <div className='text-title' style={{
                textAlign: "center",
                fontSize: 50,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}>
                  The sale has ended.
                </div>
                <div className='text-description'
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  You can still find {CONFIG.NFT_NAME} on
                </div>
                <p className="bottom-space-sm" />
                <a className='styled-link' target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                  {CONFIG.MARKETPLACE}
                </a>
              </>
            ) : (
              <>
                <div className='text-title' style={{ textAlign: "center", color: "var(--accent-text)" }}>
                  1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}{CONFIG.NETWORK.SYMBOL}
                </div>
                <p className="bottom-space-xsm" />
                <div className='text-description'
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  Excluding gas fees.
                </div>
                <p className="bottom-space-sm" />
                {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                  <div className='container'>
                    <div className='text-description'
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                      Connect to the {CONFIG.NETWORK.NAME} network
                    </div>
                    <p className="bottom-space-sm" />
                    <button className='btn-styled' onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}>
                      CONNECT
                      </button>
                    {blockchain.errorMsg !== "" ? (
                      <>
                        <p className="bottom-space-sm" />
                        <div className='text-description'
                          style={{
                            textAlign: "center",
                            color: "var(--accent-text)",
                          }}
                        >
                          {blockchain.errorMsg}
                        </div>
                      </>
                    ) : null}
                  </div>
                ) : (
                  <>
                    <div className='text-description'
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                      {feedback}
                    </div>
                    <p className="bottom-space-md" />
                    <div className='container' style={{
                          flexDirection: "row",
                        }}>
                      <button className='btn-styled-round' 
                        style={{ lineHeight: 0.4 }}
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          decrementMintAmount();
                        }}
                      >
                        -
                      </button>
                      <p className="bottom-space-md" />
                      <div className='text-description'
                        style={{
                          textAlign: "center",
                          color: "var(--accent-text)",
                        }}
                      >
                        {mintAmount}
                      </div>
                      <p className="bottom-space-sm" />
                      <button className='btn-styled-round'
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          incrementMintAmount();
                        }}
                      >
                        +
                      </button>
                    </div>
                    <p className="bottom-space-sm" />
                    <div className='container' style={{
                          flexDirection: "row",
                        }}>
                      <button className='btn-styled'
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        claimNFTs();
                        getData();
                      }}>
                        {claimingNft ? "BUSY" : "BUY"}
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
            <p className="bottom-space-sm" />
            </div>
        <p className="bottom-space-sm" />
        <div className='text-container'>
          <div className='text-description'>
            Please make sure you are connected to the right network (
            {CONFIG.NETWORK.NAME} Mainnet) and the correct address. Please note:
            Once you make the purchase, you cannot undo this action.
          </div>
          <p className="bottom-space-xsm" />
          <div className='text-description'>
            We have set the gas limit to {CONFIG.GAS_LIMIT} for the contract to
            successfully mint your NFT. We recommend that you don't lower the
            gas limit.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
