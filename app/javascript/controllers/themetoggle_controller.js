import { Controller } from "@hotwired/stimulus"
// import {enter, leave, toggle} from 'el-transition'

export default class extends Controller {
    static targets = [ "lightIcon", "darkIcon" ];

    connect() { 
        console.log(this.element, this.lightIconTarget, this.darkIconTarget) 
    };
};
