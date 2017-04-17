import React from 'react';

const Home = () => (
  <div>
    <p style={{textAlign: 'center'}}>
      Hi there! My name is Pete and I'm a Technical Leader and the webmaster of peteisa.party.
    </p>
    <ul className="link-list">
      <li>
        Places I've Worked:
        {' '}
        <a href="https://www.ideo.com/">IDEO</a>
        ,
        {' '}
        <a href="https://www.localytics.com/">Localytics</a>
        ,
        {' '}
        <a href="https://www.upstatement.com/">Upstatement</a>
        ,
        {' '}
        <a href="https://bocoup.com/">Bocoup</a>
        , et al.
      </li>
      <li>
        New & Old Stomping Grounds:
        {' '}
        <a href="https://www.boston.gov/">Boston, MA</a>
        ,
        {' '}
        <a href="https://rocwiki.org/">Rochester, NY</a>
        ,
        {' '}
        <a href="https://en.wikipedia.org/wiki/Jersey_Shore">
          Point Pleasant/Manasquan, NJ
        </a>
      </li>
      <li>
        Fav book of the moment:
        {' '}
        <a
          href="https://www.amazon.com/Radical-Candor-Kick-Ass-Without-Humanity/dp/1250103509"
        >
          Radical Candor
        </a>
        , on deck:
        {' '}
        <a
          href="https://www.amazon.com/Managers-Path-Leaders-Navigating-Growth/dp/1491973897/"
        >
          The Manager's Path
        </a>
        {' '}
        by
        {' '}
        <a href="https://twitter.com/skamille">@skamille</a>
      </li>
    </ul>
  </div>
);

export default Home;
