const fetch = require('node-fetch')

async function fetchAvatarUrl(userId) {
  const response = await fetch(`https://catappapi.herokuapp.com/users/${userId}`)
  const data = await response.json()
  console.log(data)
  return data.imageUrl

}

//   return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
//     .then(response => response.json())
//     .then(data => {
//       data.imageUrl
//       console.log(data)
//     }
//       )
//     .then()
// }

const result = fetchAvatarUrl(123)
console.log("result + ", result)
