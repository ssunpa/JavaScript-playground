// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const str_fruits = fruits.toString();
    const str_fruits2 = fruits.join(' ');
    console.log('Q1_Answer.');
    console.log(str_fruits);
    console.log(str_fruits2);
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    console.log('Q2_Answer.');
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const reverse_arr = array.reverse();
    console.log('Q3_Answer.');
    console.log(reverse_arr);
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const new_arr = array.slice(2);
    console.log('Q4_Answer.');
    console.log(new_arr);
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

// Q5. find a student with the score 90
{
    const score90 = students.find((student) => student.score == 90);
    console.log('Q5_Answer.');
    console.log(score90);
}

// Q6. make an array of enrolled students
{
    const enrolled = students.filter((student) => student.enrolled);
    console.log('Q6_Answer.');
    console.log(enrolled);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const scores = students.map((student) => student.score);
    console.log('Q7_Answer.');
    console.log(scores);
}

// Q8. check if there is a student with the score lower than 50
{
    const check = students.some((student) => student.score < 50);
    console.log('Q8_Answer.');
    console.log(check);
}

// Q9. compute students' average score
{
    const scores = students.map((student) => student.score);
    const sum = scores.reduce((pre, cur) => pre + cur);
    const avg = sum / scores.length;
    console.log('Q9_Answer.');
    console.log(avg);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const scores = students.map((student) => student.score).join(', ');
    console.log('Q10_Answer.');
    console.log(scores);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const scores = students
        .map((student) => student.score)
        .sort()
        .join(', ');
    console.log('bonus_Answer.');
    console.log(scores);
}
