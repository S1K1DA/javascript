function inputtitle() {
    const texttitle = document.getElementById("project-title");
    const textLength = texttitle.value.length;

    if(textLength >= 100) {
        texttitle.value = texttitle.value.substring(0, 99)
        alert("제목이 너무 깁니다.")
    }
}

function inputproject() {
    const title = document.getElementById("project-title").value;
    const project = document.getElementById("project-description").value;
    const result = document.getElementById("result");
    const space = /\s/;

    const titleNode = document.createElement("h3");
    const texttitle = document.createTextNode(title);

    const projectNode = document.createElement("h5");
    const textproject = document.createTextNode(project);
    

    if(space.test(title) || space.test(project)) {
        alert("띄어쓰기 불가입니다.")
    } else if(!title) {
        alert("제목을 입력해주세요.")
    } else if(!project) {
        alert("설명을 입력해주세요.")
    } else {
        titleNode.appendChild(texttitle);
        projectNode.appendChild(textproject);

        result.appendChild(titleNode);
        result.appendChild(projectNode);
    }
}