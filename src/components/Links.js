import React from 'react';
import {NavLink} from 'react-router-dom';
import pizzaSrc from '../assets/za.png';
import newsSrc from '../assets/news.png';
import randomSrc from '../assets/random.png';
import driftLogoSrc from '../assets/logo.png';

const Links = () => (
  <nav>
    <NavLink to="/random">
      <img className="nav-icon" src={randomSrc} alt="za" />
    </NavLink>
    <NavLink to="/news">
      <img className="nav-icon" src={newsSrc} alt="news" />
    </NavLink>
    <NavLink to="/">
      <img
        className="nav-title"
        src={`/images/piap${Math.floor(Math.random() * 9) + 1}.png`}
        alt="title"
      />
    </NavLink>
    <NavLink replace to="/about">
      <img className="nav-icon" src={pizzaSrc} alt="randomSrc" />
    </NavLink>
    <NavLink replace to="/work">
      <img className="nav-icon" src={driftLogoSrc} alt="drift logo" />
    </NavLink>
  </nav>
);

export default Links;
