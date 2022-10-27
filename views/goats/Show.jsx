
const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
            const { image, postLikes, postDislikes, backgroundImage, name, sport, trait, nameOfPoster, description, comments, _id} = this.props.goat
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
                  <div>Likes: {postLikes}</div>
                  <div>Dislikes: {postDislikes}</div>
                  <form action={`/goats/${_id}/edit`}>
                    <input type='submit' value={`Edit Post`} />
                  </form>
                  <form method='POST' action={`/goats/${_id}?_method=DELETE`}>
                    <input type='submit' value={`Delete ${name}`} />
                  </form>
                  <input type="checkbox" name="like" id="" placeholder='like'/>
                  <input type="number" name="like" id="" />

                  <input type="checkbox" name="dislike" id="" placeholder='dislike'/>
                  <input type="number" name="dislike" id="" />
                </div>
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
                            Add a comment <br />
                            Your Name: <input type='text' name='commentName' />
                            Comment: <input type='text' name='commentBody' />
                            <input type='submit' value='submit' /><br />
                            
                            
                          </form>
              </Default>
    )
  }
}

module.exports = Show
