import React, { Component } from "react";
import styled from "styled-components";
import event from "../images/events.jpg";
class Aboutus extends Component {
  render() {
    return (
      <StyledAbout id="about">
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="flex w-full mb-20 flex-wrap">
              <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
                Master Cleanse Reliac Heirloom
              </h1>
              <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them man bun deep jianbing selfies heirloom.
              </p>
            </div>
            <div class="flex flex-wrap md:-m-2 -m-1">
              <div class="flex flex-wrap w-1/2">
                <div class="md:p-2 p-1 w-1/2 transform hover:opacity-50">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block"
                    src={event}
                  />
                </div>
                <div class="md:p-2 p-1 w-1/2 transform hover:opacity-50">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block"
                    src={event}
                  />
                </div>
                <div class="md:p-2 p-1 w-full transform hover:opacity-50 ">
                  <img
                    alt="gallery"
                    class="w-full h-full object-cover object-center block"
                    src={event}
                  />
                </div>
              </div>
              <div class="flex flex-wrap w-1/2 transform hover:opacity-50">
                <div class="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    class="w-full h-full object-cover object-center block"
                    src={event}
                  />
                </div>
                <div class="md:p-2 p-1 w-1/2 transform hover:opacity-50">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block"
                    src={event}
                  />
                </div>
                <div class="md:p-2 p-1 w-1/2 transform hover:opacity-50">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block"
                    src={event}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </StyledAbout>
    );
  }
}

export default Aboutus;

const StyledAbout = styled.div``;
