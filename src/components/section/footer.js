
import React  from 'react';

export function Footer() {

  return (
<div className='footer'>
    <div className='col'>
        <h2> Stay in touch </h2>
    </div>
    <div className='col'>
        <ul>
            <li><a href="https://twitter.com/julesforrest">Twitter</a></li>
            <li><a href="https://codepen.io/julesforrest">Discord</a></li>
            <li><a href="mailto:julesforrest@gmail.com">Email</a></li>
            <li><a href="https://dribbble.com/julesforrest">Telegram</a></li>
            <li><a href="https://github.com/julesforrest">Github</a></li>
            <li>
                <p>👋</p>
            </li>
        </ul>
    </div>
    <div className='col'>
        <p> © Cosmosapiens. All Rights Reserved.</p>
    </div>
  </div>
  );
}