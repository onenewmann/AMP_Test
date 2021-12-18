import React from 'react';

export function Partners() {
  return (
      <div className='container'>
        <p className='bottom-space-xsm' />
        <div to='' className='row'>
            <div className='partner__container-card'>
                <img src='images/web/3dmeta_logo.png'  width="225px" alt=''  />
            </div>
            <div className='partner__container-card'>
                <img src='images/web/blockchained_logo.png'  width="225px" alt=''  />
            </div>
            <div className='partner__container-card'>
                <img src='images/web/artecture_logo.png'  width="225px" alt=''  />
            </div>
        </div>
        <p className='bottom-space-sm' />
      </div>
  );
}