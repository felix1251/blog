import { Controller } from "@hotwired/stimulus"
// import {enter, leave, toggle} from 'el-transition'

export default class extends Controller {
  connect() {
    window.addEventListener("scroll", () => {
      if(window.scrollY==0){
        this.element.classList.remove("bg-gray-700");
      } else {
        this.element.classList.add("bg-gray-700");
      }
    });
  }
}
