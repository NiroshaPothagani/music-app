//LOG IN

// function validate(){
const domain = "http://localhost:5000"
const login =  async (emailid, password) => {
        try{
            const res = await axios({
                method:'POST',
                url: domain+"/users/login",
                data: {
                    emailid,
                    password
                }
            });
            if(res.data.status === "success") {
                alert('Logged in Successfully!');
                window.setTimeout(() => {
                    location.assign('/index');
                },1500);

            }
        }catch(err) {
            alert("Incorrect! email or password" );

            // console.log(err.response.data.message );
        }
    };
document.querySelector('.form').addEventListener('submit', e => {
    e.preventDefault();
    const emailid = document.getElementById('emailid').value;
    const password = document.getElementById('password').value;
    login(emailid, password);
})

//LOG OUT

const logout = async () => {
    try {
        const res = await axios({
            method:'GET',
            url:"http://localhost:5000/users/logout",
        });
        if((res.data.status === 'success')) location.reload(true);

    }catch(err) {
        showAlert('error', 'Error Logging out! Try again.')
    }
}