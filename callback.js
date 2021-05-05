


//sending function as an argument is called calback function

//while calling a function ,then the getting one of the parameter - that value is nothing but a function, that function is called as callback function


// console.log('start')


// for(let i=0;i<500;i++){
//           console.log('i is running please wait :')
// }

// setTimeout(()=>{
//     console.log('timeout')
// },6000)

// console.log('middleware')
// console.log('end')

// **********************************************************




// console.log('start')

// // setTimeout(()=>{
// //           console.log('set timeout')
// // },3000)

// function loginUser(mail,password){
//         return {user:'naren'}
// }

// console.log('end')

// const result = loginUser('naren@gmail.com','12345')
// console.log(result)




// console.log('start')

// // setTimeout(()=>{
// //           console.log('set timeout')
// // },3000)

// function loginUser(mail,password){
        
//           setTimeout(()=>{
//                     console.log('data is undefined :(')
//                     return {user:'naren'}

          
//           },3000) 
// }

// console.log('end')

// const result = loginUser('naren@gmail.com','12345')
// console.log(result)





// console.log('start')

// // setTimeout(()=>{
// //           console.log('set timeout')
// // },3000)

// function loginUser(mail,password,secondFunction){
        
//           setTimeout(()=>{
//                     console.log('data is undefined :(')
//                     secondFunction({user:'naren'})

          
//           },3000) 
// }

// console.log('end')

// // const result = loginUser('naren@gmail.com','12345')
// // console.log(result)

// loginUser('naren@gmail.com','12345',function(secondFunction){

//           console.log(secondFunction)

// })




// console.log('start')

// // setTimeout(()=>{
// //           console.log('set timeout')
// // },3000)

// function loginUser(mail,password,secondFunction){
        
//           setTimeout(()=>{
//                     console.log('data is defined :)')
//                     secondFunction({user:'naren'})

          
//           },3000) 
// }

// function userDetails(userInfo,thirdFunction){

//           setTimeout(()=>{
//                 console.log('we have the data')

//                 thirdFunction({name : 'naren', age :23})
//           },5000)
// }

// console.log('end')

// // const result = loginUser('naren@gmail.com','12345')
// // console.log(result)

// loginUser('naren@gmail.com','12345',function(userData){

//           console.log(userData)

//           userDetails(userData.userInfo,function (data){
//                     console.log(data)
//           })

// })





// console.log('start')

// // setTimeout(()=>{
// //           console.log('set timeout')
// // },3000)

// function loginUser(mail,password,secondFunction){
        
//           setTimeout(()=>{
//                     console.log('data is defined :)')
//                     secondFunction({user:'naren'})

          
//           },3000) 
// }

// function userDetails(userInfo,thirdFunction){

//           setTimeout(()=>{
//                 console.log('we have the data')

//                 thirdFunction({name : 'naren', age :23})
//           },5000)
// }

// console.log('end')

// function fetchPost(userInfo,fourthFunction){

//           setTimeout(()=>{
//                console.log('fetched data')

//                fourthFunction(['post 1','post 2'])
//           },6500)
// }

// // const result = loginUser('naren@gmail.com','12345')
// // console.log(result)

// loginUser('naren@gmail.com','12345',function(userData){

//           console.log(userData)

//           userDetails(userData.userInfo,function (data){
//                     console.log(data)

//                     fetchPost(data.userInfo,function(fourthData){
                              
//                               console.log(fourthData)
//                     })
//           })

// })



//during failure
// console.log('start')

// // setTimeout(()=>{
// //           console.log('set timeout')
// // },3000)

// function loginUser(mail,password,secondFunction,failure){
        
//           setTimeout(()=>{
//                     console.log('data is defined :)')
//                     secondFunction({user:'naren'})

          
//           },3000) 
// }

// function userDetails(userInfo,thirdFunction,failure){

//           setTimeout(()=>{
//                 console.log('we have the data')

//                 thirdFunction({name : 'naren', age :23})
//           },5000)
// }

// console.log('end')

// function fetchPost(userInfo,fourthFunction,failure){

//           setTimeout(()=>{
//                console.log('fetched data')

//                fourthFunction(['post 1','post 2'])
//           },6500)
// }

// // const result = loginUser('naren@gmail.com','12345')
// // console.log(result)

// loginUser('naren@gmail.com','12345',function(userData){

//           console.log(userData)

//           userDetails(userData.userInfo,function (data){
//                     console.log(data)

