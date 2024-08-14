import * as React from "react";
import type { HeadFC } from "gatsby";
import TitleBar from "../components/TitleBar";
import ContactsCol from "../components/ContactsCol";
import Timeline from "../components/Timeline";
import { graphql } from "gatsby";

interface Data {
	allMarkdownRemark: {
		nodes: [
			{
				html: string;
				frontmatter: {
					date: string;
					slug: string;
					title: string;
				};
			}
		];
	};
}

export default function IndexPage({ data }: { data: Data }) {
	return (
		<div className="flex flex-col items-center min-h-screen">
			<TitleBar />
			<div className="max-w-6xl w-full grow flex">
				<ContactsCol />
				<Timeline data={data} />
			</div>
		</div>
	);
}

export const Head: HeadFC = () => <title>blog.ashkan.zone</title>;

export const query = graphql`
	{
		allMarkdownRemark {
			nodes {
				html
				frontmatter {
					date(formatString: "YYYY-MM-DD")
					slug
					title
				}
			}
		}
	}
`;
