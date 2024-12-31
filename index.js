function signup(userName){
    let usernames = ["Job","Alice","Jane", "Bob"]
    
        if(usernames.includes(userName)){
            return "User Already Registered, Please login"
        } else {
            usernames.push(`${userName}`)
            return "Signup Successful, Please login";
        }
    }
function login(userName,password){
    let usernames2 = ["Job","Alice","Jane", "Bob"]
    if(usernames2.includes(userName) && password=="Emp@123"){
        return  "Login Sucessfull...";
    } else if(usernames2.includes(userName) && password !=="Emp@123" ){
     return "Wrong Password";
    } else {
        return "User Not Found, Please Signup"
    }
}