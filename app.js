var getbutton = document.querySelector("#trans");
var inptext = document.querySelector("#inp-txt");
var outbox = document.querySelector("#output-box");

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getUrl(text)
{
    return serverUrl + "?" + "text=" + text
}

function clickHandler()
{
    var inputText = inptext.value; 


fetch(getUrl(inputText))
    .then(response => response.json())
    .then(json => { var transText = json.contents.translated;
    outbox.innerText = transText;
    })
};
getbutton.addEventListener("click", clickHandler)

