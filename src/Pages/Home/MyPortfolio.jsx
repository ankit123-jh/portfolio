


import data from "../../data/index.json"

export default function MyPortfolio() {
    return (
        <section className="portfolio--section" id="MyPortfolio" data-aos="fade-up">

            <div className="portfolio--container-box">
                <div className="portfolio--container">
                    <h2 className="portfolio--section-heading">My Projects</h2>
                </div>
            </div>

            <div className="portfolio--section--container">
                {data?.portfolio?.map((item, index) => (
                    <div className="portfolio--section--card" data-aos="zoom-in">

                        <div className="portfolio--section--img">
                            <img src={item.src} alt={item.title} />
                        </div>
                        <div className="portfolio--section--card--content">
                            <div>
                                <h3 className="portfolio--section--title">{item.title}</h3>
                                <p className="text-md">{item.description}</p>
                            </div>
                            <div className="portfolio--button-group">
                                <a
                                    href={item.link}
                                    className="text-sm portfolio--link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Visit GitHub
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 20 19"
                                        fill="none"
                                    >
                                        <path
                                            d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                            stroke="currentColor"
                                            strokeWidth="2.66667"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                                {item.demo && (
                                    <a
                                        href={item.demo}
                                        className="text-sm portfolio--link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Live Demo
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 20 19"
                                            fill="none"
                                        >
                                            <path
                                                d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                                stroke="currentColor"
                                                strokeWidth="2.66667"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
