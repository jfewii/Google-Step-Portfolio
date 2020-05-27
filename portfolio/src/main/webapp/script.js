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

// modalbtn opens the first modal
function Intromodal() {
    let button = document.getElementById("Intro");
    let modal = document.getElementById("myIntroModal");
    modal.style.display = "block";
}

// modalbtn2 opens the second modal
function Picturemodal() {
    let button = document.getElementById("Pictures");
    let modal = document.getElementById("myPictureModal");
    modal.style.display = "block";
}

// modalbtn3 opens the third modal
function Connectmodal() {
    let button = document.getElementById("Connect");
    let modal = document.getElementById("myConnectModal");
    modal.style.display = "block";
}

// spanbtn closes the first modal
function spanbtn(){
    let span = document.getElementsByClassName("close")[0];
    let modal = document.getElementById("myIntroModal");
    modal.style.display = "none";
}

// spanbtn closes the second modal
function spanbtn2(){
    let span = document.getElementsByClassName("close")[0];
    let modal = document.getElementById("myPictureModal");
    modal.style.display = "none";
}

// spanbtn closes the third modal
function spanbtn3(){
    let span = document.getElementsByClassName("close")[0];
    let modal = document.getElementById("myConnectModal");
    modal.style.display = "none";
}

// closes modal wehen user clicks outside of modal
window.onclick = function(event) {
  let modal = document.getElementById("myIntroModal");
  let modal2 = document.getElementById("myPictureModal");
  let modal3 = document.getElementById("myConnectModal");
  if (event.target == modal) modal.style.display = "none";
  if (event.target == modal2) modal2.style.display = "none";
  if (event.target == modal3) modal3.style.display = "none";
}
