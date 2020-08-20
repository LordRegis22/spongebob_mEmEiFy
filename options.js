// document.querySelector('body').style.backgroundColor = 'blue';

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? 'from a content script:' + sender.tab.url
      : 'from the extension'
  );
  if (request.greeting == 'hello') {
    SpongeAllElements(elementStringArray);
    console.log('helloHelloHello');
    console.log('hellohellohello');
    console.log('helloHelloHello');
    console.log('helloHelloHello');
    console.log('helloHelloHello');
  }
});

const elementStringArray = [
  'p',
  'a',
  'li',
  'b',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'button',
  'td',
  'th',
  'pre',
  'span',
];

const imageArray = document.querySelectorAll('img');
function spongeBobImage(array) {
  for (let el of array) {
    el.src =
      'https://i.kym-cdn.com/entries/icons/original/000/022/940/mockingspongebobbb.jpg';
  }
}

function SpongeAllElements(array) {
  array.forEach((elementType) => {
    //set variable equal to queryselectorAll for each element type
    const nodeList = document.querySelectorAll(elementType);
    //invoke spongebobify on the variable we just created
    SpongeBobify(nodeList);
    spongeBobImage(imageArray);
  });
  //change all images to
}

//'div',

//invoke function

function SpongeBobify(nodeList) {
  for (let el of nodeList) {
    //each ele is a p tag.
    //set variable equal to an empty string
    if (el.innerText) {
      let newText = '';

      //Loop through every character of el.innerText
      for (let i = 0; i < el.innerText.length; i++) {
        //if i is even -> concatonate the result of calling to lowercase on character to the empty string
        if (i % 2 === 0) {
          newText += el.innerText[i].toLowerCase();

          //if i is odd -> concatonate the result of calling to uppercase on character to the empty string
        } else {
          newText += el.innerText[i].toUpperCase();
        }
      }
      // console.log(newText);
      //outside of loop:
      //update the value of ele.innerText to the newly created string
      el.innerText = newText;
    }
  }
}

// let startOnPageButton = document.getElementById('startOnPage');
// console.log(document);
// startOnPageButton.addEventListener('click', () =>
//   SpongeAllElements(elementStringArray)
// );
