"use strict";
let input = document.querySelectorAll("textarea")[0],
    characterCount = document.querySelector("#characterCount"),
    wordCount = document.querySelector("#wordCount"),
    sentenceCount = document.querySelector("#sentenceCount"),
    paragraphCount = document.querySelector("#paraCount");

    input.addEventListener("keyup", function() {
       characterCount.innerHTML = input.value.length;

       let words = input.value.match(/\b[-?(\w+)?]+\b/gi);
       if(words){
         wordCount.innerHTML = words.length;
       } else {
           wordCount.innerHTML = 0;
       }

       if(words){
         let sentences = input.value.split(/[.|!|?]+/g);
         sentenceCount.innerHTML = sentences.length-1;
       } else{
           sentenceCount.innerHTML = 0;
       }
       if(words){
         let paragraphs = input.value.replace(/\n$/gm, "").split(/\n/);
         paragraphCount.innerHTML = paragraphs.length; 
       } else{
           paragraphCount.innerHTML = 0;
       }
     });