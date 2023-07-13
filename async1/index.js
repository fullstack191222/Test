
//function doing timeout and returns 2
function syncTimeout(ms) {
    console.log("sync timeout start");
    const start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
    console.log("sync timeout end");
  //   return 3;
  }
   
  
  
  setTimeout()
  
  
//   function syncTimeoutAndPrint(ms) {
//     const toPrint = syncTimeout(ms);
//     console.log(toPrint);
//   }
  
  function asyncTimeout(ms, cb) {
    console.log(1);
    setTimeout(() => {
      // console.log(2);
    //   namesList.push("snow")
      if(cb) {
          cb(namesList)
          
      }
      console.log("finished async");
      }, ms);

  }
  
  
  function asyncTimeoutPromise(ms) {
      return new Promise((resolve, reject) => {
          //   console.log(1);
          setTimeout(() => {
              
              // console.log(2);
              namesList.push("snow")
              const error = false
              if(!error) {
                  resolve(namesList)
              } else {
                  reject(namesList)
              }
          }, ms);
      })
      }
  
  function asyncTimeoutAndPrint(ms) {
    asyncTimeout(ms , (result)=> {
          console.log(result);
    });
  }
  
  
  
  const syncAddElement = (ms)=> {
      syncTimeout(ms)
      namesList.push("snow")
      showList()
  }
  
  
  const asyncAddElement = (ms)=> {
      asyncTimeout(ms, () => {
          showList()
      })
  }
  
  const asyncAddElementPromise = (ms) => {
      asyncTimeoutPromise(ms).then(showList)
  }
  
  
  const  asynAwaitAddElementPromise = async (ms)  => {
      const result =  await asyncTimeoutPromise(ms)
      showList()
  }
  
  
  
  
  const showList = () => {
      const listContainer = document.getElementById('listContainer'); // Get the container element by ID
      const listItems = namesList.map(item => `<li>${item}</li>`).join(''); // Use map and join to create a string of list items
      listContainer.innerHTML = `<ul>${namesList}</ul>`;
  }
  
  
  
  const reset = () => {
      const listContainer = document.getElementById('listContainer');
      listContainer.innerHTML = ``;
  }
  // const secondPrint = syncTimeout(3000);
  
  // console.log(3);