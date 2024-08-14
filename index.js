const login = async (e)=>{
    e.preventDefault()
        const email = document.getElementById("login_email").value;
        const password = document.getElementById("login_password").value;
      
    
    try{
    const result = await firebase.auth().signInWithEmailAndPassword(email, password);
    alert(`user is successfully login ${result.user.email}`)
    }catch (error) {
        alert(error.message)
    
    }
    }

    const logout = () =>{
        firebase.auth().signOut()
    
    firebase.auth().onAuthStateChanged((user) =>{
        if (user) {
        console.log(user);


        }else{
            console.log(`user successfully signout`);
            alert(`user successfully signout`)
        }

    });
}