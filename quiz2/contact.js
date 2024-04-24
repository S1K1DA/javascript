function inputcontact() {
    const inputname = document.getElementById("name").value;
    const inputemail = document.getElementById("email").value;
    const inputmessage = document.getElementById("message").value;
    const Patternname = /^[가-힣]/;
    const patteremail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]/;

    console.log(Patternname.test(inputname))

    if(!Patternname.test(inputname)&& inputname) {
        alert("이름창에 한글만 입력하세요!")
    } else if(!patteremail.test(inputemail) && inputemail) {
        alert("이메일창에 이메일 주소만 입력하세요!")
    } else if(!inputname) {
        alert("이름을 입력해주세요.")
    } else if(!inputemail) {
        alert("이메일을 입력하세요.")
    } else if(!inputmessage) {
        alert("메세지를 입력하세요.")
    } 
}

function upmessage() {
    const maxLength = 500; 
    const messageTextarea = document.getElementById("message");
    const counter = document.getElementById("message-counter");
    const messageLength = messageTextarea.value.length;

    messageTextarea.value = messageTextarea.value.substring(0, 500);
    counter.innerHTML = messageLength + "/" + maxLength;

}