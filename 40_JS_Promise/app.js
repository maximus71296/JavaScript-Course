// promise concept with callbacks
let doTask = (success, failure) => {
    // doing the task
    let isDone = true;
    if(isDone){
        success('Task is done');
    }
    else{
        failure('Task is not done');
    }
};

doTask((message) => {
    console.log(message);
}, (message) => {
    console.error(message);
});

// Actual Promise Creation
let cleanCamera = new Promise((resolve, reject) => {
    // Cleaning Camera
    let isDone = true;
    if(isDone){
        resolve('Cleaning is done');
    }
    else{
        reject('Cleaning is not done');
    }
});

cleanCamera.then((message) => {
    console.log(message);
}).catch((message) => {
    console.error(message);
});

// Dependent Promise
let buildProject = new Promise( (resolve, reject) => {
    setTimeout(() => {
        let isDone = true;
    if(isDone){
        resolve('Project is finished');
    }
    else{
        reject('Project is not finished');
    }
    }, 1000);
});

let attendTechnicalRound = new Promise( (resolve, reject) => {
    setTimeout(() => {
        let isDone = true;
    if(isDone){
        resolve('Technical Round is finished');
    }
    else{
        reject('Technical Round is not finished');
    }
    }, 2000);
});

let attendManagerRoud = new Promise( (resolve, reject) => {
    setTimeout(() => {
        let isDone = true;
    if(isDone){
        resolve('Manager Round is finished');
    }
    else{
        reject('Manager Round is not finished');
    }
    }, 3000);
});

let attendHRRound = new Promise( (resolve, reject) => {
    setTimeout(() => {
        let isDone = true;
    if(isDone){
        resolve('HR Round is finished, GOT JOB');
    }
    else{
        reject('HR Round is not finished');
    }
    }, 4000);
});

buildProject.then( (message) => {
    let result = `${message} ->` ;
    console.log(message);
    attendTechnicalRound.then( (message) => {
        result += `${message} -> `;
        console.log(message);
        attendManagerRoud.then( (message) => {
            result += `${message} -> `;
            console.log(message);
            attendHRRound.then( (message) => {
                result += `${message} `;
                console.log(message);
                //console.log(result);
            }).catch( (err) => {
                console.error(err);
            });
        }).catch((err) => {
            console.error(err);
        });
    }).catch((err) => {
        console.error(err);
    });
}).catch((err) => {
    console.error(err);
});

