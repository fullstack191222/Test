const posts = [
    { title: "post one", body: "this is post one" },
    { title: "post two", body: "this is post two" },
  ];
  
  const createPost = () => {
    setTimeout(() => {
      posts.push({ title: "post three", body: "this is post three" });
    }, 0);
  };
  
  //CREATE POST CALLBACK
  const createPostCB = (cb) => {
    setTimeout(() => {
      posts.push({ title: "post three", body: "this is post three" });
      const success = Math.random() * 2 > 1;
      if (success) {
        cb(null, "success");
      } else {
        cb("error");
      }
    }, 0);
  };
  
  //CREATE POST PROMISE
  const createPostPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push({ title: "post three", body: "this is post three" });
        const success = Math.random() * 2 > 1;
        if (success) {
          resolve(); //getposts
        } else {
          reject("error"); //we will decide
        }
      }, 0);
    });
  };
  
  //CREATE POST ASYNC
  const createPostAsync = async () => {
    try {
      await createPostPromise();
      // getPosts();
    } catch (error) {
      getPosts(error);
    }
  };
  
  // const createPostAsync = async () => {
  //   const success = Math.random() * 2 > 1;
  //   await setTimeout(() => {
  //     posts.push({ title: "post three", body: "this is post three" });
  //     // if (success) {
  //     //   cb(null, "success");
  //     // } else {
  //     //   cb("error");
  //     // }
  //   }, 1000);
  //   getPosts()
  // }
  
  const getPosts = (error, success) => {
    let output = "";
    if (error) {
      output += `<li>${error}</li>`;
    } else {
      posts.forEach((post) => {
        output += `<li>${post.title}</li>`;
      });
    }
    document.body.innerHTML = output;
  };
  
  // createPostCB(getPosts);
  // createPostPromise().then(getPosts).catch(getPosts)
  createPostAsync();
  
  // function createPost(post) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       posts.push(post);
  //       let error = false; //can change to false for error
  //       if (!error) {
  //         resolve();
  //       } else {
  //         reject("something wrong");
  //       }
  //     }, 2000);
  //   });
  // }
  
  const rejectFunc = (err) => {
    document.body.innerHTML = err;
  };
  
  // createPost({ title: "post three", body: "this is post three" })
  //   .catch(rejectFunc)
  //   .then(getPosts);
  
  //createPost({ title: "post three", body: "this is post three" }, getPosts);
  
  // const promise1 = Promise.resolve("hello world");
  // const promise2 = 10;
  // const promise3 = new Promise((resolve,reject) => setTimeout(resolve, 2000, 'goodbye'));
  // Promise.all([promise1,promise2,promise3]).then(values => console.log(values));