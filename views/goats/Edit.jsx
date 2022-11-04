const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
  render () {
    const { image, backgroundImage, name, sport, trait, nameOfPoster, description, _id } = this.props.goat
    return (
      <Default id='container' title='Post your GOAT here!' username={ this.props.loggedIn.username}>
        <div className='form'>
          <form className='new-form' action={`/goats/${_id}?_method=PUT`} method='POST'>
          <div className='input-container'>
            <div className='text-field'>Who is your GOAT: 
              <div className = 'input-field'>
                <input type='text' name='name' defaultValue={name} /><br />
              </div>
            </div>
          </div>
          <div className='input-container'>
            <div className='text-field'>Image: 
              <div className = 'input-field'>
                <input type='text' name='image' defaultValue={image} /><br />
              </div>
            </div>
          </div>
          <div className='input-container'>
            <div className='text-field'>Background Image: 
              <div className = 'input-field'>
                <input type='text' name='backgroundImage' defaultValue={backgroundImage} /><br />
              </div>
            </div>
          </div>
          <div className='input-container'>
            <div className='text-field'>Sport:
              <div className = 'input-field'>
                <input type='text' name='sport' defaultValue={sport} /><br />
              </div>
            </div>
          </div> 
          <div className='input-container'>
            <div className='text-field'>Trait:
              <div className = 'input-field'>
                <input type='text' name='trait' defaultValue={trait} /><br />
              </div>
            </div>
          </div>
          <div className='input-container' id='textarea-container'>
            <div className='text-field'>A Synopsis of your GOAT: 
              <div className = 'input-field' id='text-area'>
                <textarea name='description' defaultValue={description} /><br />
              </div>
            </div>
          </div> 
          <input type='submit' name='' value='Edit GOAT' />
          </form>
        </div>
      </Default>
    )
  }
}

module.exports = Edit


