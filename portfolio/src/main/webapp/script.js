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

function openIntromodal() {
  const button = document.getElementById("Intro");
  const modal = document.getElementById("myIntroModal");
  modal.style.display = "block";
}

function openPicturemodal() {
  const button = document.getElementById("Pictures");
  const modal = document.getElementById("myPictureModal");
  modal.style.display = "block";
}

function openConnectmodal() {
  const button = document.getElementById("Connect");
  const modal = document.getElementById("myConnectModal");
  modal.style.display = "block";
}

function closeIntromodal(){
  const span = document.getElementsByClassName("close")[0];
  const modal = document.getElementById("myIntroModal");
  modal.style.display = "none";
}

function closePicturemodal(){
  const span = document.getElementsByClassName("close")[0];
  const modal = document.getElementById("myPictureModal");
  modal.style.display = "none";
}

function closeConnectmodal(){
  const span = document.getElementsByClassName("close")[0];
  const modal = document.getElementById("myConnectModal");
  modal.style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("myIntroModal");
  const modal2 = document.getElementById("myPictureModal");
  const modal3 = document.getElementById("myConnectModal");
  if (event.target == modal) modal.style.display = "none";
  if (event.target == modal2) modal2.style.display = "none";
  if (event.target == modal3) modal3.style.display = "none";
}