//                     fetchPost(data.userInfo,function(fourthData){
                              
//                               console.log(fourthData)
//                     })
//           })

// })




//---------------------------------------------------------------------------------------------





// promise second easiest way after callback hell

//resolve :)   reject :(

//success :) failure :(

//resolve has success data res where has the reject res the error


// function(resolve,reject)




//browser default handler syntax

// console.log('start')

// const promiseData = new Promise((resolve,reject)=>{

//           setTimeout(()=>{

//                     resolve('promise resolved')

//                     reject('promise rejected')
//           },3000)
// })

// console.log('middle')

// promiseData.then((res)=>{
//           console.log(res)
// }).catch((error)=>{
//           console.log(error)
// })

// console.log('end')



// console.log('start')

// function loginUser(email,password){
//        //hit the backend

//        const promise = new Promise((resolve,reject)=>{

//           setTimeout(()=>{
             
//                     resolve({username : 'naren'})   
//           },3000)

//        })  

//        return promise

// }

// function getUserDetails(userInfo){
//           //hit the backend

//           const promise = new Promise((resolve,reject)=>{

//                    setTimeout(()=>{
                         
//                     resolve({username : 'naren', age : 23})  
//                    },4000)
//           })

//           return promise
// }

// function fetchPosts(postLists){
//           //hit backend

//           const promise = new Promise((resolve,reject)=>{

//                     setTimeout(()=>{

//                               // resolve(['posts 1','posts 2'])

//                               reject('rejected for some reason')
//                     },5000)
//           })

//           return promise
// }

// loginUser('naren@gmail.com','12345').then((res)=>{
//           console.log(res)

//           // getUserDetails(res.userInfo).then or

//           // return getUserDetails(res.userInfo) or

//           const promise = getUserDetails(res.userInfo)
//           return promise 
// }).then((resTwo)=>{
//           console.log(resTwo)

//           return fetchPosts(resTwo.posts)
// }).then((resThree)=>{
//         console.log(resThree)
// }).catch((err)=>{
//           console.log(err)
// })
 
// console.log('end')



//.................................................................................


//async and await


// console.log('start')

// function loginUser(email,password){
//        //hit the backend

//        const promise = new Promise((resolve,reject)=>{

//           setTimeout(()=>{
             
//                     resolve({username : 'naren'})   
//           },1000)

//        })  

//        return promise

// }

// function getUserDetails(userInfo){
//           //hit the backend

//           const promise = new Promise((resolve,reject)=>{

//                    setTimeout(()=>{
                         
//                     resolve({username : 'naren', age : 23})  
//                    },2000)
//           })

//           return promise
// }

// function fetchPosts(postLists){
//           //hit backend

//           const promise = new Promise((resolve,reject)=>{

//                     setTimeout(()=>{

//                               resolve(['posts 1','posts 2'])

//                               // reject('rejected for some reason')
//                     },3000)
//           })

//           return promise
// }

// async function example(){
// const userObj = await loginUser('naren@gmail.com','6178')
// console.log(userObj)

// const userDetails = await getUserDetails(userObj.userInfo)
// console.log(userDetails)

// const postArr = await fetchPosts(userDetails.postList)
// console.log(postArr)
// }

// example()
 
// console.log('end')




//try catch error for reject function


console.log('start')

function loginUser(email,password){
       //hit the backend

       const promise = new Promise((resolve,reject)=>{

          setTimeout(()=>{
             
                    resolve({username : 'naren'})   
          },1000)

       })  

       return promise

}

function getUserDetails(userInfo){
          //hit the backend

          const promise = new Promise((resolve,reject)=>{

                   setTimeout(()=>{
                         
                    resolve({username : 'naren', age : 23})  
                   },2000)
          })

          return promise
}

function fetchPosts(postLists){
          //hit backend

          const promise = new Promise((resolve,reject)=>{

                    setTimeout(()=>{

                              // resolve(['posts 1','posts 2'])

                               reject('rejected for some reason')
                    },3000)
          })

          return promise
}

async function example(){
  
          try{
                    const userObj = await loginUser('naren@gmail.com','6178')
console.log(userObj)

const userDetails = await getUserDetails(userObj.userInfo)
console.log(userDetails)

const postArr = await fetchPosts(userDetails.postList)
console.log(postArr)
          }
          catch(err){
                    console.log(err)
          }
}

example()
 
console.log('end')













