import React, { Component } from "react";
import styled from "styled-components";
import image from "../../vector/question.svg";
import axios from "axios";

class NextEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      idea: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post(
        "https://sheet.best/api/sheets/a759e803-db84-4861-a545-6ed3a4ec1db3",
        this.state
      )
      .then((response) => {
        console.log(response);
      });
  };
  render() {
    const { name, email, idea } = this.state;
    return (
      <StyledEvent>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 content">
              <h1 class="title-font font-medium text-3xl text-gray-900">
                We love to collaborate!
              </h1>
              <p class="leading-relaxed mt-4">
                Let us know if you would like to collaborate with us for any
                event, session or initiative. We would love to join in.
              </p>
            </div>
            <div class="lg:w-2/6 md:w-1/2 form-color rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 class="text-gray-900 text-lg font-medium title-font mb-3">
                Sign Up
              </h2>
              <form autocomplete="off" onSubmit={this.submitHandler}>
                <div class="relative mb-4">
                  <label
                    for="full-name"
                    class="leading-7 text-sm text-gray-600"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.changeHandler}
                    placeholder="Enter your Name"
                    class="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div class="relative mb-4">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    placeholder="Enter your email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.changeHandler}
                    class="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div class="relative mb-4">
                  <label
                    for="full-name"
                    class="leading-7 text-sm text-gray-600"
                  >
                    Your preferences
                  </label>
                  <textarea
                    cols="20"
                    rows="3"
                    type="text"
                    value={idea}
                    onChange={this.changeHandler}
                    name="idea"
                    class="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Enter text here"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="text-white button-color border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg"
                >
                  Button
                </button>
              </form>
            </div>
          </div>
        </section>
      </StyledEvent>
    );
  }
}

export default NextEvent;

const StyledEvent = styled.div`
  background: url(${image});
  background-repeat: no-repeat;
  background-size: auto;
  .form-color {
    background-color: #f7b32f;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  }
  .button-color {
    background-color: #000;
  }
  .content {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba(192, 192, 192, 0.5);
  }
`;
