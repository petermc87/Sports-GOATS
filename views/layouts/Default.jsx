const React = require('react')

class Default extends React.Component {
  render () {
    const { goat, title } = this.props
    return (
      <html>
        <head>
          <link rel='stylesheet' href='/css/app.css' />
          <title>{title}</title>
        </head>
        <body>
          <ribbon>
            <input type='checkbox' className='nav-box' id='nav-checkbox' />
            <label for='nav-checkbox' className='navigation-label'>
              <span>&nbsp;</span>
            </label>
            <logo id='logo'>LOGO</logo>
            <signin>PROFILE</signin>
          </ribbon>
          <hmenu className='nav-background'>&nbsp;
            <nav>
              <a href='/goats'>Home Page</a><br />
              <a href='/goats/new'>Create a GOAT</a><br />
              <a href='/login'>Login</a><br />
              <a href=''>Logout</a> <br />
              <a href='/signup'>Sign Up</a>
            </nav>
          </hmenu>

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
