import { Controller } from "@hotwired/stimulus"
// import {enter, leave, toggle} from 'el-transition'

export default class extends Controller {
  connect() {
    this.navBackground = document.getElementById("nav-background")
    this.secondSection = document.getElementById("second-section")
    this.thirdSection = document.getElementById("third-section")

    window.addEventListener("scroll", () => {
      const navheight = this.element.clientHeight
      const winSrollY = window.scrollY
      
      const heightDivideBy100 = navheight/100
      const multiplyByWinScollY = heightDivideBy100*winSrollY
      const opacityValue = (multiplyByWinScollY/100).toFixed(1) 

      this.navBackground.style.opacity = opacityValue

      const navComponent = this.element.getBoundingClientRect();
      const secondSection = this.secondSection.getBoundingClientRect();
      const thirdSection = this.thirdSection.getBoundingClientRect();
      const intersectOnSecondSection = navComponent.top <= secondSection.top + secondSection.height && navComponent.top + navComponent.height > secondSection.top
      const intersectOnThirdSection = navComponent.top <= thirdSection.top + thirdSection.height && navComponent.top + navComponent.height > thirdSection.top

      if(winSrollY == 0 || (intersectOnSecondSection && !intersectOnThirdSection)){
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
