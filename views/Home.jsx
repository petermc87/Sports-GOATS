
const React = require('react')
// const Default = require('./layouts/Default.jsx')

class Index extends React.Component {
  render () {
    return (
      <html>
        <head>
          <link rel='stylesheet' href='/css/app.css' />
        </head>
        <body>
          <div className='nav-menu' id='ribbon'>
            <a className='ham-box' tabIndex='1' href='#hamburger'>
              <div />
              <div />
              <div />
            </a>
            <a id='logo' href=''>
              <div id='shadows'>Sports Goats</div>
            </a>
            <div id='login'>{this.props.username}</div>
          </div>
          <div className='nav-menu' id='hamburger'>&nbsp;
            <nav>
              <a href='/user/signup'>Signup</a><br />
              <a href='/user/login'>Login</a><br />
            </nav>
          </div>

        </body>
        <h1>
          Login or Signup!
        </h1>
        <div className='post' id='homepage'>
          <div className='opening-text'>
            <div className='goat-opening'><span class='first-letter' id='g'>G </span><span id='greatest'>reatest</span></div>
            <div className='goat-opening'><span class='first-letter' id='o'>O </span><span id='of'>f</span></div>
            <div className='goat-opening'><span class='first-letter' id='a'>A </span><span id='all'>ll</span></div>
            <div className='goat-opening'><span class='first-letter' id='t'>T </span><span id='time'>ime</span></div>
          </div>
        </div>
      </html>
    )
  }
}

module.exports = Index
