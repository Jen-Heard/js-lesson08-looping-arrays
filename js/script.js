var programmingLanguages = [
  "Scala",
  "Java",
  "Go",
  "Swift",
  "Cobol",
  "JavaScript",
  "Python",
  "Ruby",
  "Elm",
  "Rust",
  "C#"
];
console.log(programmingLanguages);

for (var language of programmingLanguages) {
  console.log(`I want to learn ${language}`);
};

programmingLanguages.forEach(function (item, index) {
  console.log(`${index + 1}. ${item}`);
});

var updatedLanguages = programmingLanguages.filter(function (item) {
  return item.includes("y");
});

console.log(updatedLanguages);