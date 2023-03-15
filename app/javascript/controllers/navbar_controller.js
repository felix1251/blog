import { Controller } from "@hotwired/stimulus"
import {enter, leave, toggle} from 'el-transition'

export default class extends Controller {
  // static targets = ["openUserMenu", "openNavItems", "userAuthLink"];

  // connect() {
  //   this.openUserMenuTarget.addEventListener('click', this.toggeDropdownMenu)
  //   this.openNavItemsTarget.addEventListener('click', this.toggeNavItems)

  //   this.userAuthLinkTargets.forEach((link) => {
  //     link.addEventListener('click', (e) => {
  //       e.preventDefault();
  //       document.getElementById('modal-trigger').click()
  //       leave(document.getElementById('menu-dropdown-items'))
  //     })
  //   })
  // }

  // toggeDropdownMenu(){
  //   toggle(document.getElementById('menu-dropdown-items'))
  // }

  // toggeNavItems(){
  //   toggle(document.getElementById('menu-nav-items'))
  // }
}
