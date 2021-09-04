import React from "react";
import ReactDOM from "react-dom";
// Components
import Skills from "./containers/Skills";
import Projects from "./containers/Projects";
import Greetings from "./containers/Greetings";
import Feedbacks from "./containers/Feedbacks";
import Education from "./containers/Education";
import Navigation from "./components/Navigation";
import Experience from "./containers/Experience";
import Proficiency from "./containers/Proficiency";
import GithubProfile from "./containers/GithubProfile";
// Style
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/css/argon-design-system-react.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";

ReactDOM.render(
	<>
		<Navigation />
		<Greetings />
		<Skills />
		<Proficiency />
		<Education />
		<Experience />
		<Feedbacks />
		<Projects />
		<GithubProfile />
	</>,
	document.getElementById("root")
);
