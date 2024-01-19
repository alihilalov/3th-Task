const studentProfile = {
  name: "Ali",
  age: 19,
  course: "EAcampSchool",
  hobbies: ["Gym", "Chess", "Football"],
};

const { name, age, ...rest } = studentProfile;
console.log(name, age, rest);

studentProfile["newAge"] = studentProfile["age"];
delete studentProfile.age;
console.log(studentProfile);

const grades = [98, 89, 89, 87];
console.log(grades[0], grades[1]);

const additionalInfo = {
  phone: 13281893,
  address: "My Address",
};

const compliteProfile = { ...additionalInfo, ...studentProfile };
console.log(compliteProfile);
