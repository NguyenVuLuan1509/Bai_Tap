// link các hàm js: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// link cài yarn: https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable 


const data = [
    { name: "Tung", age: 27, isSchool: false },
    { name: "Khoa", age: 20, isSchool: true },
    { name: "Triet", age: 18, isSchool: false },
    { name: "Hong", age: 15, isSchool: false },
    { name: "Tring", age: 10, isSchool: false },
  ];
  // 1: Tìm tất cả những người có tuổi lớn hơn 18
  // 2: Tìm tất cả những người còn đang đi học
  // 3: Tính trung bình tuổi

 function findPeopleByAge(data){
    for(let i=0; i<data.length; i++){
        if(data[i].age > 18){
            console.log(data[i]);
        }
    }
}

function findIsSchool(data){
    for(let i=0; i<data.length; i++){
        if(data[i].isSchool){
            console.log(data[i]);
        }
    }
}

function avgAge(data){
    let sum =0;
    for(let i=0; i<data.length; i++){
        sum += data[i].age;
    }
        let tb= sum/data.length;
        console.log('Tuổi trung bình là:',tb);
}

console.log("Câu 1: Tìm tất cả những người có tuổi lớn hơn 18?");
findPeopleByAge(data);
console.log("Câu 2: Tìm tất cả những người còn đang đi học?");
findIsSchool(data);
console.log("Câu 03: Tính trung bình tuổi?");
avgAge(data);
    
