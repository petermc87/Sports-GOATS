const React = require('react')
const Default = require('../layouts/Default')

class LogIn extends React.Component {
  render () {
    return (
      <Default title='Login to Goats Account'>
        <div className='form'>
          <form action='/user/login' method='POST'>
            <fieldset>
              <legend>New User</legend>
              <label>USERNAME: <input type='text' name='username' required /> </label>
              <label>PASSWORD: <input type='password' name='password' required /></label>
              <input type='submit' value='Login Account' />
            </fieldset>
          </form>
        </div>
      </Default>
    )
  }
}

module.exports = LogIn
