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
          <nav>
            <button id='hamburger' />
            <logo id='logo' />
          </nav>
          <hmenu>
            <a href='/goats'>Home Page</a><br />
            <a href='/goats/new'>Create a GOAT</a><br />
            <a href='/login'>Login</a><br />
            <a href=''>Logout</a>
            <a href='/signup'>Sign Up</a>
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
