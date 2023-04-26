import { Controller } from "@hotwired/stimulus";
import Utils from "../utils/quill";

export default class extends Controller {
    connect() {
        Utils.generateQuill({
            type: "read-only",
            target: this.element,
        });
    }

    disconnect() {
        Utils.disconnectQuill();
    }
}
