function login() {
    const id = "user";
    const pwd = "qwer1234!";
    const space = /\s/;

    const inputid = document.getElementById("username").value;
    const inputpwd = document.getElementById("password").value;

    if(space.test(inputid) || space.test(inputpwd)) {
        alert("띄어쓰기 불가입니다.")
    }else if (!inputid || !inputpwd) {
        alert("아이디 또는 비밀번호를 입력해주세요.");
    } else if(inputid !== id || inputpwd !== pwd) {
        alert("아이디 또는 비밀번호가 틀렸습니다.")
    } else {
        alert("로그인 되었습니다.")
    }

}