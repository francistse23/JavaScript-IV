// CODE here for your Lambda Classes
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }

  givePoints(student) {
    if (student.grade < 70) {
      return (student.grade += Math.floor(Math.random() * 10));
    } else {
      return (student.grade -= Math.floor(Math.random() * 10));
    }
  }
}

class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
    this.grade = 80;
  }

  graduate(instructor) {
    this.grade >= 70
      ? console.log("Congratulations!")
      : instructor.givePoints(this);
  }

  listsSubjects() {
    console.log(this.favSubjects.forEach(subject => console.log(subject)));
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectManager extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }

  debugCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}
