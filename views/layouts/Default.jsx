const React = require('react')

class Default extends React.Component {
  render () {
    const { title } = this.props
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
              <div id='shadows'>Sports Goats</div>
            </a>
            <div id='login'>{this.props.username}</div>
          </div>
          <div className='nav-menu' id='hamburger'>&nbsp;
            <nav>
              <a href='/goats'>Home Page</a><br />
              {/* <a href='/usergoats'>Your Goats</a><br /> */}
              <a href='/goats/new'>Create a GOAT</a><br />
              <a href='/user/logout'>Logout</a> <br />
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
