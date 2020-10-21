// 기술면접에서 많이 물어봐질 수 있음

// 1. join : array 값을 string 값으로 변환해줌
{
const fruits = ['apple' , 'banana','orange'];
const result = fruits.join(); //default : ,  ' and ' 넣으면 and 를 넣어줌
console.log(result);
}
// 2. split: string 값을 array로 만들어줌
const fruits = '사과 ,멜론 , 바나나 , 자두';
const result = fruits.split(',' , 2);  //'구분자' , 몇개의 index를 만들것인가
console.log(result);

// 3. reverse() : 값을 거꾸로 출력해줌 , 배열 자체도 거꾸로 출력시킴
{
    const array= [1,2,3,4,5];
    const result = array.reverse();
    console.log(result);
    console.log(array);
}

// 4. splice : 삭제된 값이 return 됨
{
    const array = [1,2,3,4,5];
    const result = array.splice(0,2);
    console.log(result);
    console.log(array);
}

// 5. slice : 배열의 특정한 부분을 새로운 배열로 만들어줌 (원래의 array는 안건듬)
{
    const array = [1,2,3,4,5];
    const result = array.slice(2, 5); //start index , last index 마지막은 index는 배제댐
    console.log(result);
    console.log(array);
}

class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];

//   6. find : student 의 score 90 점인 학생을 찾는 것
{
    // const result = students.find(function(student) { 
    //     // console.log(student);
    //     return student.score === 90;
    // }); 아래랑 같음

    const result = students.find((students) => students.score ===90);
    console.log(result);
}

// 7. fillter:  enrolled 이 true 인것만 골라내 배열로 만드는 것
{
    const result = students.filter((students) => students.enrolled === true);
    console.log(result);
}

// 8. map : score 점수만 배열로 만드는 것
{
    const result = students.map((students) => students.score * 2);
    console.log(result);
}

// 9. 50점 아래에 있는 학생이 한명이라도 있는지 확인 
{
    const result = students.some((students) => students.score < 50);
    console.log(result);

    const result2 = students.every((students) => students.score >= 50);
    console.log(result2);
    // 모든 학생의 점수가 50점보다 이상이면 true 
}

// 10. reduce : 배열 하나하나 돌면서 값을 누적할때 
// 모든 점수의 평균을 구하는 것
{ 
    // const result = students.reduce((prev , curr) => {
    //     console.log(prev);
    //     console.log(curr);
    //     console.log('---------------------')
    //     return prev + curr.score;
    // } , 0);


    // prev 값은 마지막에 return 한 값이 prev 값으로 들어감 return 값이 없으면 undefined 값이 됨
    // prev : 이전값 curr: 순차적으로 출력
    // reduce 함수는 return 값을 해줘야댐            요기가 return 값
    const result = students.reduce((prev , curr) => prev + curr.score, 0); //0은 첫번째 값
    console.log(result / students.length);
}

// 11. students.socre 을 string 값으로 변환해서 만드는 것 
{
    // const result = students.map((students) => students.score);
    // const result2 = result.join();
    // console.log(result2);
     
    const result = students.map((students) => students.score).join();
    console.log(result);

    // 50점 이상인 점수들만 출력
    const result2 = students.map((students) => students.score)
    .filter((score) => score >=50)
    .join();
    console.log(result2);

}

// 12. sort() : students.score 변환해서 낮은 점수순으로 string 형태로 변환
//     sort() : 낮은순으로 변환
//     .sort((a,b) => b-a) a,b가 있는데 b에서 a를 빼서 -값이 나오면 앞에 출력 
//     .sort((a,b) => b-a) 높은순 출력
{
    const result = students.map((students) => students.score)
    .sort() 
    .join();
    console.log(result);
}