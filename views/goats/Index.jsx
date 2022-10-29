const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
  render () {
    const { goats } = this.props
    return (
      <Default title='🐐GOATS Home Page🐐'>
        <div className='container'>
          <ul>
            {
                            goats.map((goat) => {
                              const { image, backgroundImage, name, description } = goat
                              return (
                                <div className='main-page' key={goat._id}>

                                  <br />

                                  <div className='post'>
                                    <a className='hyper' href={`/goats/${goat._id}`}>
                                      {name}
                                    </a>
                                    <div id='background-image'>
                                      <img src={backgroundImage} alt='' />
                                      <div id='profile-image'>
                                        <img src={image} alt='' />
                                      </div>
                                    </div>
                                    <p><h2>GOAT Synposis</h2>
                                      {description}
                                    </p>
                                  </div>
                                </div>

                              )
                            })
                        }

          </ul>

        </div>
      </Default>
    )
  }
}

module.exports = Index
