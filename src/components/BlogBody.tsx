import * as React from "react";

interface Props {
	children: React.ReactNode;
}

const BlogBody = ({ children }: Props) => {
	return (
		<div className="grow p-4 [&_p]:mb-10">
			{children}
		</div>
	);
};

export default BlogBody;
