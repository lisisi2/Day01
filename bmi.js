//1.变量存储Mark和John的体重以及身高；
let M_height = 1.85,M_Mass = 61;//声明变量：存储Mark的身高，体重
let J_height = 1.75,J_Mass = 55;//声明变量：存储John的身高，体重
//2.变量存储Mark和John的体重以及身高；
let M_BIM = M_Mass / (M_height * M_height);
let J_BIM = J_Mass / (J_height * J_height);
console.log("Mark的BIM值为:",M_BIM);
console.log("John的BIM值为:",J_BIM);
//3.创建一个布尔变量，用来包含Mark的BMI是否比John更高；
let compare;compare = (M_BIM > J_BIM) ? true : false;
console.log(compare);

//4. 打印一个字符串到控制台，包含第三步的变量（比如"Mark的BMI是否比John更高？true"）
console.log("Mark的BIM是否比John的更高？",String(compare));

