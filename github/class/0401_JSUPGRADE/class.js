class House {
  //constructor: 생성자 함수
  //house라는 클래스의 속성을 초기화
  constructor(name, age, window) {
    this.name = name; //네이므 값을 받겠다
    this.age = age;
    this.window = window;
  }
  //메서드
  consoleInfo() {
    console.log(
      `이 아파트의 이름은 ${this.name}이고 ${this.age}년 건축되었습니다.`
    );
  }

  consoleWindow() {
    console.log(`${this.name} 아파트의 창문 ${this.window}개 입니다`);
  }
}

const house1 = new House("고덕 그라시움", 2020, 10);
console.log(house1);
console.log(typeof house1);
house1.consoleInfo();
