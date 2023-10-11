
function submitData(){
    const name = "Steve"; 
    const email = "steve@steve.com";

    

    const configurationObject = {
        method: 'POST',
        headers: {
          'content-type': "application/json",
          'accept': "application/json",
        },
        body: JSON.stringify({
            "name": name,
            "email": email,
        })
      };
     return fetch('http://localhost:3000/users', configurationObject)
      .then(response => response.json())
      .then((data)=>{
        const newID = document.createElement('p');
        newID.innerHTML = `${data.id}`;
        document.body.appendChild(newID)
    })
    .catch((error)=>{
      document.body.append(error.message);
    })
}

// const name = document.getElementById('Name'); 
// const email = document.getElementById('Email');

// const user = {
//     "name": name,
//     "email": email
// }

// const configUser = {
//     method: 'POST',
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify(user)
// }
// const body = document.createElement('body');

// return fetch('http://localhost:3000/users', configUser)
//     .then((res) => {
//         return res.json()
//     })
//     .then((data)=>{
//         const newID = document.createElement('p');
//         newID.textContent = `${data.id}`;
//             body.appendChild(newID);
//     }) 
//     .catch((error)=>{
//         body.append(error.message);
//     })
// }
