import { Link } from "gatsby";
import * as React from "react";

interface Props {
	date: string;
	title: string;
	slug: string;
	peek: string;
}

const TimelineEntry = ({ date, title, slug, peek }: Props) => {
	console.log(slug)
	return (
		<div className="border-t-2 border-black p-4">
			<Link to={slug}>
				<span className="text-3xl text-red-700">{date}</span>
				<span className="text-3xl"> --- </span>
				<span className="text-3xl">{title}</span>
				<p>{peek}</p>
			</Link>
		</div>
	);
};

export default TimelineEntry;
