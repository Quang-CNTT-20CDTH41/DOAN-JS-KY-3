/** _____________________ FACULTY ____________________________________ */
class Faculty{
    constructor(id, name){
        this.__id = id;
        this.__name = name;
    }

    set id(value) { this.__id = value };
    get id() { return this.__id };

    set name(value) { this.__name = value };
    get name() { return this.__name };
}

// ADD FACULTY IN ARRAY
idFa = 0;
function addFaculty() {
    facultyList.push(new Faculty(++idFa, textFaculty.value));
    renderFaculty();
    alert('Thêm thành công khoa: ' + textFaculty.value);
    textFaculty.value = '';
}

// SHOW FACULTY
function renderFaculty () {
    addFacultyDom.innerHTML = '';
    if(facultyList != null){
        facultyList.forEach(content => {
            addFacultyDom.appendChild(createNodeOption(content));
        })
    }
}

function showFaculty () {
    titleFaculty.innerHTML = ''
    idShowFa = 1;
    if(facultyList != null){
        facultyList.forEach(content => {
            titleFaculty.appendChild(showNodeFaculty(content));
        })
    }
}

// SHOW ALL FACULTY
idShowFa = 1;
function showNodeFaculty(content) {
    divDom = document.createElement('div');
    divDom.setAttribute('class', 'row border-bottom my-2 pb-1');

    idDom = document.createElement('div');
    idDom.setAttribute('class', 'col-sm-2');
    idDom.innerHTML = idShowFa++;
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
        showEditFaculty(content);
    })

    deleteDom = document.createElement('button');
    deleteDom.setAttribute('class', 'col-sm-2 btn btn-danger mx-1');
    deleteDom.innerHTML = "Xoá";
    divDom.appendChild(deleteDom);
    deleteDom.addEventListener('click', function () {
        deleteFaculty(content.id);
    })

    return divDom;
}

function showEditFaculty(content) {
    editdivFaculty = document.createElement('div');
    editdivFaculty.setAttribute('class', 'row m-2');

    textEdit = document.createElement('input');
    textEdit.setAttribute('class', 'form-control col');
    textEdit.value = content.name;
    editdivFaculty.appendChild(textEdit);

    btnEdit = document.createElement('button');
    btnEdit.setAttribute('class', 'btn btn-success col-sm-3 mx-1');
    btnEdit.innerHTML = "Update";
    btnEdit.addEventListener('click', function () {
        editFacultyId(content.id, textEdit);
    })
    editdivFaculty.appendChild(btnEdit);

    editFaculty.appendChild(editdivFaculty);
}

function editFacultyId(id, textEdit){
    facultyList.forEach(content => {
        if(content.id == id){
            content.name = textEdit.value;
        }
    })
    renderFaculty();
    showFaculty();
    editFaculty.removeChild(editdivFaculty);

}

function deleteFaculty(id) {
    i = 0;
    for(; i < facultyList.length; i++){
        if(facultyList[i].id == id){
            facultyList.splice(i, 1);
        }
    }
    renderFaculty();
    showFaculty();
}

function searchFaculty(textSearch) {
    kt = false;
    facultySearch = Array();
    if(studentList != null){
        studentList.forEach(std => {
            if(std.faculty == textSearch){
                facultySearch.push(new Student(std.id, std.fullname, std.code, std.className, std.faculty, std.maths, std.physics, std.chemistry));
                kt = true;
            }
        })
        renderFacultySearch();
    }
    (kt == false) ? alert('Không tìm thấy khoa trùng khớp') : '';
}

function renderFacultySearch() {
    rootDom.innerHTML = '';
    if(facultySearch != null){
        facultySearch.forEach(faculty => {
            rootDom.appendChild(createNodeStudent(faculty));
        });
    };
}