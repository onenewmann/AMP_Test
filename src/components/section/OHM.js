import React from 'react';

export function OHM() {
  return (
      <div className='container'>
          <div className='bottom-space-md' />
                <div className='row' style={{display:'flex'}}>
                    <div className="flux">OHM </div>
                    <div className="neon">PROTOCOL</div>
                </div>
                <div className='bottom-space-md' />
                <div className="token__container">
                    <div className='token__container-section'>
                      <h3 style={{display: 'flex',fontSize: '17px', textAlign: 'justify'}}>What is it?</h3>
                      <h2 style={{display: 'flex',fontSize: '12px', textAlign: 'justify'}}>
                      Cosmosapiens DAO is a decentralized reserve currency protocol based on the CosmOHM token. 
                      Each COSMOHM token is backed by a basket of assets (e.g. BUSD, BNB, ETH and other chain coins) in the Cosmosapien treasury, 
                      giving it an intrinsic value that it cannot fall below. 
                      Cosmosapien also introduces unique economic and game-theoretic dynamics into the market through staking and bonding.
                      We’re bringing Protocol Owned Liquidity to a DAO near you, our Bonds-as-a-Service protocol.
                      </h2>
                      <h3 style={{display: 'flex',fontSize: '17px', textAlign: 'justify'}}>What is the point?</h3>
                      <h2 style={{display: 'flex',fontSize: '12px', textAlign: 'justify'}}>
                      Our goal is to build a policy-controlled currency system, in which the behavior of the COSMOHM token is controlled 
                      at a high level by the DAO. In the long term, we believe this system can be used to optimize for stability 
                      and consistency so that OHM can function as a global unit-of-account and medium-of-exchange currency. 
                      In the short term, we optimize the system for growth and wealth creation.
                      </h2>
                    </div>
                  </div>
                  <div className='bottom-space-md' />
                  <div className='row'>
                    <div className="token__container" style={{flexFlow: 'row', width: '350px', marginTop:'-10px'}}>
                        <h2 style={{display: 'flex',fontSize: '45px', fontWeight: '900', textAlign: 'end'}}>
                            GAME&emsp;
                        </h2>
                        <hr width="3" size="50"/>
                        <h2 style={{fontSize: '30px',fontWeight: '100',textAlign: 'start'}}>
                                &emsp;THEORY
                        </h2>
                    </div>
                </div>
                <div className='row' style={{color:'white', fontSize:'15px', fontFamily:'monospace'}}>
                  <ul>
                      <li>BUY</li>
                      <li>BOND</li>
                      <li>SELL</li>
                  </ul>
                </div>
                <div className='bottom-space-md' />
                <div className='row'>
                  <div className="col">
                    <div className="mobile-img">
                          <img src="images/web/box-diagram.png" width="550px" alt="" style={{marginLeft:'0px'}} />
                      </div>
                  </div>
                </div>
                <div className='bottom-space-xsm' />
                <div className="token__container">
                    <div className='token__container-section'>
                      <h3 style={{display: 'flex',fontSize: '17px', textAlign: 'justify'}}>Explain it to me like I'm five.</h3>
                      <h2 style={{display: 'flex',fontSize: '12px', textAlign: 'justify'}}>
                      Players are most likely to stake when they anticipate an expansion in supply and/or price. 
                      Players are most likely to sell when they anticipate a contraction in supply and/or price. 
                      Players are most likely to bond when they do not have a strong directional bias but don’t anticipate significant downside.
                      </h2>
                    </div>
                  </div>
                  <div className='row'>
                    <table>
                      <thead>
                        <tr>
                          <th></th>
                          <th>Stake</th>
                          <th>Bond</th>
                          <th>Sell</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Stake</td>
                          <td>(3,3)</td>
                          <td>(1,3)</td>
                          <td>(-1,1)</td>
                        </tr>
                        <tr>
                          <td>Bond</td>
                          <td>(3,1)</td>
                          <td>(1,1)</td>
                          <td>(-1,1)</td>
                        </tr>
                        <tr>
                          <td>Sell</td>
                          <td>(1,-1)</td>
                          <td>(1,-1)</td>
                          <td>(-3,-3)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="token__container">
                    <div className='token__container-section'>
                    <h2 style={{display: 'flex',fontSize: '12px', textAlign: 'justify'}}>
                      Staking has the effect of pushing the price up +2. 
                      Selling has the effect of pushing the price down -2. 
                      The player who moves price gets half of the benefit. 
                      Bonding has no price effect but provides a discount of 1.
                      As you can see, the dominant strategies are all cooperative. 
                      Both players’ staking results in 6; stake and bond results in 4; and bond and bond results in 2. 
                      Conflicting moves (stake/sell and bond/sell) are neutral. 
                      Competition (sell/sell) is the only negative sum outcome, with -6.
                      This is simplified to a dangerous degree. 
                      These dynamics will strengthen and weaken depending on the premium, market outlook, macro environment, and a litany of other factors. 
                      Don’t read too hard into the numbers. This is merely meant to demonstrate the positive-sum environment created by cooperation.
                      Working together produces optimal outcomes, so I urge you not to get involved unless you intend to stick around for the long term. 
                      Don’t be that guy who sold Bitcoin at $50 to buy back at $20. This is more like Bitcoin than you probably realize. 
                      Unlimited supply does not have to mean no scarcity.
                      </h2>
                    </div>
                  </div>
                  <div className='bottom-space-xsm' />
                  <div className="token__container">
                    <div className='token__container-section'>
                      <h3 style={{display: 'flex',fontSize: '17px', textAlign: 'justify'}}>How to participate in Cosmosapiens OHM?</h3>
                      <h2 style={{display: 'flex',fontSize: '12px', textAlign: 'justify'}}>
                      There are two main strategies for market participants: staking and bonding. 
                      Stakers stake their OHM tokens in return for more OHM tokens, while bonders provide LP or DAI tokens in exchange 
                      for discounted OHM tokens after a fixed vesting period. Governance participants can get involved on our forum 
                      and through discussions on our community discord and DAO discord servers respectively. 
                      We are always looking for new community members to contribute!
                      </h2>
                    </div>
                  </div>
                  <div className='bottom-space-xsm' />
                  <div className="token__container">
                    <div className='token__container-section'>
                      <h3 style={{display: 'flex',fontSize: '17px', textAlign: 'justify'}}>How can I benefit from Cosmosapiens OHM?</h3>
                      <h2 style={{display: 'flex',fontSize: '12px', textAlign: 'justify'}}>
                      The main benefit for stakers comes from supply growth.
                      The protocol mints new OHM tokens from the treasury, the majority of which are distributed to the stakers. 
                      Thus, the gain for stakers will come from their auto-compounding balances, 
                      though price exposure remains an important consideration. That is, if the increase in token balance outpaces 
                      the potential drop in price (due to inflation), stakers would make a profit.
                      The main benefit for bonders comes from price consistency. 
                      Bonders commit a capital upfront and are promised a fixed return at a set point in time; 
                      that return is in OHM and thus the bonder's profit would depend on OHM price when the bond matures. 
                      Bonders benefit from a rising or static OHM price.
                      </h2>
                    </div>
                  </div>
                  <div className='bottom-space-xsm' />
                  <div className="token__container">
                    <div className='token__container-section'>
                      <h3 style={{display: 'flex',fontSize: '17px', textAlign: 'justify'}}>Who runs Cosmosapiens OHM?</h3>
                      <h2 style={{display: 'flex',fontSize: '12px', textAlign: 'justify'}}>
                      No one. Cosmosapiens OHM protocol is DAO-governed. All decisions are formed by community members on the forum and made by token holders through snapshot voting.
                      </h2>
                    </div>
                  </div>
                  <div className='bottom-space-md' />
                  <h3>Currently tested on BSC Testnet</h3>
                  <div className="token__container" style={{flexFlow: 'row', width: '350px', marginTop:'-10px'}}>
                        <h2 style={{display: 'flex',fontSize: '23px', fontWeight: '100', textAlign: 'end'}}>
                            COS OHM LAUNCH&emsp;
                        </h2>
                        <hr width="3" size="50"/>
                        <h2 style={{fontSize: '20px',fontWeight: '800',textAlign: 'start'}}>
                                &emsp;2022 Q1
                        </h2>
                    </div>
                    <h3>Stay Tuned</h3>
                  <div className='bottom-space' />
      </div>
  );
}