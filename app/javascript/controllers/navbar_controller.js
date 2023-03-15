import { Controller } from "@hotwired/stimulus"
// import {enter, leave, toggle} from 'el-transition'

export default class extends Controller {
  connect() {
    this.navContent = document.getElementById("nav-content")
    window.addEventListener("scroll", () => {
      if(window.scrollY==0){
        this.element.classList.remove("bg-secondary");
      } else {
        this.element.classList.add("bg-secondary");
      }
    });
  }
}
