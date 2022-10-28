
const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
            const { image, postLikes, backgroundImage, name, sport, trait, nameOfPoster, description, comments, _id} = this.props.goat
            const capName = name[0].toUpperCase() + name.substring(1)
        
            return (
              <Default title={`${capName} 🐐GOAT🐐`} goat={this.props.goat} >
                <div>
                  <div>Post by: {nameOfPoster}</div>
                  <div>Sport: {sport}</div>
                  <div><img src={image} alt='' /></div>
                  <div><img src={backgroundImage} alt='' /></div>
                  <div>{description}</div>
                  <div>Trait: {trait}</div>
           
                          {
                          postLikes.length
                          ? postLikes.map((like) => {
                            return (
                              <div key={like._id}>
                                <p>Likes: {like.likes}</p>
                                <p>Dislikes: {like.dislikes}</p>
                              </div>
                            )
                          })
                          : ''
                      }
                      {/* maybe change the method to update and have a checkbox instead of a number. */}
                          <form method='POST' action={`/goats/${_id}/postLikes?_method=PUT`}>
                              likes: <input type='number' name='likes' />
                              dislikes: <input type='number' name='dislikes' />
                            <input type='submit' value='submit' /><br />
                          </form>


                  <form action={`/goats/${_id}/edit`}>
                    <input type='submit' value={`Edit Post`} />
                  </form>
                  <form method='POST' action={`/goats/${_id}?_method=DELETE`}>
                    <input type='submit' value={`Delete ${name}`} />
                  </form>
                </div>
                <h2>Previous Comments</h2>
                {
                          comments.length
                          ? comments.map((comment) => {
                            // console.log(comment)
                            return (
                              <div key={comment._id}>

                                <p>Name: {comment.commentName}</p>
                                <p>Comment: {comment.commentBody}</p>
                              </div>
                            )
                          })
                          : ''
                      }
                          <form method='POST' action={`/goats/${_id}/comments?_method=PUT`}>
                            <h2>Add a comment</h2> <br />
                            Your Name: <input type='text' name='commentName' />
                            Comment: <input type='text' name='commentBody' />
                            <input type='submit' value='submit' /><br />
                          </form>
              </Default>
    )
  }
}

module.exports = Show
