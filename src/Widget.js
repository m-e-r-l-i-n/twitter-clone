import {Search} from '@material-ui/icons';
import React from 'react';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';
import './Widget.css';

function Widgets() 
{
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1353626520070270976"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="twitter"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://twitter.com"}
          options={{ text: "anything"}}
        />
      </div>
    </div>
  );
}

export default Widgets;
