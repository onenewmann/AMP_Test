import React from 'react';

export function Team() {



  return (
      <div className='container'>
          <p className="bottom-space-md" />
            <div className='team__wrapper'>
            <h3 className="neon" style={{fontSize: '25px', fontFamily: 'neon', marginBottom: '-10px'}}>
                          THE TEAM
            </h3>
                <div className='team__container'>
                <div to='' className='team__container-card'>
                    <div className='team__container-cardInfo'>
                      <div className="team__container-features">
                      <img src='images/example.gif' alt='' width="125px" className='home__hero-img' />
                      <h3></h3>
                      <p style={{textAlign: 'center'}}>Marketing Team</p>
                      </div>
                    </div>
                  </div>
                  <div to='' className='team__container-card'>
                    <div className='team__container-cardInfo'>
                      <div className="team__container-features">
                        <img src='images/example.gif' alt='' width="125px" className='home__hero-img' />
                        <h3></h3>
                        <p>Dev Team</p>
                      </div>
 
                    </div>
                  </div>
                  <div to='' className='team__container-card'>
                    <div className='team__container-cardInfo'>
                      <div className="team__container-features">
                      <img src='images/example.gif' alt='' width="125px" className='home__hero-img' />
                      <h3></h3>
                      <p style={{textAlign: 'center'}}>Community Team</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='team__container'>

              </div>
      </div>
      
      
  );
}