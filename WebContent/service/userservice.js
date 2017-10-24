/**
 * 
 */
app.factory('UserService',function($http)
{
    var userService={}

    userService.registerUser=function(user)
    {
    	console.log("registration start")
        return $http.post("http://localhost:8081/Collob-backend/registration",user)
        console.log("Registration done")
    }
    
    userService.login=function(user)
    {
        return $http.post("http://localhost:8081/Collob-backend/login",user)
    }
    
    userService.logout=function(user)
    {
        return $http.get("http://localhost:8081/Collob-backend/logout")
    }
    
    userService.getUserByUsername=function()
    {
        return $http.get("http://localhost:8081/Collob-backend/getuserdetails")
    }
    
    userService.updateUserProfile=function(user)
    {
        return $http.put("http://localhost:8081/Collob-backend/updateprofile",user)
    }
    
return userService;
})