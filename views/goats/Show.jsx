const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const { image, likes, backgroundImage, name, sport, trait, description, comments, _id, disLikes, username } = this.props.goat
    const capName = name[0].toUpperCase() + name.substring(1)

    return (
      <Default title={`${capName} 🐐GOAT🐐`} goat={this.props.goat} username={this.props.loggedIn.username}>

        <div className='post'>
          <div className='background'>
            <div><span>Post by:</span> {username}</div><br />
            <div><span>Sport:</span> {sport}</div><br />
            <div><span>Trait:</span> {trait}</div><br />
          </div>
          <div className='background'><span>Synopsis: <br /> <br /></span>{description}</div><br />
          <div id='show-back'><img src={backgroundImage} alt='' />
            <div id='show-img'><img src={image} alt='' /></div>
          </div>
          <div className='button-container'>
            <form action={`/goats/${_id}/edit`}>
              <input type='submit' value='Edit Post' />
            </form>
            <form method='POST' action={`/goats/${_id}?_method=DELETE`}>
              <input type='submit' value={`Delete ${name}`} />
            </form>
          </div>

        </div>
        <div className='edit-delete'>
          <div className='comments'>
            <div className='button-container'>
              <p><span>Likes: </span>{likes}</p>
              <p><span>Dislikes: </span> {disLikes}</p>
            </div>
            <div className='button-container'>
              <form method='POST' action={`/goats/${_id}/postLikes?_method=PUT`}>
                <input type='submit' value='Like' />
              </form>
              <form method='POST' action={`/goats/${_id}/postDisLikes?_method=PUT`}>
                <input type='submit' value='Dislike' />
              </form>
            </div>
          </div>
        </div>
        <div className='edit-delete'>
          <h3>Previous Comments</h3>
          {
                            comments.length
                              ? comments.map((comment) => {
                                return (
                                  <div className='comments' key={comment._id}>
                                    <p><span>Name:</span> {comment.commentName}</p>
                                    <p><span>Comment:</span> {comment.commentBody}</p>
                                    <form method='POST' action={`/goats/${_id}/comments/${comment._id}?_method=DELETE`}>
                                      <input type='submit' value='Delete' />
                                    </form>
                                  </div>
                                )
                              })
                              : ''
                        }
          <form method='POST' action={`/goats/${_id}/comments?_method=PUT`}>
            <h3>Add a comment</h3> <br />
            Your Name: <input type='text' name='commentName' />
            Comment: <input type='text' name='commentBody' />
            <input type='submit' value='submit' /><br />
          </form>
        </div>

      </Default>
    )
  }
}

module.exports = Show

// <form method='POST' action={`/goats/${_id}/postLikes?_method=PUT`}>
// <input type='submit' value='Like' />
// </form>

// <form method='POST' action={`/goats/${_id}?_method=DELETE`}>
// <input type='submit' value='Dislike' />
// </form>
