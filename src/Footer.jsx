import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<nav>
			<Link to="/">Home</Link> | <Link to="/flowers">Flowers</Link> |{" "}
			<Link to="/cart">Cart</Link> | <Link to="/admin">Admin</Link>
		</nav>
	);
}
