console.log(document);

const heading = document.querySelector("h1");
console.log(heading);

const value = document.querySelector(".banner");
console.log(value);

const button = document.querySelector("button");
console.log(button);

const area = document.querySelector(".area-display");
console.log(area);

const div = document.querySelector("div .stat");
console.log(div);

const hello = document.querySelector("hello");
console.log(hello);

const buttons = document.querySelectorAll("button");
console.log(buttons);

const heading3List = document.querySelectorAll("h3");

// Iterate over the list and print each one
for (let element of heading3List.values()) {
  console.log(element);
}


//  using let of to array over object
const divRating = document.querySelectorAll("div .rating-display") 
for (let divRate of divRating.values()) {
    console.log(divRate);
}

//  using for loop to array over object
const divArea = document.querySelectorAll("div .area-display")
for (let i = 0; i < divArea.length; i++) {
    const divElement = divArea[i];
    console.log(divElement);
  }