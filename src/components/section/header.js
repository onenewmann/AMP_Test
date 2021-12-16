
import React, { useState, useEffect } from 'react';




export function Header() {

  return (
      <nav className='nav'>
        <p className="bottom-space-sm" />
        <div className='row' style={{display:'flex'}}>
                  <div className="flux">Cosmo </div>
                  <div className="neon">POD </div>
                  <div className="flux">.DAO </div>
              </div>
          <div className='row' style={{fontSize: '15px', margin: '-5px 0px 0px 0px', opacity:1}}>
              <h3>“the last people to starve
                <br className='mobile-break' /> will be the first to suffocate”
              </h3>
          </div>
          <p className="bottom-space-xsm" />
          <div className='row'>
            <ul>
                <li><a href="https://twitter.com/">White</a></li>
                <li><a href="https://codepen.io/">Discord</a></li>
                <li><a href="https://dribbble.com/">Telegram</a></li>
                <li><a href="https://github.com/">Github</a></li>
                <li>
                    <p style={{fontSize: '15px', margin: '-5px 0px 0px 0px', opacity:1}}>👋</p>
                </li>
            </ul>
          </div>
        <p className="bottom-space-sm" />
      </nav>
  );
}