const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
  render () {
    console.log(this.props.username)
    return (
      <Default id='container' title='Post your GOAT here!'>
        <div className='form'>
          <form className='new-form' action='/goats' method='POST'>
            <div className='input-container'>
              <div className='text-field'>Who is your GOAT:
                <div className='input-field'><input type='text' name='name' placeholder='GOAT name here' />
                </div>
              </div>
            </div>
            <div className='input-container'>
              <div className='text-field'>Image:
                <div className='input-field'><input type='text' name='image' placeholder='Paste image URL here' />
                </div>
              </div>
            </div>
            <div className='input-container'>
              <div className='text-field'>Background Image:
                <div className='input-field'><input type='text' name='backgroundImage' placeholder='Paste background image URL here' />
                </div>
              </div>
            </div>
            <div className='input-container'>
              <div className='text-field'>Sport:
                <div className='input-field'>
                  <input type='text' name='sport' placeholder='What sport does your GOAT play?' />
                </div>
              </div>
            </div>
            <div className='input-container'>
              <div className='text-field'>Trait:
                <div className='input-field'>
                  <input type='text' name='trait' placeholder='What is there most difining trait' />
                </div>
              </div>
            </div>
            <div className='input-container' id='textarea-container'>
              <div className='text-field'>A Synopsis of your GOAT:
                <div className='input-field' id='text-area'>
                  <textarea name='description' placeholder='Why in the world is this person a GOAT. I mean, do they even know how to GOAT? How would they fare on the Scottish highlands?' /><br />
                </div>
              </div>
            </div>
            <input type='submit' name='' value='Create GOAT' />

          </form>
        </div>
      </Default>
    )
  }
}

module.exports = New
