/** 
Viết chương trình quản lý sinh viên của một trường học. 
1. Tạo lớp sinh viên với các thông tin dưới
    fullName, maSV, lop, khoa, diemToán, diemLy, diemHoa.
2. Thực hiện các chức năng sau:
    2.1. Thêm sửa xóa, tìm kiếm khóa học (20CD, 21CD)
    2.2. Thêm sửa xóa. tìm kiếm lớp học
    2.3. Thêm sửa xóa, tìm kiếm sinh viên
*/


// CREATE ARRAY

studentList = Array();
facultyList = Array();
classNameList = Array();

/** ________________________DISPLAY_________________________________ */

// DISPLAY
function display() {
    displayStudent = document.getElementById('displayStudent');
    displayFaculty = document.getElementById('displayFaculty');
    displayClass = document.getElementById('displayClass');

    btnStudent = document.getElementById('btnStudent');
    btnStudent.addEventListener('click', function() {
        displayFaculty.setAttribute('class', 'd-none');
        displayClass.setAttribute('class', 'd-none');
        displayStudent.setAttribute('class', 'd-block');
    });

    btnFaculty = document.getElementById('btnFaculty');
    btnFaculty.addEventListener('click', function() {
        displayStudent.setAttribute('class', 'd-none');
        displayClass.setAttribute('class', 'd-none');
        displayFaculty.setAttribute('class', 'd-block');
    });

    btnClass = document.getElementById('btnClass');
    btnClass.addEventListener('click', function() {
        displayStudent.setAttribute('class', 'd-none');
        displayFaculty.setAttribute('class', 'd-none');
        displayClass.setAttribute('class', 'd-block');
    });
}

function create() {
    displayAll = document.getElementById('displayAll');
    displayAll.addEventListener('click', renderStudent);

    // SELECT SEARCH
    textSearch = document.getElementById('textSearch');
    btnSearch = document.getElementById('btnSearch');
    selectSearch = document.getElementById('selectSearch');
    btnSearch.addEventListener('click', function () {
        search(selectSearch.value);
    });

    // SELECT SORT SCORE
    classification = document.getElementById('classification');
    classification.addEventListener('click', function () {
        sortScore(classification.value);
    });

    // SELECT SORT 
    selectSort = document.getElementById('selectSort');
    selectSort.addEventListener('click' , function () {
        sort(selectSort.value);
    });

    // ADD FACULTY
    btnAddFaculty = document.getElementById('btnAddFaculty');
    textFaculty = document.getElementById('textFaculty');
    btnAddFaculty.addEventListener('click', function () {
        divShowFaculty.setAttribute('class', 'd-none');
        addFaculty();
    });

    // SHOW FACULTY
    btnShowFaculty = document.getElementById('btnShowFaculty');
    divShowFaculty = document.getElementById('divShowFaculty');
    titleFaculty = document.getElementById('titleFaculty');
    btnShowFaculty.addEventListener('click', function () {
        divShowFaculty.setAttribute('class', 'd-block');
        showFaculty();
    });
    editFaculty = document.getElementById('editFaculty');

    // ADD CLASS NAME
    btnAddClassName = document.getElementById('btnClassName');
    textClassNameDom = document.getElementById('textClassName');
    btnAddClassName.addEventListener('click', function () {
        divShowClassName.setAttribute('class', 'd-none');
        addClassName();
    });

    // SHOW CLASS NAME
    btnShowClassName = document.getElementById('btnShowClassName');
    titleClassName = document.getElementById('titleClassName');
    divShowClassName = document.getElementById('divShowClassName');
    btnShowClassName.addEventListener('click', function () {
        divShowClassName.setAttribute('class', 'd-block');
        showClassName();
    });
    editClassName = document.getElementById('editClassName');
    
    // ADD STUDENT
    btnAddStudent = document.getElementById('btnAddStudent');
    btnAddStudent.addEventListener('click', addStudent);

    btnEditStudent = document.getElementById('btnEditStudent');
    addFullnameDom = document.getElementById('fullname');
    addCodeDom = document.getElementById('code');
    addClassNameDom = document.getElementById('className');
    addFacultyDom = document.getElementById('faculty');
    addMathsDom = document.getElementById('maths');
    addPhysicsDom = document.getElementById('physics');
    addChemistryDom = document.getElementById('chemistry');

    rootDom = document.getElementById('content');
}

// CREATE OPTION
function createNodeOption(content) {
    optionDom = document.createElement('option');
    optionDom.innerHTML = content.name;
    return optionDom;
}

function search(selectSearch){
    switch(selectSearch){
        case 'student': 
            searchStudent(textSearch.value);
            break;
        case 'className':
            searchClassName(textSearch.value);
            break;
        case 'faculty': 
            searchFaculty(textSearch.value);
            break;
        default:
            alert('Bạn chưa chọn đối tượng');
    }
    textSearch.value = '';
}

function sort(value){
    switch(value){
        case 'fullname': 
            studentList.sort(function(a,b){
                return a.fullname.localeCompare(b.fullname);
            })
            break;
        case 'class':
            studentList.sort(function(a,b){
                return a.className.localeCompare(b.className);
            })
            break;
        case 'faculty':
            studentList.sort(function(a,b){
                return a.faculty.localeCompare(b.faculty);
            })
            break;
    }
    renderStudent();
}

function sortScore(value) {
    switch(value){
        case 'Excellent':
            score(8.5 , 10);
            break;
        case 'Good':
            score(7.0, 8.4);
            break;
        case 'Average':
            score(5.5, 6.9);
            break;
        case 'BelowAverage':
            score(0, 5.4);
            break;
        default: 
            renderStudent();

    }
}

function score(value1, value2) {
    sortScoreArr = Array();
    studentList.forEach(std => {
        medium = (parseInt(std.maths) + parseInt(std.physics) + parseInt(std.chemistry)) / 3;
        if(medium >= value1 && medium <= value2) {
            sortScoreArr.push(new Student(std.id, std.fullname, std.code, std.className, std.faculty, std.maths, std.physics, std.chemistry));
        }
    })
    renderStudentScore();
    sortScoreArr = [];
}

function renderStudentScore() {
    rootDom.innerHTML = '';
    if(sortScoreArr != null){
        sortScoreArr.forEach(std => {
            rootDom.appendChild(createNodeStudent(std));
        });
    };
}

window.onload = function () {
    display();
    create();
    dataStudent();
    renderStudent();
}

