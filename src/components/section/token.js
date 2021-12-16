import React from 'react';
import { OHM } from './OHM';
import { TokenBanners } from './sub/token_banners';

export const data = {
  labels: ['PancakeSwap', 'Dev', 'Marketing', 'Advisors'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function Token() {
    return (
        
        <div className='container'>
        <p className="bottom-space-sm" />
          <div className='token__section'>
            <div className='token__wrapper'>
              <div className="token__container-card">
                <div className="token__container-cardInfo" style={{height:'200px'}}>
                    <div className='row' style={{display:'flex', flexFlow:'column'}}>
                        <div className="flux" style={{textAlign:'center'}}>THE </div>
                        <div className="neon" style={{textAlign:'center'}}>TOKEN </div>
                    </div>
                    <a href={'/'}>
                  <h3 style={{fontSize: '15px', margin: '25px 0px 0px 0px', opacity:1}}>0x1684324816534replace</h3>
                </a>
                </div>
                
                <div className="token__container" style={{flexFlow: 'row', width: '300px', marginTop:'-10px'}}>
                    <h2 style={{display: 'flex',fontSize: '20px', fontWeight: '900', textAlign: 'end'}}>
                        LOW TAX&emsp;
                    </h2>
                    <hr width="3" size="50"/>
                    <h2 style={{fontSize: '35px',fontWeight: '100',textAlign: 'start'}}>
                            &emsp;REWARDS
                    </h2>
                  </div>
                  <div className="token__container">
                    <div className='token__container-section'>
                      <h2 style={{display: 'flex',fontSize: '14px', textAlign: 'justify'}}>
                        Cosmosapiens are on a mission: bring DeFi to the masses.  
                        Decentralized finance, which utilizes technologies to remove
                        intermediaries, middlemen, and banks from financial markets, 
                        are complicated systems to enter into.

                        Cosmosapiens’s primary goal is to make it simple to 
                        start earning passive income without having to understand the backend of the DeFi world.

                        The first step towards achieving that goal was 
                        to create the Cosmosapiens token.
                        <br />
                        <br /> It is an innovative Reflection Token: 
                        one that pays dividends in an already established token instead of our own. 
                        Our dividends are paid out in $Cake, the premier BSC Swap on the market and 
                        a company whose tokens are getting more valuable all the time.
                        The next step is the release of our 3-click App.  

                        The rate of Crypto adoption in the world is growing, 
                        but the percentage of the world’s population who are users is still very small.

                        We have developed an app that is clean, clear and simple to use. 
                        It will revolutionize the DeFi space and foster adoption of crypto in a safe, secure, 
                        easy and rewarding way.  

                        Once the App is released, we will continue to add features to 
                        further empower people and give them control over their financial situations.
                        </h2>
                    </div>
                  </div>
                  <div className='token__container'>
                    <div className='info__container-card'>
                      <div className='info__container-cardInfo'>
                      <h1>3%</h1>
                        <h2 style={{marginTop:'-25px'}}>Rewards</h2>
                        <p style={{textAlign:'center'}} >3% of every buy/sell is taken and auto redistributed to all holders. 
                          Hold $Cosmosapiens tokens, earn BNB. 
                          A Minimum of 200,000 tokens is required in order to receive rewards.</p>
                      </div>
                    </div>
                    <div className='info__container-card'>
                      <div className='info__container-cardInfo'>
                      <h1>3%</h1>
                        <h2 style={{marginTop:'-25px'}}>Pool</h2>
                        <p style={{textAlign:'center'}} >Pool tax is split into two portions:
                        <br />2% of every transaction is allocated to maintaining a stable liquidity pool
                          keeping your investments sustainable.
                          <br /> 1% of every transaction is allocated to Cosmosapiens OHM Treasury.</p>
                      </div>
                    </div>
                    <div className='info__container-card'>
                      <div className='info__container-cardInfo'>
                        <h1>4%</h1>
                        <h2 style={{marginTop:'-25px'}}>Marketing</h2>
                        <p style={{textAlign:'center'}} >4% of every transaction is allocated to Marketing and Development in BNB (swapped to BNB in real-time to avoid dumps).  
                          This allows us to fuel our most ambitious projects in service of further rewarding our community, team doesn't sell tokens to fund the project</p>
                      </div>
                    </div>
                    </div>
                    <p className='bottom-space-sm' />
                    <div className='token__container'>
                      <div className='info__banner-card'>
                        <div className='info__banner-cardInfo'>
                        <h2>Sell Fee</h2>
                          <p style={{textAlign:'center', margin:'-10px 0 10px 0'}} >An extra 5% fee is applied to all sells at launch of $Cosmosapiens Token 
                          and deacreased by 1% each month until droped and set at 1%.
                          This will allow us to reduce swing-trading and break whales’ control.</p>
                        </div>
                      </div>
                    </div>
                    <p className='bottom-space-sm' />
                    <TokenBanners />
                <p className="bottom-space-sm" />
                <div className='row'>
                    <div className='col'>
                        <div className='btn'>
                        Purchase token
                        </div>
                    </div>
                    <div className='col'>
                        <div className='btn'>
                        JOIN OUR DISCORD
                        </div>
                    </div>
                  </div>
                  <div className='bottom-space-md' />
                <div className="token__container" style={{flexFlow: 'row', width: '300px', marginTop:'-10px'}}>
                    <h2 style={{display: 'flex',fontSize: '20px', fontWeight: '900', textAlign: 'end'}}>
                        THINGS YOU NEED TO KNOW
                    </h2>
                  </div>
                <div className='row'>
                  <div class="tree">
                    <ul>
                      <li>
                        <a href="#">
                          <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                          COSMOSAPIENS
                          <br /> Tokenomic
                          <br /> Tax
                          </h3>
                        </a>
                        <ul>
                          <li>
                            <a href="#">
                              <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                              3% 
                              <br />Reflection
                              </h3>
                            </a>  
                            <ul>
                              <li>
                              <a href="#">
                                <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                               $Cosmosapiens Token
                                <br />Holders
                                </h3>
                              </a>  
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">
                              <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                              3% 
                              <br />Pool
                              </h3>
                            </a>  
                            <ul>
                              <li>
                                <a href="#">
                                  <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                                  2% 
                                  <br />Pancakeswap
                                  <br /> Exchange
                                  </h3>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                                  1% 
                                  <br />OHM Protocol 
                                  <br />Reserve
                                  </h3>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">
                              <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                              3% 
                              <br />Marketing
                              </h3>
                            </a>  
                            <ul>
                            <li>
                                <a href="#">
                                  <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                                  2% 
                                  <br />Promotions
                                  <br /> Marketing
                                  </h3>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                                  1% 
                                  <br />Development
                                  <br />Reserve
                                  </h3>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>                
                  <div className='bottom-space-xsm' />
                
                <div className='bottom-space-sm' />
                  <h2 style={{display: 'flex',fontSize: '15px', textAlign: 'center'}}>
                          1% of the Comosapiens Token 
                          <br className='mobile-break' />tax directly goes into the 
                          <br className='mobile-break' />Cosmosapien OHM Protocol Treasury. 
                  </h2>
                <div className='bottom-space-xxxsm' />
                <div className='row'>
                    <div className="token__container" style={{flexFlow: 'row', width: '300px', marginTop:'-10px'}}>
                        <h2 style={{display: 'flex',fontSize: '56px', fontWeight: '900', textAlign: 'end'}}>
                            1%&emsp;
                        </h2>
                        <hr width="3" size="50"/>
                        <h2 style={{fontSize: '30px',fontWeight: '50',textAlign: 'start'}}>
                                &emsp;RESERVE
                        </h2>
                    </div>
                </div>
                <div className='bottom-space-sm' />
                  <div className='row' style={{height:'250px'}}>
                    <div className='col'>
                      <div class="drop"></div>
                    </div>
                  </div>
                  <div className='bottom-space-sm' />
                  <OHM />
              </div>
            </div>
          </div>
        </div>
    );
}