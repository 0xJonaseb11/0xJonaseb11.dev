import { Link } from "react-router-dom";

function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<Link to="/" className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500">
					Jonas Sebera.
				</Link>
				
				<span className="text-secondary-dark dark:text-secondary-light font-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					All Rights Reserved
				</span>
			</div>
		</div>
	);
}

export default AppFooterCopyright;