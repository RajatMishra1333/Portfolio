import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Top from "./topbutton/Top";
import Profile from "./profile/Profile";
import Certifications from "./certifications/Certifications";
import Loading from "./loading/Loading"; // <-- 1. IMPORT the Loading component

export default class Main extends Component {
  // 2. ADD a constructor to set the initial loading state
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  // 3. ADD componentDidMount to change the state after some time
  componentDidMount() {
    // This simulates the page loading for 2 seconds
    // In a real app, you would turn off loading after your data has finished fetching
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 3000); // 2000 milliseconds = 2 seconds
  }

  render() {
    // 4. CHECK the state and render conditionally
    if (this.state.isLoading) {
      return <Loading />; // If it's loading, show the Loading component
    }

    // Otherwise, show the main content
    return (
      <div>
        <Header />
        <Greeting />
        <Skills />
        <WorkExperience />
        <Projects />
        <Certifications />
        <Blogs />
        <Profile />
        <Footer />
        <Top />
      </div>
    );
  }
}