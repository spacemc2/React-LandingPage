import React from "react";

const Jumbotron = () => {
  return (
    <main class="container">
      <div class="bg-light p-5 rounded">
        <h1>A phrase to start ...</h1>
        <p class="lead">
          "Life is like riding a bicycle. To keep your balance, you must keep
          moving." <br /> <strong>Albert Einstein</strong>
        </p>
        <a
          class="btn btn-lg btn-primary"
          href="https://github.com/spacemc2"
          role="button"
        >
          Ask for advice!
        </a>
      </div>
    </main>
  );
};

export default Jumbotron;
