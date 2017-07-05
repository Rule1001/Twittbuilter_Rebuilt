import React from 'react';
import '../style/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="component-App">
        <p>NavBar</p>
        <div className='container'>
          <div className="col-sm-3 col-md-3">
            <p>Profile</p>
            <div >
<p>Trends</p>
            </div>
          </div>

          <div className="col-sm-6 col-md-6">
            <p>TweetBox</p>
            <div>
              <p>TweetList</p>
            </div>
          </div>

          <div className="col-sm-3 col-md-3" >
            <p>Recommends</p>
            <div>
              <p>Footer</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;