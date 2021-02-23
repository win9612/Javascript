
class student{
    #stAge = 0; // private 변수 선언
    stName = "boy"; // public 변수 선언

    // class 생성자
    constructor(age, name){
        this.#stAge = age;
        this.stName = name;
    }

    static graduate(){
        return 2022;
    }

    // Getter
    get propAge(){
        return this.stAge;
    }

    // 객체 내 함수
    giveGrade(grade){
        document.write(this.stName + "의 학점은 " + grade + "입니다.<br>");
    }
}

// 객체 생성
const mingyu = new student(26, "mingyu");
var gnnam = new student(25, "gnnam");

// 객체 변수 사용
document.write(mingyu.stAge + "<br>");
document.write(mingyu.stName + "<br>");
document.write(gnnam.stName + "<br>");

// 객체 함수 사용
mingyu.giveGrade('A+');

// Getter 사용
document.write(mingyu.propAge + "<br>");



