import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <button type="button" className="mobile-nav-toggle d-lg-none">
        <i className="icofont-navigation-menu" />
      </button>
      {/* ======= Top Bar ======= */}
      <div
        id="topbar"
        className="d-none d-lg-flex align-items-center fixed-top topbar-scrolled"
      >
        <div className="container d-flex">
          <div className="contact-info mr-auto">
            <i className="icofont-envelope" />{" "}
            <a href="mailto:test@danloaded.com">test@danloaded.com</a>
          </div>
        </div>
      </div>
      {/* ======= Header ======= */}
      <header id="header" className="fixed-top header-scrolled">
        <div className="container d-flex align-items-center">
          {/*  <h1 class="logo mr-auto"><a href="index.html">BizLand<span>.</span></a></h1>*/}
          {/* Uncomment below if you prefer to use an image logo */}
          <div className="mr-auto">
            <a href="/" className="logo mr-auto">
              <img
                src="https://sm.danloaded.com/BrokerV2.5/storage/app/public/photos/v3voIlOrKQLSsyVQaQYt5kHvSPhIUD9f3vu2ahf6.png"
                className="img-fluid"
                alt=""
              />
            </a>
            <br />
          </div>
          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className="">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="login">Login</a>
              </li>
              <li>
                <a href="register">Signup</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Why Us</a>
              </li>
              <li className="drop-down">
                <a href="#">More</a>
                <ul>
                  <li className="active">
                    <a href="#team">Supported Platforms</a>
                  </li>
                  <li>
                    <a href="#testimonials">Testimonials</a>
                  </li>
                  <li>
                    <a href="#faq">FAQ</a>
                  </li>
                  <li>
                    <a href="terms">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="terms">Terms Of Use</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          {/* .nav-menu */}
        </div>
      </header>
      {/* End Header */}
      {/* ======= Hero Section ======= */}
      <section id="hero" className="d-flex align-items-center">
        <div
          className="container aos-init aos-animate"
          data-aos="zoom-out"
          data-aos-delay="100 mb-3"
        >
          <br />
          <h1 className="mt-2">
            Welcome to <span>Danloaded Investment</span>
          </h1>
          <h2>
            Trade and invest in top stocks and ETFs. Trade currency pairs,
            Cryptocurrencies, Indices and Commodities via CFDs. Investing in the
            financial markets has never been easier.
          </h2>
          <div className="d-flex">
            <Link to="/login">
              <a className="btn-get-started ml-1">Login</a>
            </Link>
            <Link to="/register">
              <a className="btn-get-started ml-1 btn-primary text-light rounded">
                {" "}
                Signup
              </a>
            </Link>
          </div>
        </div>
      </section>
      {/* End Hero */}
      <main id="main">
        {/* ======= Featured Services Section ======= */}
        <section id="featured-services" className="featured-services">
          <div className="container aos-init aos-animate" data-aos="fade-up">
            <div className="row">
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="icon">
                    <i className="icofont-business-man" />
                  </div>
                  <h4 className="title">
                    <a href="#">Open An Account</a>
                  </h4>
                  <p className="description">
                    It is easy and free. Fill the “Registration” form and you’re
                    good to go.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="icon">
                    <i className="icofont-dollar-plus" />
                  </div>
                  <h4 className="title">
                    <a href="#">Fund Your Account</a>
                  </h4>
                  <p className="description">
                    Fund your Investment through any of the available Payment
                    gateways.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="icon">
                    <i className="icofont-chart-growth" />
                  </div>
                  <h4 className="title">
                    <a href="#">Trade</a>
                  </h4>
                  <p className="description">
                    Predict market movement accurately to start earning .
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <div className="icon">
                    <i className="icofont-money-bag" />
                  </div>
                  <h4 className="title">
                    <a href="#">Withdraw Profit</a>
                  </h4>
                  <p className="description">
                    Swift withdrawal of your profit after successful trades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Featured Services Section */}
        {/* ======= About Section ======= */}
        <section id="about" className="about section-bg">
          <div className="container aos-init aos-animate" data-aos="fade-up">
            <div className="section-title">
              <h2>About</h2>
              <h3>
                Find Out More <span>About Us</span>
              </h3>
              <p>
                The company Danloaded Investment was incorporated in 2018 under
                the companies 2006 as a private company, that the company is
                limited by shares.
              </p>
            </div>
            <div className="row">
              <div
                className="col-lg-6 aos-init aos-animate"
                data-aos="zoom-out"
                data-aos-delay={100}
              >
                <img
                  src="temp/front/assets/img/about.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div
                className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <h3>Updated 2020</h3>
                <p className="font-italic">
                  Danloaded Investment is founded with vision to create 100
                  percent transparent digital trading experience for its
                  clients. We always had the idea that the investment industry
                  was missing more broad-minded business values. Danloaded
                  Investment has a very forward-thinking approach and has always
                  adopted a very flexible business philosophy which has helped
                  us tap into different sectors of the investment sector with
                  great success. Our company is interested in successful and
                  prosperous traders who will create high trading volume. We are
                  proud that we helped many customers to make revenue.
                </p>
                <ul>
                  <li>
                    <button className="btn">
                      <i className="icofont-file-document" />
                    </button>
                    <div
                      data-toggle="tooltip"
                      title="Click the button on the left to view registration document"
                    >
                      <h5>Goal</h5>
                      <p>
                        Since the founding of Danloaded Investment, our
                        principles have been absolute transparency, dedication
                        to our clients, as well as a complete understanding of
                        the features of our profile market and the expectations
                        of different types of investors.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}
        {/* ======= Skills Section ======= */}
        {/* ======= Counts Section ======= */}
        <section id="counts" className="counts">
          <div className="container aos-init aos-animate" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="icofont-simple-smile" />
                  <span data-toggle="counter-up">15,203,932</span>
                  <p>Traders on the platform</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                <div className="count-box">
                  <i className="icofont-document-folder" />
                  <span data-toggle="counter-up">41,927,182</span>
                  <p>Deals completed per month</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                  <i className="icofont-live-support" />
                  <span data-toggle="counter-up">101,372</span>
                  <p>Active Traders</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                  <i className="icofont-users-alt-5" />
                  <span data-toggle="counter-up">176</span>
                  <p>Countries Supported</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Counts Section */}
        {/* ======= Clients Section ======= */}
        <section id="clients" className="clients section-bg">
          <div className="container aos-init aos-animate" data-aos="zoom-in">
            <div className="row">
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                {/*<img src="assets/img/clients/client-1.png" class="img-fluid" alt="">-*/}
                <h2>
                  <i className="pf pf-bitcoin" />
                </h2>
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                {/*<img src="assets/img/clients/client-2.png" class="img-fluid" alt="">*/}
                <h2>
                  <i className="pf pf-skrill" />
                </h2>
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                {/*<img src="assets/img/clients/client-3.png" class="img-fluid" alt="">*/}
                <h2>
                  <i className="pf pf-paypal" />
                </h2>
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                {/*<img src="assets/img/clients/client-5.png" class="img-fluid" alt="">*/}
                <h2>
                  <i className="pf pf-bank-transfer" />
                </h2>
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                {/*<img src="assets/img/clients/client-6.png" class="img-fluid" alt="">*/}
                <h2>
                  <i className="pf pf-mastercard" />
                </h2>
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                {/*<img src="assets/img/clients/client-6.png" class="img-fluid" alt="">*/}
                <h2>
                  <i className="pf pf-visa" />
                </h2>
              </div>
            </div>
          </div>
        </section>
        {/* End Clients Section */}
        {/* ======= Services Section ======= */}
        <section id="services" className="services">
          <div className="container aos-init aos-animate" data-aos="fade-up">
            <div className="section-title">
              <h2>Why Us</h2>
              <h3>
                Check our <span>Services</span>
              </h3>
              <p>
                Building trust is important and to ensure you know you are
                protected, Danloaded Investment has employed regulation and
                state-of-the-art technology for you to trade with confidence.
              </p>
            </div>
            <div className="row">
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch aos-init aos-animate"
                data-aos="zoom-in"
                data-aos-delay={100}
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="icofont-law-document" />
                  </div>
                  <h4>
                    <a href="#">Regulation</a>
                  </h4>
                  <p>
                    As a regulated broker we must maintain high levels of
                    capitalization, transparency and reporting. Our clients’
                    funds are segregated from our own in Tier 1 banks.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 aos-init aos-animate"
                data-aos="zoom-in"
                data-aos-delay={200}
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="icofont-shield-alt" />
                  </div>
                  <h4>
                    <a href="#">High Level Security</a>
                  </h4>
                  <p>
                    We use DDOS attack prevention, and Secure Socket Layer
                    encryption in order to protect our assets and our client
                    data.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0 aos-init aos-animate"
                data-aos="zoom-in"
                data-aos-delay={300}
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="icofont-world" />
                  </div>
                  <h4>
                    <a href="#">We Are Global</a>
                  </h4>
                  <p>
                    Our services are provided in over 100 countries worldwide.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 aos-init aos-animate"
                data-aos="zoom-in"
                data-aos-delay={100}
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="icofont-chart-radar-graph" />
                  </div>
                  <h4>
                    <a href="#">Multi Asset</a>
                  </h4>
                  <p>
                    Trade Stocks, Commodities and Forex with endless trading
                    opportunities.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 aos-init aos-animate"
                data-aos="zoom-in"
                data-aos-delay={200}
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="icofont-search-user" />
                  </div>
                  <h4>
                    <a href="#">Privacy</a>
                  </h4>
                  <p>
                    We don&apos;t require identity verification. Information
                    about your activity on the website is private and can&apos;t
                    be accessed by third parties.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 aos-init aos-animate"
                data-aos="zoom-in"
                data-aos-delay={300}
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="icofont-support" />
                  </div>
                  <h4>
                    <a href="#">Support</a>
                  </h4>
                  <p>
                    Our Support team works tirelessly all day and night to make
                    sure you suffer no inconvenience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Services Section */}
        {/* ======= Team Section ======= */}
        <section id="team" className="team section-bg">
          <div className="container aos-init aos-animate" data-aos="fade-up">
            <div className="section-title">
              <h2>Supported Platforms</h2>
              <h3>
                For all <span>Devices</span>
              </h3>
              <p>
                Our services has been tailor made for all devices and
                individuals
              </p>
            </div>
            <div className="row">
              <div
                className="col-lg-4 col-md-4 d-flex align-items-stretch aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="member">
                  <div className="member-img">
                    <img
                      src="temp/front/assets/img/mobile.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Mobile Web App</h4>
                    <span>
                      Trade anytime and anywhere using Our mobile web
                      application, designed to support your trading needs. You
                      can access charts and your account, trade and avail all
                      services on this site. It is free and downloadable
                      directly from your browser.
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-4 d-flex align-items-stretch aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="member">
                  <div className="member-img">
                    <img
                      src="temp/front/assets/img/multi.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Web Trader Platform</h4>
                    <span>
                      Open your browser and trade on the go. You can access your
                      account and trade as usual without downloading or
                      installing any software. We guarantee that trading using
                      the web platform is safe, with your information securely
                      encrypted. You can place any type of orders, trade
                      currencies, CFDs and other products, making use of
                      accurate technical indicators.
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-4 d-flex align-items-stretch aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="member">
                  <div className="member-img">
                    <img
                      src="temp/front/assets/img/analysis.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>MT4 Platform</h4>
                    <span>
                      Use the most powerful, easy-to-use platform when trading
                      forex. MetaTrader 4 enables you to track few charts
                      simultaneously, trade directly from the chart, place
                      orders, and manage multiple orders. The software is free
                      and easy to install.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Team Section */}
        {/* ======= Testimonials Section ======= */}
        <section id="testimonials" className="testimonials">
          <div className="container aos-init" data-aos="zoom-in">
            <div className="owl-carousel testimonials-carousel owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: "translate3d(-4650px, 0px, 0px)",
                    transition: "0.25s",
                    width: 10230,
                  }}
                >
                  <div className="owl-item cloned" style={{ width: 930 }}>
                    <div className="testimonial-item">
                      <img
                        src="/temp/front/assets/img/testimonials/avatar5.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Jena Wilsson</h3>
                      <h4>Nurse</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Its User friendly designs still intrigues me, an easy an
                        affordable way to dive into investing.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: 930 }}>
                    <div className="testimonial-item">
                      <img
                        src="/temp/front/assets/img/testimonials/avatar4.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Matt Goodman</h3>
                      <h4>Accountant</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        It is very easy to make deposit on this site. They have
                        different payment gateways that are secured and easy to
                        use. Trading on this platform has been amazing so far.
                        Thanks.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: 930 }}>
                    <div className="testimonial-item">
                      <img
                        src="/temp/front/assets/img/testimonials/avatar3.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>John Larson</h3>
                      <h4>Entrepreneur</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Everything stated on the site is true... At the start i
                        just wanted to make some extra cash but now I just sit
                        around trade on this site, mainly making a living from
                        trading.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                  <div className="owl-item" style={{ width: 930 }}>
                    <div className="testimonial-item">
                      <img
                        src="/temp/front/assets/img/testimonials/avatar2.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Saul Brandon</h3>
                      <h4>Freelancer</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        What caught my attention about this platform was the
                        resources available, Contact support was simple and
                        easy. I was surprised by how quick they actually get
                        back to you.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                  <div className="owl-item" style={{ width: 930 }}>
                    <div className="testimonial-item">
                      <img
                        src="/temp/front/assets/img/testimonials/avatar.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Sara Karlis</h3>
                      <h4>Store Owner</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Fell in love with the platform the moment i saw it. Its
                        clean and simple design was mostly what sealed the
                        deal.Withdrawal is top notch.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                  <div className="owl-item active" style={{ width: 930 }}>
                    <div className="testimonial-item">
                      <img
                        src="/temp/front/assets/img/testimonials/avatar5.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Jena Wilsson</h3>
                      <h4>Nurse</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Its User friendly designs still intrigues me, an easy an
                        affordable way to dive into investing.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                  <div className="owl-item" style={{ width: 930 }}>
                    <div className="testimonial-item">
                      <img
                        src="/temp/front/assets/img/testimonials/avatar4.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Matt Goodman</h3>
                      <h4>Accountant</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        It is very easy to make deposit on this site. They have
                        different payment gateways that are secured and easy to
                        use. Trading on this platform has been amazing so far.
                        Thanks.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                  <div className="owl-item" style={{ width: 930 }}>
                    <div className="testimonial-item">
                      <img
                        src="/temp/front/assets/img/testimonials/avatar3.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>John Larson</h3>
                      <h4>Entrepreneur</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Everything stated on the site is true... At the start i
                        just wanted to make some extra cash but now I just sit
                        around trade on this site, mainly making a living from
                        trading.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: 930 }}>
                    <div className="testimonial-item">
                      <img
                        src="/temp/front/assets/img/testimonials/avatar2.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Saul Brandon</h3>
                      <h4>Freelancer</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        What caught my attention about this platform was the
                        resources available, Contact support was simple and
                        easy. I was surprised by how quick they actually get
                        back to you.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: 930 }}>
                    <div className="testimonial-item">
                      <img
                        src="/temp/front/assets/img/testimonials/avatar.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Sara Karlis</h3>
                      <h4>Store Owner</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Fell in love with the platform the moment i saw it. Its
                        clean and simple design was mostly what sealed the
                        deal.Withdrawal is top notch.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: 930 }}>
                    <div className="testimonial-item">
                      <img
                        src="/temp/front/assets/img/testimonials/avatar5.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Jena Wilsson</h3>
                      <h4>Nurse</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Its User friendly designs still intrigues me, an easy an
                        affordable way to dive into investing.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-nav disabled">
                <button type="button" role="presentation" className="owl-prev">
                  <span aria-label="Previous">‹</span>
                </button>
                <button type="button" role="presentation" className="owl-next">
                  <span aria-label="Next">›</span>
                </button>
              </div>
              <div className="owl-dots">
                <button role="button" className="owl-dot">
                  <span />
                </button>
                <button role="button" className="owl-dot">
                  <span />
                </button>
                <button role="button" className="owl-dot active">
                  <span />
                </button>
                <button role="button" className="owl-dot">
                  <span />
                </button>
                <button role="button" className="owl-dot">
                  <span />
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="contact">
          <div className="container aos-init" data-aos="fade-up">
            <div className="section-title">
              <h2>Contact</h2>
              <h3>
                <span>Contact Us</span>
              </h3>
              <p>We are always available to take your queries</p>
            </div>
            <div
              className="row aos-init"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="col-lg-12 col-md-12">
                <div className="info-box  mb-4">
                  <i className="bx bx-envelope" />
                  <h3>Email Us</h3>
                  <p>test@danloaded.com</p>
                </div>
              </div>
            </div>
            <div
              className="row aos-init"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="col-lg-12">
                <form
                  action="#"
                  method="post"
                  role="form"
                  className="php-email-form"
                >
                  <div className="form-row">
                    <div className="col form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div className="validate" />
                    </div>
                    <div className="col form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        data-rule="email"
                        data-msg="Please enter a valid email"
                      />
                      <div className="validate" />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 8 chars of subject"
                    />
                    <div className="validate" />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      rows={5}
                      data-rule="required"
                      data-msg="Please write something for us"
                      placeholder="Message"
                      defaultValue={""}
                    />
                    <div className="validate" />
                  </div>
                  <div className="mb-3">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Section */}
      </main>
      {/* End #main */}
      {/* ======= Footer ======= */}
      <footer id="footer">
        <div className="footer-top bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" /> <a href="/">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#about">About Us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" /> <a href="#faq">FAQ</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="terms.html">Terms Of Use</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="terms">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 footer-links">
                <h4>Risk Disclaimer</h4>
                <p>
                  Trading and investing in digital options involves significant
                  level of risk and is not suitable and/or appropriate for all
                  clients. Please make sure you carefully consider your
                  investment objectives, level of experience and risk appetite
                  before buying or selling any digital option. Buying or selling
                  digital options entails financial risks and could result in a
                  partial or complete loss of your funds, therefore, you should
                  not invest funds you cannot afford to lose.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-4">
          <div className="copyright">
            © Copyright{" "}
            <strong>
              <span>Danloaded Investment</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>
      {/* End Footer */}
      {/* <div id="preloader"></div> */}
      <a href="#" className="back-to-top" style={{ display: "inline" }}>
        <i className="icofont-simple-up" />
      </a>
      {/* Vendor JS Files */}
      {/* Template Main JS File */}
      <nav className="mobile-nav d-lg-none">
        <ul>
          <li className="active">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="login">Login</a>
          </li>
          <li>
            <a href="register">Signup</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Why Us</a>
          </li>
          <li className="drop-down">
            <a href="#">More</a>
            <ul>
              <li>
                <a href="#team">Supported Platforms</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="terms">Privacy Policy</a>
              </li>
              <li>
                <a href="terms">Terms Of Use</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="mobile-nav-overly" />
      {/* The Modal */}
      <aside className="modal fade" id="document">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">Document Of Registration</h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            {/* Modal body */}
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-12">
                  <a href="temp/front/images/doc1.jpg">
                    <img
                      src="temp/front/images/doc1.jpg"
                      className="img-fluid border"
                      style={{ width: "" }}
                    />
                  </a>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                  <a href="temp/front/images/doc2.jpg">
                    <img
                      src="temp/front/images/doc2.jpg"
                      className="img-fluid border"
                      style={{ width: "" }}
                    />
                  </a>
                </div>
              </div>
            </div>
            {/* Modal footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
