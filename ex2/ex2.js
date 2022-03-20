// first method 
getUser(1,"Amyr")
.then((resolve)=>getRepositories(resolve.gitHubUsername, 2))
.then((resolve)=> getBrunch(resolve['repos'][resolve['level']]))
.then((resolve)=> {
    if (resolve == "master")
    postCommit('new Version').then((resolve)=> {
        if (resolve)console.log("The new version is commited");
        else console.log("The new version is not commited");
    });
});


// second method with async await 
const run = async () => {
    var user = await getUser(1,"Amyr2");
    var repos = await getRepositories(user.gitHubUsername, 2);
    var brunch = await getBrunch(repos['repos'][repos['level']]);
    if (brunch == "master"){
        var commit = await postCommit('new version');
        if (commit)console.log("The new version is commited");
        else console.log("The new version is not commited");
    }
};

run();


// functions 

function getUser(id,User) {
    return new Promise((resolve, reject)=>
    setTimeout(() => {
        console.log('User is founded');
        let user = {id: id,gitHubUsername : User};
        resolve(user);
    }, 2000));
}

function getRepositories(username, level) {
    return new Promise((resolve, reject)=>
    setTimeout(() => {
        console.log('username : '+username);
        console.log('repos is ready');

        let repos = ['br1','main','master'];
        let result = {
            "repos": repos,
            "level": level
        };
        resolve(result);
    }, 2000));
}

function getBrunch(repo,) {
    return new Promise((resolve, reject)=>
    setTimeout(() => {
        console.log(repo+' is ready');
        resolve(repo);
    }, 2000));
}

function postCommit(vers, callback) {
    return new Promise((resolve, reject )=>
    setTimeout(() => {
        console.log('new Version');
        resolve(vers == 'new Version');
    }, 2000));
}

