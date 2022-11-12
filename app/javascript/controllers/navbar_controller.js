import { Controller } from "@hotwired/stimulus"
import {enter, leave, toggle} from 'el-transition'

export default class extends Controller {
  static targets = ["openUserMenu", "openNavItems"];

  connect() {
    this.openUserMenuTarget.addEventListener('click', this.toggeDropdownMenu)
    this.openNavItemsTarget.addEventListener('click', this.toggeNavItems)
  }

  toggeDropdownMenu(){
    toggle(document.getElementById('menu-dropdown-items'))
  }

  toggeNavItems(){
    toggle(document.getElementById('menu-nav-items'))
  }
}
