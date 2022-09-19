import React, { Component } from "react";

class Copycat extends Component {
  handleCopy() {
    alert("STOP STEALING FROM ME!");
  }
  render() {
    return (
      <div>
        <h3>Try copying some of this text:</h3>
        <section style={{ width: "300px", display: "inline-block" }} onCopy={this.handleCopy}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam nemo modi ipsam illum omnis quas cupiditate
          architecto quidem soluta cum provident perspiciatis, sunt laudantium nam numquam officia. Repellendus, rem! Hic dolorem,
          distinctio dolore fuga temporibus tempora nobis perspiciatis voluptates corporis a voluptas fugit vitae quisquam,
          molestiae est illum. Id doloribus error numquam amet enim laborum pariatur delectus, aliquid qui! Atque in voluptates a?
          Sed sequi vitae, ipsum voluptates voluptatum nesciunt accusantium mollitia, dolores perspiciatis excepturi deleniti?
          Temporibus assumenda aliquam earum esse animi inventore nemo ab, exercitationem eum magnam ex.
        </section>
      </div>
    );
  }
}

export default Copycat;
