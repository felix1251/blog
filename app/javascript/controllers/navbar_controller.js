import { Controller } from "@hotwired/stimulus"
// import {enter, leave, toggle} from 'el-transition'

export default class extends Controller {
  connect() {
    this.init = false
    this.navBackground = document.getElementById("nav-background")
    this.secondSection = document.getElementById("second-section")
    this.thirdSection = document.getElementById("third-section")

    window.addEventListener("scroll", () => {
      const value = ((this.element.clientHeight/100)*window.scrollY)/100
      this.navBackground.style.opacity = value.toFixed(1) 
      const a = this.element.getBoundingClientRect();
      const b = this.secondSection.getBoundingClientRect();
      const c = this.thirdSection.getBoundingClientRect();
      const intersectOnSecondSection = a.top <= b.top + b.height && a.top + a.height > b.top
      const intersectOnThirdSection = a.top <= c.top + c.height && a.top + a.height > c.top

      if (intersectOnSecondSection && !intersectOnThirdSection) {
        this.navBackground.classList.remove("bg-secondary");
        this.navBackground.classList.add("bg-gray-800");
        this.element.classList.replace("text-gray-800", "text-secondary",)
        return
      }

      if(window.scrollY==0){
        this.init = false
        this.navBackground.classList.remove("bg-secondary");
        this.element.classList.replace("text-gray-800", "text-secondary")
      }

      if(window.scrollY > 0) {
        this.init = true
        this.navBackground.classList.add("bg-secondary");
        this.element.classList.replace("text-secondary", "text-gray-800")
      }
    });
  }
}
