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
			<p className="p-4">
				I'm Ashkan Arabi. I'm driven by rage, deadlines, and competition. Some say it's a bad thing,
				but this lifestyle makes me feel alive!!!
			</p>
			<h1 className="text-2xl border-t-2 border-black p-4">follow me!</h1>
			<ul className="pr-4 pl-4">
				{link_pairs.map(([url, name]) => (
					<li>
						<a href={url}>{name}</a> &lt;--
					</li>
				))}
			</ul>
		</>
	);
};

const BlogView = () => {
	return (
		<div className="p-8">
      <Link to="/">
        <CustomButton>
          &lt;-- main menu
        </CustomButton>
      </Link>
		</div>
	);
};

const ContactsCol = ({ backbutton = false }: Props) => {
	return (
		<div className="text-end border-r-2 border-black w-80 shrink-0 min-h-full">
			<div className="sticky top-0">{backbutton ? <BlogView /> : <IndexView />}</div>
		</div>
	);
};

export default ContactsCol;
