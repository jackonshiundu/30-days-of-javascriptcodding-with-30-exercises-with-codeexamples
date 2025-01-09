/* What is Intl and why is it used?
Answer: The Intl object is used for intezrnationalization and localization, including date and time formatting, number formatting, and string comparison. */

let number = 123456.789;

console.log(new Intl.NumberFormat("de-US").format(number)); // "123.456,789"
console.log(new Intl.NumberFormat("en-US").format(number)); // "1,23,456.789"
