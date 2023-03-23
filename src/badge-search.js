import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class BadgeSearch extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`

    .frame {
      width: 400px;
      height: 250px;
      background-color: #d3d3d3;
      border-radius: 10px;
      margin: 10px;
      border: 5px solid black;
      box-shadow: -4px -3px 45px 21px rgba(0,0,0,0.35);    }

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


  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
    <div class="frame">
      <div class="categoryLabel">
        <h4>Computer Sceinces</h4>
      <div>
      <img class="course-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Simple_icon_location.svg/100px-Simple_icon_location.svg.png">
      <div class="courseTitle">
        <h2>PLACEHOLDER 101</h2>
      </div>
      <div class="creator-title">
        <span>Creator: John Cena</span>
      </div>
    </div>
     `;
  }
}

customElements.define('badge-search', BadgeSearch);
