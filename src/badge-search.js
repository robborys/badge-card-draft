import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class BadgeSearch extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`

    .wrapper {
      background color: green;
      width: 450px;
      height: 250px;
    }

    .frame {
      width: 400px;
      height: 250px;
      background-color: #d3d3d3;
      border-radius: 10px;
      margin: 10px;
      border: 5px solid black;
      box-shadow: -4px -3px 45px 21px rgba(0,0,0,0.35);    
      
    }

    .categoryLabel {
      border-bottom: 3.5px solid black;
      width: 400px;
      height: 15px;
    }

    .categoryLabel h4 {
      margin-left: 5px;
      text-align: left;
      line-height: 15px;
    }

    .courseTitle {
      max-width: 250px;
      max-height: 230px;
      padding-top: 32px;
      font-size: 250%;
      word-wrap: break-word;
    }

    .courseTitle h3 {

      margin-top: 0px;

    }

    .course-icon {
      float: right;
      max-width: 125px;
      margin-right: 10px;
      padding-top: 32px;
      display: flex;
    }

    .creator-title {
      display: flex;
      font-size: 120%;
      vertical-align: bottom;
    }

    .creator-title span {
      align-self: flex-end;
      vertical-align: bottom;
    } 

    .icon
    {
      margin top: 400px;
    }

  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {

return html`



<simple-icon accent-color="light-green" icon="mdextra:vector-polyline-plus">ICON</simple-icon>



<simple-iconset-demo></simple-iconset-demo>


  <div class="wrapper">
    <div class="frame">
      <div class="categoryLabel">
        <h4>Computer Sceinces</h4>
      <div>
      <img class="course-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Simple_icon_location.svg/100px-Simple_icon_location.svg.png">
      <div class="courseTitle">
        <h4>ENGL 215</h4>
      </div>
      <div class="creator-title">
        <span>Creator: John Cena</span>
      </div>
    </div>
  </div>


     `;
  }
}

customElements.define('badge-search', BadgeSearch);
