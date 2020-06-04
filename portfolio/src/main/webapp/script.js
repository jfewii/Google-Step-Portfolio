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

/**
 * Adds a random greeting to the page.
 */
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

function displayQuestion() {
  console.log("called displayQuestion");
  fetch('/data').then(response => response.json()).then((Questions) => {
  const questionContainer = document.getElementById("question-container");
  var createPelement = document.createElement("p");
  var createNode = document.createTextNode("Name: " + Questions.name + "asked: " + Questions.question);
  createPelement.appendChild(createNode);
  questionContainer.appendChild(node);
  console.log(Questions.name);      
  });
}

function openIntroModal() {
  const modal = document.getElementById("myIntroModal");
  modal.style.display = "block";
}

function openPictureModal() {
  const modal = document.getElementById("myPictureModal");
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

function closeIntroModal() {
  const modal = document.getElementById("myIntroModal");
  modal.style.display = "none";
}

function closePictureModal() {
  const modal = document.getElementById("myPictureModal");
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

window.onclick = function(event) {
  const introModal = document.getElementById("myIntroModal");
  const pictureModal = document.getElementById("myPictureModal");
  const questionModal = document.getElementById("myQuestionModal");
  const connectModal = document.getElementById("myConnectModal");
  if (event.target === introModal) introModal.style.display = "none";
  if (event.target === pictureModal) pictureModal.style.display = "none";
  if (event.target === questionModal) questionModal.style.display = "none";
  if (event.target === connectModal) connectModal.style.display = "none";
}
