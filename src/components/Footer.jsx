import React, { Component } from "react";

import "../scss/Footer.scss";

class Footer extends Component {
  constructor() {
    super();

    this.state = {
      scrollDown: false,
      footer: null,
      updated: null,
      touchStartX: null,
      touchStartY: null
    };
  }

  componentDidMount() {
    this.setState({ footer: document.getElementById("footer") });

    window.onwheel = e => {
      this.handleScroll(e);
    };

    window.ontouchstart = e => {
      this.handleTouchStart(e);
    };

    window.ontouchmove = e => {
      this.handleTouchMove(e);
    };
  }

  isPageBottom = () => {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
  };

  handleTouchStart = e => {
    this.setState({
      touchStartX: e.touches[0].screenX,
      touchStartY: e.touches[0].screenY
    });
  };

  handleTouchMove = e => {
    if (!this.state.touchStartY) return;

    const xUp = e.touches[0].screenX;
    const yUp = e.touches[0].screenY;
    const xDiff = this.state.touchStartX - xUp;
    const yDiff = this.state.touchStartY - yUp;

    // exclude x moves
    if (Math.abs(yDiff) > Math.abs(xDiff)) {
      console.log("Y Swipe", yDiff);
      this.setState({ scrollDown: yDiff > 0 });
    }

    this.toggleFooter();
    this.setState({ updated: true });
    this.setState({ touchStartX: null, touchStartY: null, scrollDown: null });
  };

  handleScroll = e => {
    this.setState({ scrollDown: e.deltaY >= 0 });

    this.toggleFooter();
    // if (!this.state.updated) window.requestAnimationFrame(this.toggleFooter);
    this.setState({ updated: true });

    // reset checks
    this.setState({ scrollDown: null });
  };

  toggleFooter = () => {
    // console.log("window inner height + scroll y", window.innerHeight + window.scrollY);
    // console.log("doc body offsetheight: ", document.body.offsetHeight);
    if (this.state.scrollDown && this.isPageBottom()) {
      this.show();
    } else if (!this.state.scrollDown) {
      this.hide();
    }

    this.setState({ updated: false });
  };

  show = () => {
    if (this.state.footer.classList.contains("footer-hide")) {
      this.state.footer.classList.remove("footer-hide");
      this.state.footer.classList.add("footer-show");
    }
  };

  hide = () => {
    if (this.state.footer.classList.contains("footer-show") || !this.state.footer.classList.contains("footer-hide")) {
      this.state.footer.classList.remove("footer-show");
      this.state.footer.classList.add("footer-hide");
    }
  };

  render() {
    return (
      <footer className="w-100 footer-hide row justify-content-between" id="footer">
        <p className="mb-1 col-12 col-sm text-nowrap">Lecken &copy; {new Date().getFullYear()}</p>
        <p className="footer-credit">
          With <span className="red">&#10084;</span> by{" "}
          <a className="text-nowrap" href="https://www.instagram.com/claudiustoximus" target="_blank">
            Claudio Tocco
          </a>{" "}
          &amp;{" "}
          <a className="text-nowrap" href="https://www.instagram.com/collectiveanxiety/" target="_blank">
            Vincent Reynaud
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;

// var lastScrollTop = 0;

// element.addEventListener("scroll", handleScroll2, false);

// function handleScroll2() { // or window.addEventListener("scroll"....
//    var currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
//    if (currentScrollTop > lastScrollTop){
//       console.log("scrolled down")
//     } else {
//       console.log("scrolled up")
//    }
//    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
// }

// console.log(e.target.scrollHeight);
// console.log(document.documentElement.scrollTop);

/* {
  for (let i = 0; i < e.changedTouches.length; i++) {
    console.log(e.touches);
    console.log(e.changedTouches);
    console.log("changedTouches[" + i + "].identifier = " + e.changedTouches[i].identifier);
  }
}; */

/*
if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        // left swipe
      } else {
        // right swipe
      }
    } else {
      if (yDiff > 0) {
        // up swipe 
      } else {
        // down swipe 
      }
 */
