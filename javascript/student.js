/** ________________________STUDENT________________________________ */
class Student{
    constructor(id, fullname, code, className, faculty, maths, physics, chemistry){
        this.__id = id;
        this.__fullname = fullname;
        this.__code = code;
        this.__className = className;
        this.__faculty = faculty;
        this.__maths = maths;
        this.__physics = physics;
        this.__chemistry = chemistry;
    }

    set id(value) { this.__id = value };
    get id() { return this.__id };

    set fullname(value) { this.__fullname = value };
    get fullname() { return this.__fullname };

    set code(value) { this.__code = value };
    get code() { return this.__code };

    set className(value) { this.__className = value };
    get className() { return this.__className };

    set faculty(value) { this.__faculty = value };
    get faculty() { return this.__faculty };

    set maths(value) { this.__maths = value };
    get maths() { return this.__maths };

    set physics(value) { this.__physics = value };
    get physics() { return this.__physics };

    set chemistry(value) { this.__chemistry = value };
    get chemistry() { return this.__chemistry };
}

// ADD STUDENT IN ARRAY 
id = 0;
function addStudent() {
    std = new Student(++id, addFullnameDom.value, addCodeDom.value, addClassNameDom.value, addFacultyDom.value, addMathsDom.value, addPhysicsDom.value, addChemistryDom.value);
    studentList.push(std);
    addFullnameDom.value = addCodeDom.value = '';
    addMathsDom.value = addPhysicsDom.value = addChemistryDom.value = '';
    renderStudent();
}

// SHOW STUDENT
function renderStudent() {
    rootDom.innerHTML = '';
    if(studentList != null){
        studentList.forEach(student => {
            rootDom.appendChild(createNodeStudent(student));
        });
    };
}

// CREATE ROW STUDENT
function createNodeStudent(student) {
    nodeRow = document.createElement('tr');

    nodeId = document.createElement('td');
    nodeId.setAttribute('class', 'w-30');
    nodeId.innerHTML = student.id;
    nodeRow.appendChild(nodeId);

    nodeFullname = document.createElement('td');
    nodeFullname.innerHTML = student.fullname;
    nodeRow.appendChild(nodeFullname);

    nodeCode = document.createElement('td');
    nodeCode.innerHTML = student.code;
    nodeRow.appendChild(nodeCode);

    nodeClass = document.createElement('td');
    nodeClass.innerHTML = student.className;
    nodeRow.appendChild(nodeClass);

    nodeFaculty = document.createElement('td');
    nodeFaculty.innerHTML = student.faculty;
    nodeRow.appendChild(nodeFaculty);

    nodeMaths = document.createElement('td');
    nodeMaths.innerHTML = student.maths;
    nodeRow.appendChild(nodeMaths);

    nodePhysics = document.createElement('td');
    nodePhysics.innerHTML = student.physics;
    nodeRow.appendChild(nodePhysics);

    nodeChemistry = document.createElement('td');
    nodeChemistry.innerHTML = student.chemistry;
    nodeRow.appendChild(nodeChemistry);

    nodeEditStudentTD = document.createElement('td');
    nodeEditStudent = document.createElement('button');
    nodeEditStudent.setAttribute('class', 'btn btn-warning')
    nodeEditStudent.innerHTML = 'Sửa';
    nodeEditStudent.addEventListener('click', function () {
        editStudent(student.id);
    });
    nodeEditStudentTD.appendChild(nodeEditStudent);
    nodeRow.appendChild(nodeEditStudentTD);

    nodeDeleteStudentTD = document.createElement('td');
    nodeDeleteStudent = document.createElement('button');
    nodeDeleteStudent.setAttribute('class', 'btn btn-danger');
    nodeDeleteStudent.innerHTML = 'Xoá';
    nodeDeleteStudent.addEventListener('click', function () {
        deleteStudent(student.id);
    });
    nodeDeleteStudentTD.appendChild(nodeDeleteStudent);
    nodeRow.appendChild(nodeDeleteStudentTD);

    return nodeRow;
}

function deleteStudent(id) {
    i = 0;
    for(; i < studentList.length; i++){
        if(studentList[i].id == id) studentList.splice(i, 1);
    }
    renderStudent();
}

function editStudent(id) {
    studentList.forEach(std => {
        if(std.id == id) {
            addFullnameDom.value = std.fullname;
            addCodeDom.value = std.code;
            addClassNameDom.value = std.className;
            addFacultyDom.value = std.faculty;
            addMathsDom.value = std.maths;
            addPhysicsDom.value = std.physics;
            addChemistryDom.value = std.chemistry;
            
            btnEditStd = document.createElement('button');
            btnEditStd.setAttribute('class', 'btn btn-primary mx-2');
            btnEditStd.innerHTML = 'Update';
            btnEditStd.addEventListener('click', function () {
                updateStudent(id);
            })
            btnEditStudent.appendChild(btnEditStd);
        }
    })
}

