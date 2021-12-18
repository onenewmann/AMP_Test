
import React, { useState, useEffect } from 'react';




export function Header() {

  return (
      <nav className='nav'>
        <p className="bottom-space-sm" />
        <div className='row' style={{display:'flex'}}>
                  <div className="flux">CO </div>
                  <div className="neon">META </div>
              </div>
          <div className='row' style={{fontSize: '15px', margin: '-5px 0px 0px 0px', opacity:1}}>
              
          </div>
          <p className="bottom-space-xsm" />
          <div className='row'>
            <ul>
                <li><a href="https://twitter.com/">Twitter</a></li>
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