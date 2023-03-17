import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");
  
  if (sign_up_btn) {
    sign_up_btn.addEventListener("click", () => {
      if (container) {
        container.classList.add("sign-up-mode");
      }
    });
  }
  
  if (sign_in_btn) {
    sign_in_btn.addEventListener("click", () => {
      if (container) {
        container.classList.remove("sign-in-mode");
      }
    });
  }
  }}