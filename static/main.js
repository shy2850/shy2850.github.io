"use strict";document.addEventListener("DOMContentLoaded",function(){function t(t){return Array.prototype.slice.call(document.querySelectorAll(t),0)}var e=t(".dropdown:not(.is-hoverable)");e.length>0&&(e.forEach(function(t){t.addEventListener("click",function(e){e.stopPropagation(),t.classList.toggle("is-active")})}),document.addEventListener("click",function(t){e.forEach(function(t){t.classList.remove("is-active")})}));var n=t(".burger");n.length>0&&n.forEach(function(t){t.addEventListener("click",function(){var e=t.dataset.target,n=document.getElementById(e);t.classList.toggle("is-active"),n.classList.toggle("is-active")})})});