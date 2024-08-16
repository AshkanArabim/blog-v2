import * as React from "react";
import CustomButton from "./CusomButton";
import { Link } from "gatsby";

interface Props {
	backbutton?: boolean;
}

const IndexView = () => {
	const link_pairs = [
		["https://www.linkedin.com/in/ashkan-arabi/", "LinkedIn"],
		["https://github.com/AshkanArabim", "GitHub"],
		["https://x.com/AshkanArabim", "X"],
		["https://www.instagram.com/ashkan.arabim/", "Instagram"],
		["https://www.reddit.com/user/AshkanArabim", "Reddit"],
		["https://stackoverflow.com/users/14751074/ashkan-arabi", "Stack Overflow"],
		["https://www.youtube.com/@ashkan.arabim", "YouTube"],
		["https://t.me/AshkanArabim", "Telegram"],
	];

	return (
		<>
			<div className="p-4">
				BEFORE YOU START READING: Any red text means it's clickable.
				<br />
				<br />
				I'm Ashkan Arabi. I'm driven by rage, deadlines, and competition. Some say it's a bad thing,
				but this lifestyle makes me feel alive!!!
				<br />
				<br />
				You can find the source code of this blog <a href="https://github.com/AshkanArabim/blog-v2">here</a>.
			</div>
			<p className="text-2xl border-t-2 border-black px-4 pt-4">follow me!</p>
			<ul className="pr-4 pl-4">
				{link_pairs.map(([url, name]) => (
					<li>
						--&gt; <a href={url}>{name}</a>
					</li>
				))}
			</ul>
		</>
	);
};

const BlogView = () => {
	return (
		<div className="p-8">
      <a href="/">
        <div className="text-center py-6">
					<CustomButton>
						&lt;-- main menu
					</CustomButton>
				</div>
      </a>
		</div>
	);
};

const ContactsCol = ({ backbutton = false }: Props) => {
	return (
		<div className="border-r-2 border-black w-80 shrink-0 min-h-full">
			<div className="sticky top-0">{backbutton ? <BlogView /> : <IndexView />}</div>
		</div>
	);
};

export default ContactsCol;
