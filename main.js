document.addEventListener('DOMContentLoaded', init);

var nameList = [];
// var teams = [];
// var randomName = '';

function init() {
   document.querySelector('.add-names').addEventListener('click', addNames);
   document.querySelector('.clear-names').addEventListener('click', clearNames);
   document.querySelector('.pick-random').addEventListener('click', pickRandom);
   document.querySelector('.make-teams').addEventListener('click', makeTeams);
}

function addNames() {
   var names = document.querySelector('#name-box').value.split(',').filter(clean);

   function clean(e) {
      return e && e !== " ";
   }

   for (var i = 0; i < names.length; i++) {
      var name = document.createElement('span');
      name.classList.add('name');
      var text = document.createTextNode(names[i] + ' ');
      name.appendChild(text);
      document.querySelector('.name-display').appendChild(name);
      nameList.push(names[i]);
   }
   document.querySelector('#name-box').value = '';

   // make sure number picker can't make teams larger than number of people
   document.querySelector('#teams-number').setAttribute('max', nameList.length);

   console.log(nameList);
}

function clearNames() {
   document.querySelector('.name-display').innerHTML = '';
   nameList = [];
   console.log(nameList)
}

function pickRandom() {
   document.querySelector('.random-display').innerHTML = '';
   if (true) {}
   var random = Math.floor(Math.random() * nameList.length);
   var name = document.createElement('span');
   var text = document.createTextNode(nameList[random]);
   name.appendChild(text);
   document.querySelector('.random-display').appendChild(name);
}

function makeTeams() {
   document.querySelector('.team-display').innerHTML = '';
   var teamSize = document.querySelector('#teams-number').value;
   //console.log('teamSize:', teamSize);
   var numOfTeams = Math.ceil(nameList.length / teamSize);
   //console.log('numOfTeams:', numOfTeams);
   var shufArr = shuffle(nameList);
   console.log(shufArr);
   var teams = [];

   for (var i = 0; i < numOfTeams; i++) {
      //console.log('team:' + (i + 1));
      var card = document.createElement('ul');
      card.classList.add('team-list');
      //console.log('card classList:', card.classList);
      var li = document.createElement('li');
      //console.log('li:', li);
      li.classList.add('team-header');
      //console.log('li classList:', li.classList);
      li.textContent = 'team:' + (i + 1);
      card.appendChild(li);
      //console.log(card);
      for (var j = 0; j < teamSize; j++) {
         if (shufArr.length > 0) {
            //console.log("student");
            var student = document.createElement('li');
            student.textContent = shufArr.pop();
            //console.log('student:', student);
            card.appendChild(student);
         }

      }
      //console.log('card:', card);
      document.querySelector('.team-display').appendChild(card);
   }
}

function shuffle(arr) {
   var result = [];
   var used = [];
   while (result.length < nameList.length) {
      var random = Math.floor(Math.random() * nameList.length);
      if (used.indexOf(random) === -1) {
         result.push(nameList[random]);
         used.push(random);
      }
   }
   return result;
}
