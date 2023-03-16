import { Controller } from "@hotwired/stimulus"
// import {enter, leave, toggle} from 'el-transition'

export default class extends Controller {
  connect() {
    this.navBackground = document.getElementById("nav-background")
    this.secondSection = document.getElementById("second-section")
    this.forthSection = document.getElementById("forth-section")

    window.addEventListener("scroll", () => {
      const navheight = this.element.clientHeight
      const winSrollY = window.scrollY
      
      const heightDivideBy100 = navheight/100
      const multiplyByWinScollY = heightDivideBy100*winSrollY
      const opacityValue = (multiplyByWinScollY/100).toFixed(1) 

      this.navBackground.style.opacity = opacityValue

      const navComponent = this.element.getBoundingClientRect();
      const secondSection = this.secondSection.getBoundingClientRect();
      const forthSection = this.forthSection.getBoundingClientRect();

      const intersectOnSecondSection = navComponent.bottom <= secondSection.top + secondSection.height && navComponent.top + navComponent.height > secondSection.top
      const intersectOnForthSection = navComponent.bottom <= forthSection.top + forthSection.height && navComponent.top + navComponent.height > forthSection.top

      if(winSrollY == 0 || intersectOnSecondSection || intersectOnForthSection){
        this.navBackground.classList.remove("bg-secondary");
        this.navBackground.classList.add("bg-gray-800");
        this.element.classList.replace("text-gray-800", "text-secondary")
        return
      }

      this.navBackground.classList.remove("bg-gray-800");
      this.navBackground.classList.add("bg-secondary");
      this.element.classList.replace("text-secondary", "text-gray-800")
    });
  }
}
