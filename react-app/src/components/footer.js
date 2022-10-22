import ben from "./ben.jpg";
import brennon from "./brennon.jpg";
import kyle from "./kyle.jpg";
import randy from "./randy.jpg";
import "./footer.css";

function Footer() {
	return (
        <footer>

		<div className="Footer-container">

            <div className="devs">
			<div className="Meet">Meet The Developers!</div>
				<div className="Footer">
                    <div className="Footer-inner">
					<div className="footer-stuff">
						<a
                            className="aaa"
							href="https://github.com/BenjaminKHLau"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={ben} className="footer-img" />
						</a>
                        <div className="fname">
                            Benjamin Lau
                            </div>
					</div>
					<div className="footer-stuff">
						<a
                            className="aaa"
							href="https://github.com/BrennonMorris"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={brennon} className="footer-img" />
						</a>
                        <div className="fname">
                            Brennon Morris
                            </div>
					</div>
					<div className="footer-stuff">
						<a
                            className="aaa"
							href="https://www.linkedin.com/in/kyle-kassen"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={kyle} className="footer-img" />
						</a>
                        <div className="fname">
                            Kyle Kassen
                            </div>
					</div>
					<div className="footer-stuff">
						<a
                            className="aaa"
							href="https://github.com/randycane"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={randy} className="footer-img" />
						</a>
                        <div className="fname">
                            Randy Chang
                            </div>
					</div>

                    </div>
				</div>
            </div>

		</div>
        </footer>
	);
}

export default Footer;
