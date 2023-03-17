import { Controller } from "@hotwired/stimulus"
// import {enter, leave, toggle} from 'el-transition'

export default class extends Controller {
  static targets = ["firstSection", "secondSection", "thirdSection", "forthSection" ]
  connect() {
    console.log(this.element, this.firstSectionTarget, this.secondSectionTarget, this.thirdSectionTarget, this.forthSectionTarget)
  }
}
