// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const MAX_QUESTIONS = 9;

function randomizeImage() {
  // The images directory contains 13 images, so generate a random index between
  // 1 and 13.
  const imageIndex = Math.floor(Math.random() * 24) + 1;
  const imgUrl = 'images/jfew-' + imageIndex + '.jpg';

  const imgElement = document.createElement('img');
  imgElement.src = imgUrl;

  const imageContainer = document.getElementById('random-image-container');
  // Remove the previous image.
  imageContainer.innerHTML = '';
  imageContainer.appendChild(imgElement);
}

function openIntroModal() {
  const modal = document.getElementById("myIntroModal");
  modal.style.display = "block";
}

function openPictureModal() {
  const modal = document.getElementById("myPictureModal");
  modal.style.display = "block";
}

function openMachineModal() {
  const modal = document.getElementById("myMachineModal");
  modal.style.display = "block";
}

function openSpotifyModal() {
  const modal = document.getElementById("mySpotifyModal");
  modal.style.display = "block";
}

function openConnectModal() {
  const modal = document.getElementById("myConnectModal");
  modal.style.display = "block";
}

function openQuestionModal() {
  const modal = document.getElementById("myQuestionModal");
  modal.style.display = "block";
}

function openViewModal() {
  const modal = document.getElementById("myQuestionViewModal");
  modal.style.display = "block";
  fetch('/data').then(response => response.json()).then((questions) => {
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = "";
    for (let i = 0; i < questions.length && i < MAX_QUESTIONS; i++) {
      const createElement = document.createElement("li");
      const createNode = document.createTextNode(questions[i].name + " asked: " + questions[i].text);
      createElement.appendChild(createNode);
      questionContainer.appendChild(createElement);
    }
  });    
}

function closeIntroModal() {
  const modal = document.getElementById("myIntroModal");
  modal.style.display = "none";
}

function closePictureModal() {
  const modal = document.getElementById("myPictureModal");
  modal.style.display = "none";
}

function closeMachineeModal() {
  const modal = document.getElementById("myMachineModal");
  modal.style.display = "none";
}

function closeSpotifyModal() {
  const modal = document.getElementById("mySpotifyModal");
  modal.style.display = "none";
}

function closeConnectModal() {
  const modal = document.getElementById("myConnectModal");
  modal.style.display = "none";
}

function closeQuestionModal() {
  const modal = document.getElementById("myQuestionModal");
  modal.style.display = "none";
}

function closeViewModal() {
  const modal = document.getElementById("myQuestionViewModal");
  modal.style.display = "none";
}

window.onclick = function(event) {
  const introModal = document.getElementById("myIntroModal");
  const pictureModal = document.getElementById("myPictureModal");
  const machineModal = document.getElementById("myMachineModal");  
  const spotifyModal = document.getElementById("mySpotifyModal");  
  const questionModal = document.getElementById("myQuestionModal");
  const viewModal = document.getElementById("myQuestionViewModal");
  const connectModal = document.getElementById("myConnectModal");
  if (event.target === introModal) introModal.style.display = "none";
  if (event.target === pictureModal) pictureModal.style.display = "none";
  if (event.target === machineModal) machineModal.style.display = "none";  
  if (event.target === spotifyModal) spotifyModal.style.display = "none";  
  if (event.target === questionModal) questionModal.style.display = "none";
  if (event.target === viewModal) viewModal.style.display = "none";  
  if (event.target === connectModal) connectModal.style.display = "none";
}
