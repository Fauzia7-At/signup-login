function signup(userName){
    let usernames = ["Job","Alice","Jane", "Bob"]
    
        if(usernames.includes(userName)){
            return "User Already Registered, Please login"
        } else {
            usernames.push(`${userName}`)
            return "Signup Successful, Please login";
        }
    }
