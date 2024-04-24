// 이름 keyup
function inputname() {
    const Patternname = /^[가-힣]+$/;
    const name = document.getElementById("new-username").value;
    const textname = document.getElementById("nametext")

    if(Patternname.test(name)) {
        textname.innerHTML = " ";
    } else {
        textname.innerHTML = "한글만 사용 가능합니다.";
        textname.style.color = "red";
    }
}

// 아이디 keyup
function inputid() {
    const patterid = /[a-z0-9_-]{5,20}$/;
    const id = document.getElementById("new-userid").value;
    const textid = document.getElementById("idtext");

    if(patterid.test(id)) {
        textid.innerHTML = "사용 가능한 아이디입니다.";
        textid.style.color = "green";
    } else {
        textid.innerHTML = "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.";
        textid.style.color = "red";
    }
}

// 비밀번호 keyup
function inputpwd() {
    // const patterpwd = /[a-zA-Z0-9!@#$%^&*()_+=-]{8,16}$/;
    // qwer1234!
    const patterpwd = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=-])[a-zA-Z0-9!@#$%^&*()_+=-]{8,16}$/;
    const pwd = document.getElementById("new-password").value;
    const pwd2 = document.getElementById("confirm-password").value;
    const textpwd = document.getElementById("pwdtext");
    const textpwd2 = document.getElementById("pwd2text");

    if(patterpwd.test(pwd)) {
        textpwd.innerHTML = "사용 가능한 비밀번호입니다.";
        textpwd.style.color = "green";
    } else {
        textpwd.innerHTML = "8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.";
        textpwd.style.color = "red";
    }

    if(pwd === pwd2) {
        textpwd2.innerHTML = "비밀번호가 일치합니다.";
        textpwd2.style.color = "green";
    } else {
        textpwd2.innerHTML = "비밀번호가 일치하지 않습니다.";
        textpwd2.style.color = "red";
}
}

function inputregister() {
    const space = /\s/;
    const name = document.getElementById("new-username").value;
    const id = document.getElementById("new-userid").value;
    const pwd = document.getElementById("new-password").value;
    const pwd2 = document.getElementById("confirm-password").value;

    if(space.test(name) || space.test(id) || space.test(pwd) ||space.test(pwd2) ) {
        alert("띄어쓰기 불가입니다.")
    } else if(!name) {
        alert("이름을 입력해주세요.")
    } else if(!id) {
        alert("아이디를 입력해주세요.")
    } else if(!pwd) {
        alert("비밀번호를 입력해주세요.") 
    } else if(pwd === pwd2) {
        alert("비밀번호가 일치하지 않습니다.")
    } else {
        alert("로그인 하였습니다.")
    }
}


