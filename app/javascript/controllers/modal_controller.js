import { Controller } from "@hotwired/stimulus"
import {enter, leave, toggle} from 'el-transition'

export default class extends Controller {
  connect() {
    document.getElementById('modal-wrapper').addEventListener('click', this.closeModal)
    document.getElementById('modal-close').addEventListener('click', this.exit)
  }

  closeModal(e){
    const modalPanelClicked = document.getElementById('modal-panel').contains(e.target)
    if(!modalPanelClicked && e.target.id !== 'modal-trigger'){
      leave(document.getElementById('modal-wrapper'))
      leave(document.getElementById('modal-backdrop'))
      leave(document.getElementById('modal-panel'))
    }
  }

  exit(){
    leave(document.getElementById('modal-wrapper'))
    leave(document.getElementById('modal-backdrop'))
    leave(document.getElementById('modal-panel'))
  }

  showModal(){
    enter(document.getElementById('modal-wrapper'))
    enter(document.getElementById('modal-backdrop'))
    enter(document.getElementById('modal-panel'))
  }
}
