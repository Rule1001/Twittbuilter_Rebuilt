import React from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

const API_URL = 'https://northwitter-api-jinwmdmaba.now.sh';

class Trends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trends: []
    };
  }

  componentDidMount () {
    axios.get(`${API_URL}/trends`)
      .then((res) => {
        let trends = res.data.trends;
        trends.sort(function (a, b) {
          return (b.tweet_volume) - (a.tweet_volume);
        });
        this.setState({
          trends: trends
        });
      })
      .catch(console.log);
  }
  render () {
    return (
      <div className="component-Trends panel" >
        <div className="panel-body">
          <h2 className="panel-title">
            Trends
          </h2>
          {
            this.state.trends.length === 0
              ? <p>Loading...</p> :
              this.state.trends.slice(0, 10).map((trend, i) => (
                <Trend
                  key={i}
                  handle={trend.name}
                  volume={trend.tweet_volume}
                  url={trend.url}
                />
              ))
          }
        </div>
      </div >
    );
  }
}

const Trend = (props) => (
  <div className="component-Trend">
    <a href={props.url}>{props.handle}</a>
    <p>{props.volume}</p>
  </div>
);


Trends.propTypes = {
  handle: PropTypes.string.isRequired,
  volume: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};


export default Trends;
