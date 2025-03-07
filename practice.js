//1st promise
const promiseOne = new Promise((resolve, reject) => {
  //Do an async task(DB calls, network calls)

  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});
promiseOne.then(() => {
  console.log("promise consumed");
});

//2nd promise
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("2nd settime out");
    resolve();
  }, 1000);
}).then(() => {
  console.log("async 2 resolved");
});

//3rd promise
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "chai", email: "example@example.com" }, 1000);
  });
});
promiseThree.then((user) => {
  console.log(user);
  console.log(user.username);
});

//4th promise
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "username", password: "password" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  }).finally(()=> {
    console.log("finally executed")
  })

//   5th promise
  const promiseFive = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        let error = true 
        if(!error){
            resolve({name: "Amruth", password:"123"
            })
        } else {
            reject("Error encountered ")
        }
    })
  }, 1000)
async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    } catch(error)
    {
        console.log(error)
    }
}
consumePromiseFive()

async function getAllUsers(){
    try{
        const response = await fetch('https://dummyjson.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error){
        console.log("Error 1234")
    }
}
getAllUsers()

fetch('https://dummyjson.com/users').then((response)=> {
   return response.json()
}).then((data)=> {
    console.log(data)
}).catch((error)=> {
    console.log("error handled ")
})