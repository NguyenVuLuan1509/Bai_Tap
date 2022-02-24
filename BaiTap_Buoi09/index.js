//link bài tập JS: https://docs.google.com/document/d/1dOKBt0epsxVNdcXwuHWlZrerUVuudlpXFFUrp2FxsXY/mobilebasic 

//Câu 11: Đếm số khoảng trắng có trong chuỗi?

function countKhoangTrang(str){
    let count = 0;
    for(let i=0; i< str.length; i++){
        if(str[i]== " ") count++;
    }

    console.log('Số khoảng trắng của chuỗi là: ' + count);
}

// Câu 12: Xóa các khoảng trắng và enter trong một chuỗi?

function removeKhoangTrang(remove){
    tachKyTu= remove.split(" "); //['', 'Hello', 'world', '']
    ketNoiKytu= tachKyTu.join('');

    console.log('Chuỗi đã xóa khoảng trắng là: ' + ketNoiKytu);
}

//Câu 13: Đảo ngược chuỗi?

function daoNguocChuoi(daonguoc){
    console.log('Chuỗi ban đầu là:');
    console.log(daonguoc);
    //> aiueo

    //Dùng split('') để chuyển chuỗi ban đầu thành mảng
    let chuyenmang = daonguoc.split('');
    console.log(chuyenmang);
    //> [ 'a', 'i', 'u', 'e', 'o' ]

    //Dùng reverse() để đảo ngược mảng 
    l_reverse = chuyenmang.reverse();
    console.log(l_reverse);
    //> [ 'o', 'e', 'u', 'i', 'a' ]

    //Dùng join('') để chuyển mảng kết quả về dạng chuỗi
    daonguoc = l_reverse.join('');
    console.log(daonguoc);
    //> oeuia
}

// Câu 14: Chuẩn hóa họ tên? 

function chuanHoaHoTen(hoten){
    hoten= hoten.toLowerCase();
    for(let i=0; i<hoten.length; i++){
        if(i ==0 || hoten.charAt(i-1)== " "){
            hoten.slice(0,i); 
            hoten.charAt(i).toUpperCase();
            hoten.slice(i+1); 
        }
        hoten= hoten.slice(0,i) + hoten.charAt(i).toUpperCase() + hoten.slice(i+1); 
    }
    
}

countKhoangTrang(' Hello  world ');
removeKhoangTrang(' Hello  world ');
daoNguocChuoi(' Hello  world ');
chuanHoaHoTen("trAn tUan anH");

// const toNomalName = (name) => {
//     name = name.toLowerCase();
//     for (let i = 0; i < name.length; i++) {
//       if (i == 0 || name.charAt(i - 1) == " ") {
//         console.log(
//           "1",
//           name.slice(0, i),"2", name.charAt(i).toUpperCase(),"3", name.slice(i + 1)
//         );
//         name =
//           name.slice(0, i) + name.charAt(i).toUpperCase() + name.slice(i + 1);
//       }
//     }
//     return name;
//   };
  
//   toNomalName("trAn tUan anH");