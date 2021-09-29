console.log("Hello");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const rememberMe = document.querySelector("#rememberMe");
const submit = document.querySelector("button[type='submit']");
const errormsg = document.querySelector(".alert");
const eye = document.querySelector("#eye");

console.log(email,password,confirmPassword,rememberMe,submit,eye);

let FormData = {};
// FormData = 

const DisplayError = (e) =>{
    errormsg.classList.add("alert-danger");
    errormsg.style.display = "block";
    errormsg.innerHTML = e; 
};
const makeAllEmpty=()=>{
    email.value="";password.value="";confirmPassword.value="";
    errormsg.style.display="none";
};

const form = document.querySelector("form");
const checkData = () => {
    //if email pattern wrong
    if(!email.value.includes("@") || !email.value.includes(".com"))
    {
        //use console.error to show error in console
        console.error("Email error");
        email.classList.add("is-invalid"); // to change email red as is-invlid(bootstrap)
        DisplayError("Email is invalid");
    }else if(password.value.length<9)//if password length <8
    {
        console.error("Password Length is less than 8.");
        DisplayError("Password Length must be greater than 8.");
        password.classList.add("is-invalid");
    }else if(password.value.toLowerCase()==password.value)// password with atleast one capital letter
    {
        console.error("At least one uppercase letter required!");
        DisplayError("Password must contain one upper case letter.");
        password.classList.add("is-invalid");
    }else if(password.value != confirmPassword.value)// if cnfrmPass != Password
    {
        console.error("Password and confirmPassword is not same!");
        DisplayError("Password and Confirm Password must be same.");
        confirmPassword.classList.add("is-invalid");
    }else
    {
        DisplayError("Welcome user" + email.value);
        errormsg.classList.remove("alert-danger");
        errormsg.classList.add("alert-success");
        setTimeout(makeAllEmpty,10000);
    }
};
form.addEventListener("submit",(e)=>
{
    e.preventDefault();  // if you have not disable dafault after click,it refresh  
    console.log("User Submit Form");
    const emailVal = email.value;
    const passwordVal = password.value;
    const confirmPasswordVal = confirmPassword.value;
    const rememberMeVal = rememberMe.value;
    
    FormData ={emailVal,passwordVal,confirmPasswordVal,rememberMeVal};  //if key == value then use this syntax
    
    checkData();
    // makeAllEmpty();
    console.log(FormData);

    // alert(JSON.stringify(FormData));
} );


const handchange=(e)=>{
    if(password.value !="" && password.value != "" && confirmPassword.value !=""){
        submit.classList.remove("disabled");
        checkData();
    }else
    {
        submit.classList.add("disabled");
    }
    e.target.classList.remove("is-invalid");
    errormsg.style.display="none";
    // console.log(e.target.value);
};

email.addEventListener("input",handchange);//input check at each change
password.addEventListener("change",handchange);// change check after clicking on other
confirmPassword.addEventListener("change",handchange);

eye.addEventListener("click",()=>{
    if(eye.classList.contains("btn-primary")){
        password.type = "text";
        eye.innerHTML = "Hide Password";
        eye.classList.remove("btn-primary");
    }else{
        password.type="password";
        eye.innerHTML = "Show Password";
        eye.classList.add("btn-primary");
    }
});

