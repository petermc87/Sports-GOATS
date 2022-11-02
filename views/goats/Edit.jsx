const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
  render () {
    const { image, backgroundImage, name, sport, trait, nameOfPoster, description, _id } = this.props.goat
    return (
      <Default id='container' title='Post your GOAT here!'>
        <div className='form'>
          <form className='new-form' action={`/goats/${_id}?_method=PUT`} method='POST'>
            Who is your GOAT: <input type='text' name='name' defaultValue={name} /><br />
            Image: <input type='text' name='image' defaultValue={image} /><br />
            Background Image: <input type='text' name='backgroundImage' defaultValue={backgroundImage} /><br />
            Sport: <input type='text' name='sport' defaultValue={sport} /><br />
            Your Name: <input type='text' name='nameOfPoster' defaultValue={nameOfPoster} /><br />
            Trait: <input type='text' name='trait' defaultValue={trait} /><br />
            A Synopsis of your GOAT: <textarea name='description' defaultValue={description} /><br />
            <input type='submit' name='' value='Edit GOAT' />
          </form>
        </div>
      </Default>
    )
  }
}

module.exports = Edit
