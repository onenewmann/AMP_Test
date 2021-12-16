
import React from 'react';

export function Tokenomics() {

  return (
    
    <div className="container">
        <section id="roadmap">
            <div className="row">
                <div className='col'>
                    <div className="top-line">
                        THE PLOT
                    </div>
                    <h3 style={{fontSize: '15px', textAlign: 'justify'}}>Drought, dropped oxygen levels and crop disease made Earth no longer a suitable home.
                    Earth's civilization starts to regress into a failing society, humanity is facing extinction.
                    Our only way out is up.An unknown inteligence opened up a wormhole in our near approximity.
                    A space-time bridge leading to distant galaxies - our last chance to find a habitable exoplanet.
                    A flock of human embryos called the cosmosapiens are sent on a exploratory mission through the wormhole in search of a new home.
                    </h3>
                    <h3 style={{fontSize: '15px', textAlign: 'justify'}}>
                    Mint one of the Cosmosapien portrait to find out where you will begin your new cosmosapien civilization.
                    </h3>
                </div>
                <div className="col">
                    <div className="home__hero-img-wrapper">
                        <img src="images/upsidedown.gif" width="300px" alt="" className="home__hero-img" />
                    </div>
                </div>
            </div>
        </section>
        <p className="bottom-space" />
    </div>
  );
}