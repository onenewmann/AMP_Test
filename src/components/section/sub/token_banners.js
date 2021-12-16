import React from 'react';

export function TokenBanners() {
  return (
      <div className='container'>
          <div className='row'>
                <div to='' className='banner__wrapper'>
                  <div to='' className='banner__container'>
                     <div className='banner__container-card'>
                        <a href='https://pancakeswap.finance/'>
                          <img src='images/web/pancakeswap.png'  width="125px" alt=''  />
                        </a>
                      </div>
                      <div className='banner__container-card'>
                        <a href='https://bscscan.com/address/'>
                          <img src='images/web/bsc.png'  width="125px" alt=''  />
                        </a>
                      </div>
                      <div className='banner__container-card'>
                        <a href='https://bscscan.com/token/'>
                          <img src='images/web/bsc1.png'  width="125px" alt=''  />
                        </a>
                      </div>

                      <div className='banner__container-card'>
                        <a href='https://www.dextools.io/app/bsc/pair-explorer/'>
                          <img src='images/web/dext.png'  width="125px" alt=''  />
                        </a>
                      </div>

                      <div className='banner__container-card'>
                        <a href='https://poocoin.app/tokens/'>
                          <img src='images/web/poocoin.png'  width="125px" alt=''  />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
      </div>
  );
}