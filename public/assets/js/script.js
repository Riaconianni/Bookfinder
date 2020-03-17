$("#submitButton").on("click", function(event){
    event.preventDefault();
    console.log("hi")

    const user = $("#usr").val();
    const password = $("#pwd").val();

    console.log(user, password)

    let dataObject = {
        email: user,
        password: password
    }

    if(user === "" || password === ""){
        alert("must fill out fields")
    } else {
        $.ajax({
            url: "/api/auth",
            method: "POST",
            data: dataObject
        }).then(function(res){
            console.log(res.message)
            //if statement
            //test to see if it was successful, if you get the token
            //redirect them to books page?
        })
    }
})