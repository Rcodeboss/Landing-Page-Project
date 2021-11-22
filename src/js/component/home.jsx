import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
import { Footer } from "./footer";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid p-0 m-0">
			<Navbar />
			<div className="row mx-5 mt-5 mb-0 p-0">
				<Jumbotron />
			</div>
			<div className="row mx-5 my-4 p-0 d-flex justify-content-between">
				<Card
					card_image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.cuisinevault.com%2Fwp-content%2Fuploads%2F2020%2F04%2FMint-choc-chip-ice-cream.jpg&f=1&nofb=1"
					card_image_alt="Mint Chocolate Chip Ice Cream Bowl"
					card_title="Mint Chocolate Chip"
					card_text="This flavor is refreshing, minty, and chocolately"
				/>
				<Card
					card_image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.todaysparent.com%2Fwp-content%2Fuploads%2F2018%2F07%2Fvegan-strawberry-ice-cream-recipe.jpeg&f=1&nofb=1"
					card_image_alt="Strawberry Ice Cream Bowl"
					card_title="Strawberry"
					card_text="This flavor is fruity and gives tropical vibes"
				/>
				<Card
					card_image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.grmag.com%2Fwp-content%2Fuploads%2Fsites%2F113%2F2020%2F07%2FCookies-and-cream-e1595515576966.jpg&f=1&nofb=1"
					card_image_alt="Cookies and Cream Ice Cream bowl"
					card_title="Cookies and Cream"
					card_text="This flavour perfectly combines creamy and chocolately"
				/>
				<Card
					card_image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Furbanbakes.com%2Fwp-content%2Fuploads%2F2019%2F05%2FRed-Velvet-Ice-Cream-urbanbakes.com-6.1.jpg&f=1&nofb=1"
					card_image_alt="Red Velvet Ice Cream bowl"
					card_title="Red Velvet"
					card_text="This flavour reminds you of eating a delicious cake"
				/>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
