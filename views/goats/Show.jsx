
const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const { image, postLikes, backgroundImage, name, sport, trait, nameOfPoster, description, comments, _id } = this.props.goat
    const capName = name[0].toUpperCase() + name.substring(1)

    return (
      <Default title={`${capName} 🐐GOAT🐐`} goat={this.props.goat}>

        <div className='post'>
          <div className='background'>
            <div><span>Post by:</span> {nameOfPoster}</div><br />
            <div><span>Sport:</span> {sport}</div><br />
            <div><span>Trait:</span> {trait}</div><br />
          </div>
            <div className='background'><span>Synopsis: <br /> <br /></span>{description}</div><br />
          <div id='show-back'><img src={backgroundImage} alt='' />
            <div id='show-img'><img src={image} alt='' /></div>
          </div>

          <form action={`/goats/${_id}/edit`}>
            <input type='submit' value='Edit Post' />
          </form>
          <form method='POST' action={`/goats/${_id}?_method=DELETE`}>
            <input type='submit' value={`Delete ${name}`} />
          </form>

        </div>
        <div className='edit-delete'>
          <h3>Likes & Dislikes</h3>
          {
                          postLikes.length
                            ? postLikes.map((like) => {
                              return (
                                <div className = 'comments' key={like._id}>
                                  <p><span>Likes: </span>{like.likes}</p>
                                  <p><span>Dislikes: </span> {like.dislikes}</p>
                                </div>
                              )
                            })
                            : ''
                      }

          {/* maybe change the method to update and have a checkbox instead of a number. */}
          <form method='POST' action={`/goats/${_id}/postLikes?_method=PUT`}>
            <br />
            like: <input type='number' name='likes' />
            dislike: <input type='number' name='dislikes' />
            <input type='submit' value='submit' /><br />
          </form>

        </div>
        <div className='edit-delete'>
          <h3>Previous Comments</h3>
          {
                            comments.length
                              ? comments.map((comment) => {
                              // console.log(comment)

                                return (
                                  <div className='comments' key={comment._id}>
                                    <p><span>Name:</span> {comment.commentName}</p>
                                    <p><span>Comment:</span> {comment.commentBody}</p>
                                    <form method='POST' action={`/goats/${_id}/${comment._id}?_method=DELETE`}>
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
