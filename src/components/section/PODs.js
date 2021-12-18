import React from 'react';
import { Partners } from './sub/partners';

export function PODs() {
  return (
      <div className='container'>
          <p className="bottom-space" />
            <div className="title">
                <div className='cool-text'>METAVERSE</div>
            </div>
            <div className="row">
                <div className='col' style={{marginTop:'100px', marginLeft:'0px', display:'block'}}>
                    <div className="game-card">
                        <img src="images/VR/render.gif" alt="City" className="game-image" />
                        <div className="game-text">
                            OWN
                        </div>
                    </div>
                    <div className="game-card">
                        <img src="images/VR/VR.jpg" alt="City" className="game-image" />
                        <div className="game-text">
                            SHARE
                        </div>
                    </div>
                    <div className="game-card">
                        <img src="images/VR/dot_world.gif" alt="City" className="game-image" />
                        <div className="game-text">
                            EXPLORE
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <p className='bottom-space' />
                    <h3 className="neon" style={{fontSize: '25px', fontFamily: 'neon', textAlign:'end'}}>
                        DAO Estates
                    </h3>
                    <h3 style={{fontSize: '15px', textAlign: 'justify'}}>
                        Spaces are not stagnant, they modify and adapt with time. We live in a place in time where the dialog is turning into a monologue,
                        people are loosing access or the feeling of local scale community. There are somethings we can't change but we can adapt as well.
                        Our aim is to reestablish common spaces in collective habbitats.
                        Our designers began adapting their real-life solutions into the digital space of Virtual Reality and
                        build common spaces for all cosmosapien investors.
                        Exclusive worlds as well as custom private spaces available 
                        to all Cosmosapiens as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS,
                        forever yours to owns and use or share.
                        
                    </h3>
                    <p className="bottom-space-sm" />
                    <h3 style={{fontSize: '15px', textAlign: 'justify'}}>
                        Connect with one our design team members if you're interested in developing a custom
                        designed space for yourself. 
                    </h3>
                </div>
            </div>
            <p className="bottom-space-md" />
            <div className="title">
                <div className='cool-text'>THEGAME</div>
            </div>
            <div className="row">
                
                <div className='col'>
                <p className='bottom-space-md' />
                    <h3 className="neon" style={{fontSize: '25px', fontFamily: 'neon', textAlign:'start'}}>
                        COSMOSAPIENS
                    </h3>
                    <h3 style={{fontSize: '15px', textAlign: 'justify'}}>
                        Cosmosapiens Game is a play-to-earn multiplayer gaming world brining players together to earn, 
                        mint and exchange on the blockchain based economies via the metaverse. We are the settlers of new worlds. 
                        Explore conquer and colonize planets across the galaxies, claim new worlds in the galaxy and mint them 
                        as your own NFT estates on the blockchain. 
                        <br />
                        <br />Your Cosmosapien avatar starts as sole space traveller in 
                        search of other habitable planets. The Cosmosapien Metaverse is filled with various items, use them 
                        wisely to gain an advantage over your opponents. Start or join new alliances along your travel path 
                        and battle other colonies for resourceful exoplanet if you like a little risk.
                        <br /><br /><br />
                        Vote in the DAO. Community collaborative development. Control the narrative, vote for new worlds, and decide on feature proposals. Connect with our development team to get involved.

                    </h3>
                </div>
                <div className='col' style={{marginTop:'100px', marginLeft:'0px', display:'block'}}>
                    <div className="game-card">
                        <img src="images/game/1.gif" alt="City" className="game-image" />
                        <div className="game-text">
                            VENI
                        </div>
                    </div>
                    <div className="game-card">
                        <img src="images/game/2.gif" alt="City" className="game-image" />
                        <div className="game-text">
                            VIDI
                        </div>
                    </div>
                    <div className="game-card">
                        <img src="images/game/space_exploration.gif" alt="City" className="game-image" />
                        <div className="game-text">
                            VICI
                        </div>
                    </div>
                </div>
            </div>
      </div>
  );
}