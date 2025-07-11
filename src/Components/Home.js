import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="display-1">Hello!</h1>
        <p>
          This is a <b>test website</b> made for{" "}
          <strong>5.02.1 - Using an AI Coding IDE</strong>. It's a collection of
          components that do not <i>necessarily</i> belong together, but hey, it
          makes for a good test application!
        </p>
        <p>Here's the list of pages, for your reference:</p>
        <ul>
          <li>
            <a href="/">/</a> - The website's landing page. This page gives
            general information on using the website.
          </li>
          <li>
            <a href="/shop">/shop</a> - Lists the names and prices of various
            shop items.
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
