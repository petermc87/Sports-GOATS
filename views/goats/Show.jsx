
const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const { image, postLikes, backgroundImage, name, sport, trait, nameOfPoster, description, comments, _id } = this.props.goat
    const capName = name[0].toUpperCase() + name.substring(1)

    return (
      <Default title={`${capName} 🐐GOAT🐐`} goat={this.props.goat}>
        
       
        <div className='post'>

          <div>Post by: {nameOfPoster}</div><br />
          <div>Sport: {sport}</div><br />
          <div>Trait: {trait}</div><br />
          <div>{description}</div><br />

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
                                  <div className='comments'key={comment._id}>

                                    <p>Name: {comment.commentName}</p>
                                    <p>Comment: {comment.commentBody}</p>
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
