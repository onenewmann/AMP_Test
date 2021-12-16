
import React from 'react';



export function Landing() {

  return (
    <div className="container">
        
        <p className="bottom-space" style={{marginBottom:'400px'}} />
        <p className="bottom-space-sm" />
        <div className='row'>
                      <div className='col'>
                          <div className='btn'>
                          <img src='images/web/telegram_icon.png' alt='' width="25px" className='icon' />
                          &emsp;Telegram
                          </div>
                      </div>
                      <div className='col'>
                          <div className='btn'>
                          <img src='images/web/discord_icon.png' alt='' width="23px" className='icon' />
                          &emsp;DISCORD
                          </div>
                      </div>
                      <div className='col'>
                          <div className='btn'>
                          <img src='images/web/twitter_icon.png' alt='' width="23px" className='icon' />
                          &emsp;Twitter
                          </div>
                      </div>
                      </div>
            <div className="row">
                <div className='col'>
                    <h3 className="neon" style={{fontSize: '25px', fontFamily: 'neon', textAlign:'start'}}>
                        Decetralized Autonomous Organization
                    </h3>
                    <h3 style={{fontSize: '15px', textAlign: 'justify'}}>
                    
                    </h3>
                    <p className="bottom-space-md" />
                    <h3 style={{fontSize: '15px', textAlign: 'justify'}}>
                      We are a movement. A club. A tribe. We are fixated on one goal… Don't work for money, let the money work for you.
                      Join our community-governed DeFi platform focused on Staking, Lending, Governance, and Decentralized Launchpad services.
                      Its objective is to give financial control back to the people, so that as a collective, they may store and grow their wealth together. COSMOPOD DAO aims to leverage crowd wisdom to create a community-governed, transparent, and decentralized ecosystem for web 3.0.
                      <br /> Started with the goal of building on Substrate as a Polkadot-first project, Cosmosapiens DAO is now a multi-chain ecosystem offering services on Ethereum, Binance Smart Chain, and Polygon.
                    </h3>
                </div>
                <div className="col">
                  <div className='float-div'>
                    <img src="images/upsidedown.gif" width="250px" alt="" style={{marginLeft:'-50px'}} />
                  </div>
                </div>
            </div>
        <div className='col'>
          <h3 style={{fontSize: '25px', textAlign:'center'}}>Blockchain Agnostic For Multi-Chain Support</h3>
            <p style={{fontSize: '15px', textAlign:'justify'}}>
            To support its ecosystem of financial products, COSMOSAPIENS DAO runs its DeFi services on a number of different blockchains.
            Started with the goal of building on Substrate as a Polkadot-first project, COSMOSAPIENS DAO now also offers its services on Binance Smart Chain
            Polygon and  Ethereum. Moving forward, it will be available on HECO, Solana, RioChain, and more!</p>
        </div>
        <div className="col">
            <div className='img-zoom'>
              <img src="images/multichains.png" width="200px" alt="" style={{marginLeft:'0px'}} />
            </div>
        </div>
        <p className="bottom-space-sm" />
    </div>
  );
}