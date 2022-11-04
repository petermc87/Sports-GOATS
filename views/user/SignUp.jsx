const React = require('react')
const Default = require('../layouts/Default')

class SignUp extends React.Component {
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
            <div id='shadows'>Sport Goats</div>
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
      <div className='form'>
          <form action='/user/signup' method='POST'>
            <fieldset>
              <legend>New User</legend>
              <label>USERNAME: <input type='text' name='username' required /> </label>
              <label>PASSWORD: <input type='password' name='password' required /></label>
              <input type='submit' value='Create Account' />
            </fieldset>
          </form>
        </div>
    </html>
    )
  }
}

module.exports = SignUp
