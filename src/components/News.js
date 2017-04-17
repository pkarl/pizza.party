import React from 'react';
import {Timeline} from 'react-twitter-widgets';

const News = () => (
  <div className="timeline">
    <p style={{textAlign: 'center'}}>
      <i>
        These are my little tweet noises. I'm also on
        {' '}
        <a href="https://www.instagram.com/steyblind/">Instagram</a>
        .
      </i>
    </p>
    <Timeline
      dataSource={{
        sourceType: 'profile',
        screenName: 'steyblind',
      }}
      options={{
        username: 'steyblind',
      }}
      onLoad={() => console.log('Timeline is loaded!')}
    />
  </div>
);

export default News;
