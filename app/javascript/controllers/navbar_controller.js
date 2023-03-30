import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "porfolio", "blogs" ]
  connect() { };
};