function updateStudent(id) {
    btnEditStudent.removeChild(btnEditStd);
    studentList.forEach(std => {
        if(std.id == id){
            std.fullname = addFullnameDom.value;
            std.code = addCodeDom.value;
            std.className = addClassNameDom.value;
            std.faculty = addFacultyDom.value;
            std.maths = addMathsDom.value;
            std.physics = addPhysicsDom.value;
            std.chemistry = addChemistryDom.value;
        }
    })
    renderStudent();
    addFullnameDom.value = addCodeDom.value = '';
    addMathsDom.value = addPhysicsDom.value = addChemistryDom.value = '';
}

// SEARCH STUDENT
function searchStudent(textSearch) { 
    kt = false;
    studentSearch = Array();
    if(studentList != null){
        studentList.forEach(std => {
            if(std.fullname == textSearch){
                studentSearch.push(new Student(std.id, std.fullname, std.code, std.className, std.faculty, std.maths, std.physics, std.chemistry));
                kt = true;
            }
        })
        renderStudentSearch();
        (kt == false) ? alert('Không tìm thấy sinh viên trùng khớp') : '';
    }
}

function renderStudentSearch() {
    rootDom.innerHTML = '';
    if(studentSearch != null){
        studentSearch.forEach(student => {
            rootDom.appendChild(createNodeStudent(student));
        });
    };
}


// THÊM DỮ LIỆU __________________________
function dataStudent() {
    std1 = new Student(1, 'Lê Văn Quang', '2060060', '21CDTH11', 'IT', parseInt(Math.random() * 10), parseInt(Math.random() * 10), parseInt(Math.random() * 10));
    std2 = new Student(2, 'Nguyễn Anh Quốc', parseInt(Math.random() * 10000000), '20CDTH41', 'CNTT', parseInt(Math.random() * 10), parseInt(Math.random() * 10), parseInt(Math.random() * 10));
    std3 = new Student(3, 'Thành Long', parseInt(Math.random() * 10000000), '21CDTH11', 'IT', parseInt(Math.random() * 10), parseInt(Math.random() * 10), parseInt(Math.random() * 10));
    std4 = new Student(4, 'Công Tuấn', parseInt(Math.random() * 10000000), '20CDTH41', 'CNTT', parseInt(Math.random() * 10), parseInt(Math.random() * 10), parseInt(Math.random() * 10));
    std5 = new Student(5, 'Thanh Nhật', parseInt(Math.random() * 10000000), '21CDTH11', 'CNTT', parseInt(Math.random() * 10), parseInt(Math.random() * 10), parseInt(Math.random() * 10));
    std6 = new Student(6, 'Anh Quốc', parseInt(Math.random() * 10000000), '20CDTH41', 'IT', parseInt(Math.random() * 10), parseInt(Math.random() * 10), parseInt(Math.random() * 10));
    std7 = new Student(7, 'Lê Văn Quang', parseInt(Math.random() * 10000000), '20CDTH11', 'CNTT', parseInt(Math.random() * 10), parseInt(Math.random() * 10), parseInt(Math.random() * 10));
    std8 = new Student(8, 'Nguyễn Thị Như', parseInt(Math.random() * 10000000), '21CDTH11', 'IT', parseInt(Math.random() * 10), parseInt(Math.random() * 10), parseInt(Math.random() * 10));
    std9 = new Student(9, 'Nguyễn Hoàng Anh', parseInt(Math.random() * 10000000), '20CDTH41', 'CNTT', parseInt(Math.random() * 10), parseInt(Math.random() * 10), parseInt(Math.random() * 10));
    std10 = new Student(10, 'Công Tuấn', parseInt(Math.random() * 10000000), '21CDTH11', 'IT', 10, 8, 9);
    std11 = new Student(11, 'Lê Phú Nhật', parseInt(Math.random() * 10000000), '20CDTH41', 'IT', 9, 8, 9);
    std12 = new Student(12, 'Trần Thiện', parseInt(Math.random() * 10000000), '20CDTH41', 'CNTT', 9, 10, 9);
    std13 = new Student(13, 'Lê Văn Quang', parseInt(Math.random() * 10000000), '21CDTH11', 'CNTT', 10, 9, 9);
    std14 = new Student(14, 'Nhật Tân', parseInt(Math.random() * 10000000), '20CDTH41', 'CNTT', 8, 8, 8);
    studentList.push(std1);
    studentList.push(std2);
    studentList.push(std3);
    studentList.push(std4);
    studentList.push(std5);
    studentList.push(std6);
    studentList.push(std7);
    studentList.push(std8);
    studentList.push(std9);
    studentList.push(std10);
    studentList.push(std11);
    studentList.push(std12);
    studentList.push(std13);
    studentList.push(std14);
}