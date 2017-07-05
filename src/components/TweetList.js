import React from 'react';
import '../style/TweetList.css';
import PropTypes from 'prop-types';
const _ = require('underscore');

import axios from 'axios';

const API_URL = 'https://northwitter-api-jinwmdmaba.now.sh';

class TweetsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }
  componentDidMount() {
    axios.get(`${API_URL}/tweets`)
      .then((res) => {
        let tweets = _.flatten(res.data.tweets).sort(function (a, b) {
          return new Date(b.created_at) - new Date(a.created_at);
        });
        this.setState({

          tweets: tweets
        });
      })
      .catch(console.log);
  }


  render() {
    return (
      <div className="component-Tweets">
        <div className="panel-body">
          {
            this.state.tweets.lenght === 0 ?
              <p>Loading....</p> :

              this.state.tweets.sort(this.state.tweets.created_at).map((tweet, i) => (

                < Tweet
                  key={i}
                  name={tweet.user.name}
                  handle={tweet.user.screen_name}
                  text={tweet.text}
                  image={tweet.user.profile_image_url}
                />
              ))
          }
        </div>
      </div>
    );
  }
}

const Tweet = (props) => (
  <div className="component-tweet">
    <img src={props.image} alt="Smiley face" />
    <span>{props.name}</span>
    <span>    @{props.handle}</span>
    <span>{props.text}</span>
    {/*<span>{props.icons}</span>*/}
  </div>

);

Tweet.propTypes = {
  name: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  // icons: PropTypes.string.isRequired
};



export default TweetsList;