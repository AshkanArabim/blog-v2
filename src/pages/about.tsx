import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import TitleBar from "../components/TitleBar";
import BlogBody from "../components/BlogBody";
import ContactsCol from "../components/ContactsCol";
import portrait from "../images/portrait.jpg";
import { CSSProperties } from "react";

const AboutPage: React.FC<PageProps> = () => {
	// skeleton manually matched with `index.tsx`
	const imageStyle: CSSProperties = {
        height: '300px'
    }

	return (
		<div className="flex flex-col items-center min-h-screen">
			<TitleBar date="About me" title="A summary" />
			<div className="max-w-6xl w-full grow flex">
				<ContactsCol backbutton />
				<BlogBody>
					<br />
                    <img src={portrait} alt="" style={imageStyle}/>
					<br />
					I'm a third-year CS student with a background in machine learning, full-stack development, and Linux software. I have hands-on experience from internships at Temple University and Texas Instruments, and I’ll join Capital One as a software engineering intern this summer. I’m also active in team-driven initiatives; having hosted two hackathons, started a student organization, and made various open-source contributions.
                    <br />
                    <br />
                    I'm driven by rage, deadlines, and competition. Some say it's a bad thing, but this lifestyle makes me feel alive!!!
				</BlogBody>
			</div>
		</div>
	);
};

export default AboutPage;

export const Head: HeadFC = () => <title>About</title>;
