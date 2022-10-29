const React = require('react')

class Default extends React.Component {
  render () {
    const { _id, title } = this.props
    return (
      <html>
        <head>
          <link rel='stylesheet' href='/css/app.css' />
          <title>{title}</title>
        </head>
        <body>
          <div className='nav-menu' id='ribbon'>
            <a className='ham-box' tabIndex='1' href='#hamburger'>
              <div />
              <div />
              <div />
            </a>
            <a id='logo' href='/goats'>
              <div id='shadows'>Sport Goats</div>
            </a>
            <div id='login'>Profile</div>
          </div>
          <div className='nav-menu' id='hamburger'>&nbsp;
            <nav>
              <a href='/goats'>Home Page</a><br />
              <a href='/goats/new'>Create a GOAT</a><br />
              <a href='/user/login'>Login</a><br />
              <a href=''>Logout</a> <br />
              <a href='/user/signup'>Sign Up</a>
            </nav>
          </div>

        </body>
        <h1>
          {this.props.title}
        </h1>
        {this.props.children}
      </html>
    )
  }
}

module.exports = Default
