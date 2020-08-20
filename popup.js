document.addEventListener(
  'DOMContentLoaded',
  function () {
    startOnPageButton = document.getElementById('startOnPage');
    startOnPageButton.addEventListener(
      'click',
      function () {
        if (buttonClickCounter < 1) {
          document.querySelector('h1').innerText = "I can't HEAAR you!!";
          startOnPageButton.innerText = 'AYE AYE, CAPTAIN!!';
          startOnPageButton.style.fontSize = '1.5rem';
          startOnPageButton.style.width = 'auto';
          buttonClickCounter++;
        } else {
          document.querySelector('body').style.backgroundImage =
            'url(./sponge.jpeg)';
          document.querySelector('h1').innerText = 'OOOOOOOHHHH';
          document.querySelector('h1').classList.add('animated');
          document.querySelector('button').remove();
          setTimeout(
            () =>
              chrome.tabs.query(
                { active: true, currentWindow: true },
                function (tabs) {
                  chrome.tabs.sendMessage(
                    tabs[0].id,
                    { greeting: 'hello' },
                    function (response) {
                      console.log(response.farewell);
                    }
                  );
                }
              ),
            3000
          );
        }
      },
      false
    );
  },
  false
);

let buttonClickCounter = 0;
