const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
  render () {
    return (
      <Default id='container' title='Post your GOAT here!'>

        <form className='new-form' action='/goats' method='POST'>
          Who is your GOAT: <input type='text' name='name' placeholder='GOAT name here' /><br />
          Image: <input type='text' name='image' placeholder='Paste image URL here' /><br />
          Background Image: <input type='text' name='backgroundImage' placeholder='Paste background image URL here' /><br />
          Sport: <input type='text' name='sport' placeholder='What sport does your GOAT play?' /><br />
          Your Name: <input type='text' name='nameOfPoster' placeholder='Type your name here' /><br />
          Trait: <input type='text' name='trait' placeholder='Type your name here' /><br />
          A Synopsis of your GOAT: <textarea name='description' placeholder='Why in the world is this person a GOAT. I mean, do they even know how to GOAT? How would they fare on the Scottish highlands?' /><br />
          <input type='submit' name='' value='Create GOAT' />
        </form>
      </Default>
    )
  }
}

module.exports = New
