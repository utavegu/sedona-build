var menuToggleSection=document.querySelector(".main-navigation__toggle-section"),menuToggleButton=document.querySelector(".main-navigation__toggle-button"),menuClose=document.querySelector(".site-list__close"),menuNavigation=document.querySelector(".site-list");window.onload=function(){document.body.clientWidth<=320?(menuNavigation.classList.add("hidden"),menuToggleButton.classList.add("appear")):(menuNavigation.classList.remove("hidden"),menuToggleSection.classList.remove("appear"),menuClose.classList.remove("appear"))},menuToggleButton.addEventListener("click",function(e){e.preventDefault(),menuNavigation.classList.remove("hidden"),menuClose.classList.add("appear"),menuToggleButton.classList.remove("appear")}),menuClose.addEventListener("click",function(e){e.preventDefault(),menuNavigation.classList.add("hidden"),menuClose.classList.remove("appear"),menuToggleSection.classList.add("appear"),menuToggleButton.classList.add("appear")});var formSubmitButton=document.querySelector(".feedback__button"),popupSuccessWindow=document.querySelector(".popup--success"),popupFailureWindow=document.querySelector(".popup--failure"),popupSuccessButton=document.querySelector(".popup-success__button"),popupFailureButton=document.querySelector(".popup-failure__button"),fieldName=document.querySelector("#forename"),fieldSurname=document.querySelector("#surname"),fieldPhone=document.querySelector("#phone"),fieldEmail=document.querySelector("#e-mail");formSubmitButton.addEventListener("click",function(e){fieldName.value&&fieldSurname.value&&fieldPhone.value&&fieldEmail.value?(e.preventDefault(),popupSuccessWindow.classList.add("is-opened")):popupFailureWindow.classList.add("is-opened")}),popupSuccessButton.addEventListener("click",function(e){e.preventDefault(),popupSuccessWindow.classList.remove("is-opened")}),popupFailureButton.addEventListener("click",function(e){e.preventDefault(),popupFailureWindow.classList.remove("is-opened")});