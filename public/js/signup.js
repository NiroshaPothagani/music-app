
// function validate(){
    
   const signup =  async (username, emailid, password, passwordConfirm) => {
        try{
            const res = await axios({
                method:'POST',
                url:"http://localhost:5000/users/signup",
                data: {
                    username,
                    emailid,
                    password,
                    passwordConfirm
                            // username: req.body.username,
                            // emailid: req.body.emailid,
                            // password:req.body.password,
                            // passwordConfirm: req.body.passwordConfirm
                }
            });
            if(res.data.status === "success") {
                alert('Signup Successfully!');
            //    return res.redirect(301, '../signup_success')

                window.setTimeout(() => {
                    location.assign('/index');
                },1500);

            }
        }catch(err) {
            alert(err.data)
            // console.log(err.response.data.message );
        }
    };
document.querySelector('.form').addEventListener('submit', e => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const emailid = document.getElementById('emailid').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;
    signup(username, emailid, password, passwordConfirm);
})
// }