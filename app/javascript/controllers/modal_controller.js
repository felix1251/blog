import { Controller } from "@hotwired/stimulus"
import {enter, leave, toggle} from 'el-transition'

export default class extends Controller {
  connect() {
    // enter(document.getElementById('modal-wrapper'))
    // enter(document.getElementById('modal-backdrop'))
    // enter(document.getElementById('modal-panel'))
    document.getElementById('modal-wrapper').addEventListener('click', this.closeModal)
  }

  closeModal(e){
    const modalPanelClicked = document.getElementById('modal-panel').contains(e.target)
    if(!modalPanelClicked){
      leave(document.getElementById('modal-wrapper'))
      leave(document.getElementById('modal-backdrop'))
      leave(document.getElementById('modal-panel'))
    }
  }
}
