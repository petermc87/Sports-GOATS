require('dotenv').config()
const db = require('./db')
const Goat = require('./goat.js')

db.on('open', () => {
  const starterGoats = [
    {
      image: 'test.jpg',
      backgroundImage: 'test.jpg',
      name: 'peter the great',
      trait: 'fantastic physique',
      description: 'the greatest soccer player of all time by a long shot. In fact, thats what this player is known for, epic long shots of the ball',
      nameOfPoster: 'jack in the box',
      comments: [{
        commentName: 'Johnny the Maestro',
        commentBody: 'I would tend to agree with this statement, simple FACTS!',
        like: 40,
        dislike: 22
      }]
    },
    {
      image: 'test.jpg',
      backgroundImage: 'test.jpg',
      name: 'cristy ronaldo',
      trait: 'unbelievable athleticism',
      description: 'Really really good player when hes not 37 and crying about being on the bench',
      nameOfPoster: 'Ronnie the man',
      comments: [{
        commentName: 'A big RON fan',
        commentBody: 'RON is the GOAT, FACT!!',
        like: 5334,
        dislike: 1002
      }]
    }
  ]

  Goat.deleteMany({}) // <-- empties the database
    .then(() => {
      Goat.create(starterGoats)
        .then((createdGoats) => {
          console.log('all the created GOATS: ', createdGoats)
          db.close()
        })
        .catch((error) => {
          console.log(error)
          db.close()
        })
    })
    .catch((error) => {
      console.log(error)
      db.close()
    })
})
