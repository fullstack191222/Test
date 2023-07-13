
//from the database posts.
const fromDB = [{ type: "first post", value: "this is first sentence" },
{ type: "second post", value: "this is second sentence" }]

let i = 0;

//To show all posts from the "database"
function showPosts(error, success) {
    let str = ``;
    if (error) {
        str += "we have an error"
    } else { //success
        fromDB.forEach(element => {
            str += `<li>${element.type}</li>`
        });
    }
    document.body.innerHTML = str
}

// //add one more post to the database
// const createPost = () => {
//     fromDB.push({type : "third post", value: "this is new third post from db"})
// }

// //add one more post to the database async
// const createPostAsync = () => {
//     setTimeout(()=> {
//         fromDB.push({type : "third post", value: "this is new third post from db"})
//     }, 0)
// }

//adds post to "DB" and call the callback function
const createPostWithCB = (cb) => {
    setTimeout(() => {
        //add to the DB 
        fromDB.push({ type: "third post", value: "this is new third post from db" })
        const success = Math.random() * 2 > 1; //true or false 50%
        if (success) {
            cb(null, "success");
        } else { //fail
            cb("error");
        }
    }, 0)
}


const createPostWithPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //add to the DB 
            fromDB.push({ type: "third post", value: "this is new third post from db" })
            const success = Math.random() * 2 > 1; //true or false 50%
            if (success) {
                resolve(); //show the result on the screen
            } else { //fail
                reject("error");//show error on the screen
            }
        }, 0)
    })
}

//not that good.
// createPostWithPromise().then(showPosts).catch(showPosts)     //promise


//async await 
//CREATE POST ASYNC
const createPostAsync = async () => {
    try {
        await createPostWithPromise() //adding third to the db
        showPosts()
    } catch(error) {
        console.log("error catched by async");
        showPosts(error)
    }
}


//createPostAsync()

//promise ...
// fetch('https://jsonplaceholder.typicode.com/posts/2')
// .then((response) => response.json())
// .then((json) => console.log(json))
// .catch((error) => console.log(error));


const fetchAsync = async () => {
    try {
        const response = await fetch('https://jsplaceholder.typicode.com/posts/2')
        const json =  await response.json()
        console.log(json)
    } catch(error) {
        console.log(error);
    }
}

fetchAsync()






// createPost()

//createPostAsync()

//show everything from the db
// createPostWithCB(showPosts)










// setTimeout(showPosts,3000)


// setInterval(() => {
//     i++
//     console.log(i);
// }, 1000)


