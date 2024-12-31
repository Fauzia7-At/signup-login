function signup(userName){
    let usernames = ["Job","Alice","Jane", "Bob"]
    for(let i =0;i<usernames.length;i++ ){
        if(usernames==usernames[i]){
            return "User Already Registered, Please login"
        } else {
            usernames.push(`${userName}`)
            return "Signup Successful, Please login"
        }
    }
}