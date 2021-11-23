// ________________________CLASS NAME_________________________________

// ADD CLASS NAME IN ARRAY
idCname = 0;
function addClassName() {
    classNameList.push(new ClassName(++idCname, textClassNameDom.value));
    renderClassName();
    alert('Thêm thành công lớp: ' + textClassNameDom.value);
    textClassNameDom.value = '';
}

// SHOW CLASS NAME
function renderClassName () {
    addClassNameDom.innerHTML = ''
    if(classNameList != null){
        classNameList.forEach(content => {
            addClassNameDom.appendChild(createNodeOption(content));
        })
    }
}

function showClassName () {
    titleClassName.innerHTML = ''
    idShowCl = 1;
    if(classNameList != null){
        classNameList.forEach(content => {
            titleClassName.appendChild(showNodeClassName(content));
        })
    }
}

// SHOW ALL CLASS NAME
idShowCl = 1;
function showNodeClassName(content) {
    divDom = document.createElement('div');
    divDom.setAttribute('class', 'row border-bottom my-2 pb-1');

    idDom = document.createElement('div');
    idDom.setAttribute('class', 'col-sm-2');
    idDom.innerHTML = idShowCl++;
    divDom.appendChild(idDom);

    nameDom = document.createElement('div');
    nameDom.setAttribute('class', 'col');
    nameDom.innerHTML = content.name;
    divDom.appendChild(nameDom);

    editDom = document.createElement('button');
    editDom.setAttribute('class', 'col-sm-2 btn btn-warning');
    editDom.innerHTML = "Sửa";
    divDom.appendChild(editDom);
    editDom.addEventListener('click', function () {
        showEditClassName(content);
    })

    deleteDom = document.createElement('button');
    deleteDom.setAttribute('class', 'col-sm-2 btn btn-danger mx-1');
    deleteDom.innerHTML = "Xoá";
    divDom.appendChild(deleteDom);
    deleteDom.addEventListener('click', function () {
        deleteClassName(content.id);
    })

    return divDom;
}


function showEditClassName(content) {
    editdivClassName = document.createElement('div');
    editdivClassName.setAttribute('class', 'row m-2');

    textEdit = document.createElement('input');
    textEdit.setAttribute('class', 'form-control col');
    textEdit.value = content.name;
    editdivClassName.appendChild(textEdit);

    btnEdit = document.createElement('button');
    btnEdit.setAttribute('class', 'btn btn-success col-sm-3 mx-1');
    btnEdit.innerHTML = "Update";
    btnEdit.addEventListener('click', function () {
        editClassNameId(content.id, textEdit);
    })
    editdivClassName.appendChild(btnEdit);

    editClassName.appendChild(editdivClassName);
}

function editClassNameId(id, textEdit){
    classNameList.forEach(content => {
        if(content.id == id) content.name = textEdit.value;
    })
    renderClassName();
    showClassName();
    editClassName.removeChild(editdivClassName);
}

function deleteClassName(id) {
    i = 0;
    for(; i < ClassNameList.length; i++){
        console.log(i);
        if(ClassNameList[i].id == id){
            ClassNameList.splice(i, 1);
        }
    }
    renderClassName();
    showClassName();
}

function searchClassName(textSearch) {
    kt = false;
    classNameSearch = Array();
    if(studentList != null){
        studentList.forEach(std => {
            if(std.className == textSearch){
                classNameSearch.push(new Student(std.id, std.fullname, std.code, std.className, std.faculty, std.maths, std.physics, std.chemistry));
                kt = true;
            }
        })
        renderClassNameSearch();
    }
    (kt == false) ? alert('Không tìm thấy lớp trùng khớp') : '';
}

function renderClassNameSearch() {
    rootDom.innerHTML = '';
    if(classNameSearch != null){
        classNameSearch.forEach(ClassName => {
            rootDom.appendChild(createNodeStudent(ClassName));
        });
    };
}