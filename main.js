var playerArea = document.querySelector('#playerArea');
var playerBtn = document.querySelector('#playerBtn');
var comp1Area =document.querySelector('#comp1Area');
var comp1Btn = document.querySelector('#comp1Btn');
var comp2Area = document.querySelector('#comp2Area');
var comp2Btn = document.querySelector('#comp2Btn');
var comp3Area = document.querySelector('#comp3Area');
var comp3Btn = document.querySelector('#comp3Btn');
var startBtn = document.querySelector('#startBtn');
var infoDiv = document.querySelector('#info');
var texts = ['Danas je divan dan', 'Sutra je divan dan', 'Jučer je bio divan dan', 'Tražim posao u IT oblasti', 'Završio sam Mašinski fakultet u Sarajevu', 'Bosna igrala neriješeno sa Grčkom'];
var rand;
var pozicija = 0;
startBtn.addEventListener('click', timer);

function timer() {
  var time = 2;
  startBtn.innerHTML = time;
  var loop = setInterval (function () {
    time--;
    startBtn.innerHTML = time;
    if (time === 0) {
      clearInterval (loop);
      startBtn.style.display = 'none';
      startTyping();
    }
  }, 1000)
}
function startTyping() {
  rand = Math.floor(Math.random()*texts.length);
  infoDiv.innerHTML = '<h3>'+ texts[rand]+'</h3>';
  infoDiv.style.display = 'block';
  playerArea.focus();
  comp1StartTyping();
  comp2StartTyping();
  comp3StartTyping();
  playerStartTyping();
}

function playerStartTyping() {
  playerArea.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
      var userText = playerArea.value.trim();
      if (userText == texts[rand]){
        console.log('Tacno');
        pozicija++;
        playerBtn.className='btn btn-success form-control';
        playerBtn.innerText='Position:'+ pozicija;
      }else{
        console.log('Nije tacno');
        playerBtn.className='btn btn-danger form-control';
        playerBtn.innerText='Wrong text';
      }
    }
  })
}

function comp1StartTyping() {
  var text = texts [rand];
  var textArray = text.split('');
  var loop = setInterval(function () {
    if (textArray.length != 0) {
      comp1Area.value += textArray.shift();
    }else {
      clearInterval (loop);
      pozicija++;
      comp1Btn.className='btn btn-success form-control';
      comp1Btn.innerText='Position:'+ pozicija;
    }
  },350)
  console.log(textArray);
}
function comp2StartTyping() {
  var text = texts [rand];
  var textArray = text.split('');
  var loop = setInterval(function () {
    if (textArray.length != 0) {
      comp2Area.value += textArray.shift();
    }else {
      clearInterval (loop);
      pozicija++;
      comp2Btn.className='btn btn-success form-control';
      comp2Btn.innerText='Position:'+ pozicija;
    }
  },250)
  console.log(textArray);
}
function comp3StartTyping() {
  var text = texts [rand];
  var textArray = text.split('');
  var loop = setInterval(function () {
    if (textArray.length != 0) {
      comp3Area.value += textArray.shift();
    }else {
      clearInterval (loop);
      pozicija++;
      comp3Btn.className='btn btn-success form-control';
      comp3Btn.innerText='Position:'+ pozicija;
    }
  },370)
  console.log(textArray);
}
