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
            <div id="google_translate_element">
              <div
                className="skiptranslate goog-te-gadget"
                dir="ltr"
                style={{}}
              >
                <div id=":0.targetLanguage">
                  <select
                    className="goog-te-combo"
                    aria-label="Language Translate Widget"
                  >
                    <option value="">Select Language</option>
                    <option value="ab">Abkhaz</option>
                    <option value="ace">Acehnese</option>
                    <option value="ach">Acholi</option>
                    <option value="aa">Afar</option>
                    <option value="af">Afrikaans</option>
                    <option value="sq">Albanian</option>
                    <option value="alz">Alur</option>
                    <option value="am">Amharic</option>
                    <option value="ar">Arabic</option>
                    <option value="hy">Armenian</option>
                    <option value="as">Assamese</option>
                    <option value="av">Avar</option>
                    <option value="awa">Awadhi</option>
                    <option value="ay">Aymara</option>
                    <option value="az">Azerbaijani</option>
                    <option value="ban">Balinese</option>
                    <option value="bal">Baluchi</option>
                    <option value="bm">Bambara</option>
                    <option value="bci">Baoulé</option>
                    <option value="ba">Bashkir</option>
                    <option value="eu">Basque</option>
                    <option value="btx">Batak Karo</option>
                    <option value="bts">Batak Simalungun</option>
                    <option value="bbc">Batak Toba</option>
                    <option value="be">Belarusian</option>
                    <option value="bem">Bemba</option>
                    <option value="bn">Bengali</option>
                    <option value="bew">Betawi</option>
                    <option value="bho">Bhojpuri</option>
                    <option value="bik">Bikol</option>
                    <option value="bs">Bosnian</option>
                    <option value="br">Breton</option>
                    <option value="bg">Bulgarian</option>
                    <option value="bua">Buryat</option>
                    <option value="yue">Cantonese</option>
                    <option value="ca">Catalan</option>
                    <option value="ceb">Cebuano</option>
                    <option value="ch">Chamorro</option>
                    <option value="ce">Chechen</option>
                    <option value="ny">Chichewa</option>
                    <option value="zh-CN">Chinese (Simplified)</option>
                    <option value="zh-TW">Chinese (Traditional)</option>
                    <option value="chk">Chuukese</option>
                    <option value="cv">Chuvash</option>
                    <option value="co">Corsican</option>
                    <option value="crh">Crimean Tatar</option>
                    <option value="hr">Croatian</option>
                    <option value="cs">Czech</option>
                    <option value="da">Danish</option>
                    <option value="fa-AF">Dari</option>
                    <option value="dv">Dhivehi</option>
                    <option value="din">Dinka</option>
                    <option value="doi">Dogri</option>
                    <option value="dov">Dombe</option>
                    <option value="nl">Dutch</option>
                    <option value="dyu">Dyula</option>
                    <option value="dz">Dzongkha</option>
                    <option value="eo">Esperanto</option>
                    <option value="et">Estonian</option>
                    <option value="ee">Ewe</option>
                    <option value="fo">Faroese</option>
                    <option value="fj">Fijian</option>
                    <option value="tl">Filipino</option>
                    <option value="fi">Finnish</option>
                    <option value="fon">Fon</option>
                    <option value="fr">French</option>
                    <option value="fy">Frisian</option>
                    <option value="fur">Friulian</option>
                    <option value="ff">Fulani</option>
                    <option value="gaa">Ga</option>
                    <option value="gl">Galician</option>
                    <option value="ka">Georgian</option>
                    <option value="de">German</option>
                    <option value="el">Greek</option>
                    <option value="gn">Guarani</option>
                    <option value="gu">Gujarati</option>
                    <option value="ht">Haitian Creole</option>
                    <option value="cnh">Hakha Chin</option>
                    <option value="ha">Hausa</option>
                    <option value="haw">Hawaiian</option>
                    <option value="iw">Hebrew</option>
                    <option value="hil">Hiligaynon</option>
                    <option value="hi">Hindi</option>
                    <option value="hmn">Hmong</option>
                    <option value="hu">Hungarian</option>
                    <option value="hrx">Hunsrik</option>
                    <option value="iba">Iban</option>
                    <option value="is">Icelandic</option>
                    <option value="ig">Igbo</option>
                    <option value="ilo">Ilocano</option>
                    <option value="id">Indonesian</option>
                    <option value="ga">Irish Gaelic</option>
                    <option value="it">Italian</option>
                    <option value="jam">Jamaican Patois</option>
                    <option value="ja">Japanese</option>
                    <option value="jw">Javanese</option>
                    <option value="kac">Jingpo</option>
                    <option value="kl">Kalaallisut</option>
                    <option value="kn">Kannada</option>
                    <option value="kr">Kanuri</option>
                    <option value="pam">Kapampangan</option>
                    <option value="kk">Kazakh</option>
                    <option value="kha">Khasi</option>
                    <option value="km">Khmer</option>
                    <option value="cgg">Kiga</option>
                    <option value="kg">Kikongo</option>
                    <option value="rw">Kinyarwanda</option>
                    <option value="ktu">Kituba</option>
                    <option value="trp">Kokborok</option>
                    <option value="kv">Komi</option>
                    <option value="gom">Konkani</option>
                    <option value="ko">Korean</option>
                    <option value="kri">Krio</option>
                    <option value="ku">Kurdish (Kurmanji)</option>
                    <option value="ckb">Kurdish (Sorani)</option>
                    <option value="ky">Kyrgyz</option>
                    <option value="lo">Lao</option>
                    <option value="ltg">Latgalian</option>
                    <option value="la">Latin</option>
                    <option value="lv">Latvian</option>
                    <option value="lij">Ligurian</option>
                    <option value="li">Limburgish</option>
                    <option value="ln">Lingala</option>
                    <option value="lt">Lithuanian</option>
                    <option value="lmo">Lombard</option>
                    <option value="lg">Luganda</option>
                    <option value="luo">Luo</option>
                    <option value="lb">Luxembourgish</option>
                    <option value="mk">Macedonian</option>
                    <option value="mad">Madurese</option>
                    <option value="mai">Maithili</option>
                    <option value="mak">Makassar</option>
                    <option value="mg">Malagasy</option>
                    <option value="ms">Malay</option>
                    <option value="ms-Arab">Malay (Jawi)</option>
                    <option value="ml">Malayalam</option>
                    <option value="mt">Maltese</option>
                    <option value="mam">Mam</option>
                    <option value="gv">Manx</option>
                    <option value="mi">Maori</option>
                    <option value="mr">Marathi</option>
                    <option value="mh">Marshallese</option>
                    <option value="mwr">Marwadi</option>
                    <option value="mfe">Mauritian Creole</option>
                    <option value="chm">Meadow Mari</option>
                    <option value="mni-Mtei">Meiteilon (Manipuri)</option>
                    <option value="min">Minang</option>
                    <option value="lus">Mizo</option>
                    <option value="mn">Mongolian</option>
                    <option value="my">Myanmar (Burmese)</option>
                    <option value="bm-Nkoo">N'Ko</option>
                    <option value="nhe">Nahuatl (Eastern Huasteca)</option>
                    <option value="ndc-ZW">Ndau</option>
                    <option value="nr">Ndebele (South)</option>
                    <option value="new">Nepal Bhasa (Newari)</option>
                    <option value="ne">Nepali</option>
                    <option value="no">Norwegian</option>
                    <option value="nus">Nuer</option>
                    <option value="oc">Occitan</option>
                    <option value="or">Odia (Oriya)</option>
                    <option value="om">Oromo</option>
                    <option value="os">Ossetian</option>
                    <option value="pag">Pangasinan</option>
                    <option value="pap">Papiamento</option>
                    <option value="ps">Pashto</option>
                    <option value="fa">Persian</option>
                    <option value="pl">Polish</option>
                    <option value="pt">Portuguese (Brazil)</option>
                    <option value="pt-PT">Portuguese (Portugal)</option>
                    <option value="pa">Punjabi (Gurmukhi)</option>
                    <option value="pa-Arab">Punjabi (Shahmukhi)</option>
                    <option value="qu">Quechua</option>
                    <option value="kek">Qʼeqchiʼ</option>
                    <option value="rom">Romani</option>
                    <option value="ro">Romanian</option>
                    <option value="rn">Rundi</option>
                    <option value="ru">Russian</option>
                    <option value="se">Sami (North)</option>
                    <option value="sm">Samoan</option>
                    <option value="sg">Sango</option>
                    <option value="sa">Sanskrit</option>
                    <option value="sat-Latn">Santali</option>
                    <option value="gd">Scots Gaelic</option>
                    <option value="nso">Sepedi</option>
                    <option value="sr">Serbian</option>
                    <option value="st">Sesotho</option>
                    <option value="crs">Seychellois Creole</option>
                    <option value="shn">Shan</option>
                    <option value="sn">Shona</option>
                    <option value="scn">Sicilian</option>
                    <option value="szl">Silesian</option>
                    <option value="sd">Sindhi</option>
                    <option value="si">Sinhala</option>
                    <option value="sk">Slovak</option>
                    <option value="sl">Slovenian</option>
                    <option value="so">Somali</option>
                    <option value="es">Spanish</option>
                    <option value="su">Sundanese</option>
                    <option value="sus">Susu</option>
                    <option value="sw">Swahili</option>
                    <option value="ss">Swati</option>
                    <option value="sv">Swedish</option>
                    <option value="ty">Tahitian</option>
                    <option value="tg">Tajik</option>
                    <option value="ber-Latn">Tamazight</option>
                    <option value="ber">Tamazight (Tifinagh)</option>
                    <option value="ta">Tamil</option>
                    <option value="tt">Tatar</option>
                    <option value="te">Telugu</option>
                    <option value="tet">Tetum</option>
                    <option value="th">Thai</option>
                    <option value="bo">Tibetan</option>
                    <option value="ti">Tigrinya</option>
                    <option value="tiv">Tiv</option>
                    <option value="tpi">Tok Pisin</option>
                    <option value="to">Tongan</option>
                    <option value="ts">Tsonga</option>
                    <option value="tn">Tswana</option>
                    <option value="tcy">Tulu</option>
                    <option value="tum">Tumbuka</option>
                    <option value="tr">Turkish</option>
                    <option value="tk">Turkmen</option>
                    <option value="tyv">Tuvan</option>
                    <option value="ak">Twi</option>
                    <option value="udm">Udmurt</option>
                    <option value="uk">Ukrainian</option>
                    <option value="ur">Urdu</option>
                    <option value="ug">Uyghur</option>
                    <option value="uz">Uzbek</option>
                    <option value="ve">Venda</option>
                    <option value="vec">Venetian</option>
                    <option value="vi">Vietnamese</option>
                    <option value="war">Waray</option>
                    <option value="cy">Welsh</option>
                    <option value="wo">Wolof</option>
                    <option value="xh">Xhosa</option>
                    <option value="sah">Yakut</option>
                    <option value="yi">Yiddish</option>
                    <option value="yo">Yoruba</option>
                    <option value="yua">Yucatec Maya</option>
                    <option value="zap">Zapotec</option>
                    <option value="zu">Zulu</option>
                  </select>
                </div>
                Powered by{" "}
                <span style={{ whiteSpace: "nowrap" }}>
                  <a
                    className="VIpgJd-ZVi9od-l4eHX-hSRGPd"
                    href="https://translate.google.com"
                    target="_blank"
                  >
                    <img
                      src="https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png"
                      width="37px"
                      height="14px"
                      style={{ paddingRight: 3 }}
                      alt="Google Translate"
                    />
                    Translate
                  </a>
                </span>
              </div>
            </div>
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
        <div
          className="tradingview-widget-container"
          style={{ width: "100%", height: 46 }}
        >
          <iframe
            scrolling="no"
            allowTransparency="true"
            frameBorder={0}
            src="https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22OANDA%3ASPX500USD%22%2C%22title%22%3A%22S%26P%20500%22%7D%2C%7B%22proName%22%3A%22OANDA%3ANAS100USD%22%2C%22title%22%3A%22Nasdaq%20100%22%7D%2C%7B%22proName%22%3A%22FX_IDC%3AEURUSD%22%2C%22title%22%3A%22EUR%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22BTC%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22ETH%2FUSD%22%7D%5D%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A46%2C%22utm_source%22%3A%22sm.danloaded.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22sm.danloaded.com%2FBrokerV2.5%2F%23%22%7D"
            title="ticker tape TradingView widget"
            lang="en"
            style={{
              userSelect: "none",
              boxSizing: "border-box",
              display: "block",
              height: 46,
              width: "100%",
            }}
          />
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n\t.tradingview-widget-copyright {\n\t\tfont-size: 13px !important;\n\t\tline-height: 32px !important;\n\t\ttext-align: center !important;\n\t\tvertical-align: middle !important;\n\t\t/* @mixin sf-pro-display-font; */\n\t\tfont-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif !important;\n\t\tcolor: #B2B5BE !important;\n\t}\n\n\t.tradingview-widget-copyright .blue-text {\n\t\tcolor: #2962FF !important;\n\t}\n\n\t.tradingview-widget-copyright a {\n\t\ttext-decoration: none !important;\n\t\tcolor: #B2B5BE !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited {\n\t\tcolor: #B2B5BE !important;\n\t}\n\n\t.tradingview-widget-copyright a:hover .blue-text {\n\t\tcolor: #1E53E5 !important;\n\t}\n\n\t.tradingview-widget-copyright a:active .blue-text {\n\t\tcolor: #1848CC !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited .blue-text {\n\t\tcolor: #2962FF !important;\n\t}\n\t",
            }}
          />
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
            <a href="login" className="btn-get-started ml-1">
              Login
            </a>
            <a
              href="register"
              className="btn-get-started ml-1 btn-primary text-light rounded"
            >
              {" "}
              Signup
            </a>
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
                    We don't require identity verification. Information about
                    your activity on the website is private and can't be
                    accessed by third parties.
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
                        src="temp/front/assets/img/testimonials/avatar5.jpg"
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
                        src="temp/front/assets/img/testimonials/avatar4.jpg"
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
                        src="temp/front/assets/img/testimonials/avatar3.jpg"
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
                        src="temp/front/assets/img/testimonials/avatar2.jpg"
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
                        src="temp/front/assets/img/testimonials/avatar.jpg"
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
                        src="temp/front/assets/img/testimonials/avatar5.jpg"
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
                        src="temp/front/assets/img/testimonials/avatar4.jpg"
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
                        src="temp/front/assets/img/testimonials/avatar3.jpg"
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
                        src="temp/front/assets/img/testimonials/avatar2.jpg"
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
                        src="temp/front/assets/img/testimonials/avatar.jpg"
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
                        src="temp/front/assets/img/testimonials/avatar5.jpg"
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
        {/* End Testimonials Section */}
        {/* ======= Frequently Asked Questions Section ======= */}
        <section id="faq" className="faq section-bg">
          <div className="container aos-init" data-aos="fade-up">
            <div className="section-title">
              <h2>F.A.Q</h2>
              <h3>
                Frequently Asked <span>Questions</span>
              </h3>
              <p>
                A collection of the most popular questions asked by our users
              </p>
            </div>
            <ul
              className="faq-list aos-init"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <li>
                <a data-toggle="collapse" className="" href="#faq1">
                  What is Danloaded Investment?{" "}
                  <i className="icofont-simple-up" />
                </a>
                <div
                  id="faq1"
                  className="collapse show"
                  data-parent=".faq-list"
                >
                  <p>
                    Danloaded Investment is a Binary and Forex trading platform.
                    The platform is designed to make trading a pleasant and
                    profitable experience for you, regardless of your level of
                    training.
                  </p>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#faq24">
                  How do I become a Member? <i className="icofont-simple-up" />
                </a>
                <div id="faq24" className="collapse" data-parent=".faq-list">
                  <p>
                    This can be done quickly and easily. Click the Registration
                    button and fill out a simple form, after which a welcome
                    email will be sent to your e-mail address. Using the
                    registration data, log in to your Member's Area, where you
                    can carry out all activities related to management of your
                    account.
                  </p>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#faq2" className="collapsed">
                  Do I need to deposit right away?{" "}
                  <i className="icofont-simple-up" />
                </a>
                <div id="faq2" className="collapse" data-parent=".faq-list">
                  <p>
                    Yes you need to make a deposit before trading. We do not
                    offer a demo account for traders.
                  </p>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#faq3" className="collapsed">
                  Do I need to download any software to trade?{" "}
                  <i className="icofont-simple-up" />
                </a>
                <div id="faq3" className="collapse" data-parent=".faq-list">
                  <p>
                    Trading is carried out on the web-platform. The downloading
                    of additional software is not necessary. We recommend
                    trading on the most current version of your browser.
                  </p>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#faq5" className="collapsed">
                  At what age is trading permitted?{" "}
                  <i className="icofont-simple-up" />
                </a>
                <div id="faq5" className="collapse" data-parent=".faq-list">
                  <p>
                    You must be 18 years old or older to sign up and trade on
                    the platform.
                  </p>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#faq6" className="collapsed">
                  Can bots or automated trading processes be used?{" "}
                  <i className="icofont-simple-up" />
                </a>
                <div id="faq6" className="collapse" data-parent=".faq-list">
                  <p>
                    Bots and Automatic trading on this website is prohibited.
                    Any User that attempts to use any such means would be fined
                  </p>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#faq7" className="collapsed">
                  Which currency can be used for trading?{" "}
                  <i className="icofont-simple-up" />
                </a>
                <div id="faq7" className="collapse" data-parent=".faq-list">
                  <p>We only offer USD for trading.</p>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#faq8" className="collapsed">
                  How can I delete my account on the website?{" "}
                  <i className="icofont-simple-up" />
                </a>
                <div id="faq8" className="collapse" data-parent=".faq-list">
                  <p>
                    To delete an account, you need to send an email with the
                    subject "Block account" to test@danloaded.com from the email
                    address with which you signed up for the account, or you can
                    fill out a ticket request using our contact form found on
                    the homepage of this website. After which we would verify if
                    the account belongs to you.
                  </p>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#faq9" className="collapsed">
                  I have a question that is not here?{" "}
                  <i className="icofont-simple-up" />
                </a>
                <div id="faq9" className="collapse" data-parent=".faq-list">
                  <p>
                    You can use the contact form on the homepage of this website
                    to send us a message. Or email us directly at
                    test@danloaded.com
                  </p>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#faq10" className="collapsed">
                  How can I deposit funds into my trading account?{" "}
                  <i className="icofont-simple-up" />
                </a>
                <div id="faq10" className="collapse" data-parent=".faq-list">
                  <p>
                    Funding your account is easy and secure. You can fund your
                    account by Bitcoin, Western union, Skrill, Moneygram and
                    PerfectMoney.
                  </p>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#faq11" className="collapsed">
                  How quickly will funds be added to my account?
                  <i className="icofont-simple-up" />
                </a>
                <div id="faq11" className="collapse" data-parent=".faq-list">
                  <p>
                    The funds will be available for trading immediately, once we
                    receive a confirmation from payment system.
                  </p>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#faq12" className="collapsed">
                  Can I see the history of all my transactions?{" "}
                  <i className="icofont-simple-up" />
                </a>
                <div id="faq12" className="collapse" data-parent=".faq-list">
                  <p>
                    Information on all your transactions is located on your
                    Account page/Dashboard.
                  </p>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#faq13" className="collapsed">
                  How can I deposit funds into my trading account?{" "}
                  <i className="icofont-simple-up" />
                </a>
                <div id="faq13" className="collapse" data-parent=".faq-list">
                  <p>
                    Funding your account is easy and secure. You can fund your
                    account by Bitcoin, Western union, Skrill, Moneygram and
                    PerfectMoney.
                  </p>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#faq14" className="collapsed">
                  What is the minimum and maximum deposit amount?{" "}
                  <i className="icofont-simple-up" />
                </a>
                <div id="faq14" className="collapse" data-parent=".faq-list">
                  <p>
                    The minimum deposit amount is $100 for Bitcoin and
                    PerfectMoney, and $300 for other payment methods. The
                    maximum deposit amount is $1,000,000.
                  </p>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#faq15" className="collapsed">
                  Does Danloaded Investment accept cash deposits?{" "}
                  <i className="icofont-simple-up" />
                </a>
                <div id="faq15" className="collapse" data-parent=".faq-list">
                  <p>Danloaded Investment does not accept cash deposits.</p>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#faq16" className="collapsed">
                  Which currencies can I deposit?{" "}
                  <i className="icofont-simple-up" />
                </a>
                <div id="faq16" className="collapse" data-parent=".faq-list">
                  <p>
                    Danloaded Investment accepts and converts all currencies to
                    USD
                  </p>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#faq17" className="collapsed">
                  What are the conditions for withdrawal?
                  <i className="icofont-simple-up" />
                </a>
                <div id="faq17" className="collapse" data-parent=".faq-list">
                  <p>
                    After making a withdrawal request you will be contacted on
                    steps to follow accordingly.
                  </p>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#faq18" className="collapsed">
                  What methods are there for withdrawal?{" "}
                  <i className="icofont-simple-up" />
                </a>
                <div id="faq18" className="collapse" data-parent=".faq-list">
                  <p>
                    All withdrawals can be processed with any of the available
                    deposit methods.
                  </p>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#faq19" className="collapsed">
                  How fast will I receive my funds?{" "}
                  <i className="icofont-simple-up" />
                </a>
                <div id="faq19" className="collapse" data-parent=".faq-list">
                  <p>
                    Withdrawal will be processed as soon as all documents
                    required for withdrawal have been verified by Danloaded
                    Investment. Danloaded Investment will notify you via email
                    as soon as funds have been processed. It is then left for
                    you to wait to receive the funds by the payment method you
                    selected earlier.
                  </p>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#faq20" className="collapsed">
                  What are the withdrawal charges{" "}
                  <i className="icofont-simple-up" />
                </a>
                <div id="faq20" className="collapse" data-parent=".faq-list">
                  <p>
                    Withdrawal charges will be made known to clients via email.
                  </p>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#faq21" className="collapsed">
                  What is the minimum and maximum withdrawal amount?{" "}
                  <i className="icofont-simple-up" />
                </a>
                <div id="faq21" className="collapse" data-parent=".faq-list">
                  <p>The minimum withdrawal amount $1000.</p>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#faq22" className="collapsed">
                  Do I need to provide any documents for withdrawal?{" "}
                  <i className="icofont-simple-up" />
                </a>
                <div id="faq22" className="collapse" data-parent=".faq-list">
                  <p>
                    The security team has the right to request a scanned image
                    or digital photo of the first page of a valid ID card, as
                    well as additional documentation (a photo of a credit card,
                    a photo of you holding your passport open at the photo page,
                    a screenshot of your electronic wallet) to make sure that
                    the account details and documentation belong to the person
                    requesting the withdrawal.
                  </p>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#faq23" className="collapsed">
                  Can I withdraw from my account money that I deposited before
                  trading? <i className="icofont-simple-up" />
                </a>
                <div id="faq23" className="collapse" data-parent=".faq-list">
                  <p>
                    Yes, this is possible. However, you will be charged a small
                    fee.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        {/* End Frequently Asked Questions Section */}
        {/* ======= Contact Section ======= */}
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
      {/* Fake Notifications stylesheet */}
      <link
        rel="stylesheet"
        href="temp/custom/resource/views/home/home4/alert/css/fake-notification-min.css"
      />
      <link
        rel="stylesheet"
        href="temp/custom/resource/views/home/home4/alert/css/animate.min.css"
      />
      <link
        rel="stylesheet"
        href="temp/custom/resource/views/home/home4/alert/css/font-awesome.min.css"
      />
      {/* Fake Notifications stylesheet */}
      {/* ========== Copy Here to your script footer before the (/body Tag ) ========== */}
      {/* Fake Notifications jQuery plugin */}
      {/* ========== Paste this one after the <body tag )  ========== */}
      <div
        id="notification-1"
        className="notification animated slideInUp"
        onclick="window.open('login','_blank');"
        style={{
          top: "10%",
          right: "20%",
          borderRadius: 5,
          borderWidth: 3,
          borderColor: "rgb(109, 27, 123)",
          background: "rgb(109, 27, 123)",
          cursor: "pointer",
          display: "block",
        }}
      >
        <div className="notification-block">
          <div
            className="notification-img"
            style={{ color: "rgb(255, 255, 255)" }}
          >
            {/* Your image or icon */}
            <i className="fa fa-btc" aria-hidden="true" />
            {/* / Your image or icon */}
          </div>
          <div className="notification-text-block" style={{ color: "white" }}>
            <div className="notification-title">
              {/* Notification Title */}
              Earning
              {/* / Notification Title */}
            </div>
            <div className="notification-text">
              Oliver from UNITED KINGDOM has just Earned <b>$5324</b>.
            </div>
          </div>
        </div>
      </div>
      {/* ========== Copy Here to your script footer before the (/body Tag ) ========== */}
      {/* Fake Notifications jQuery plugin */}
      {/* Fake Notifications invoke */}
      <div
        id="goog-gt-tt"
        className="VIpgJd-yAWNEb-L7lbkb skiptranslate"
        style={{
          borderRadius: 12,
          margin: "0 0 0 -23px",
          padding: 0,
          fontFamily: '"Google Sans", Arial, sans-serif',
        }}
        data-id=""
      >
        <div id="goog-gt-vt" className="VIpgJd-yAWNEb-hvhgNd">
          <div className=" VIpgJd-yAWNEb-hvhgNd-l4eHX-i3jM8c">
            <img
              src="https://fonts.gstatic.com/s/i/productlogos/translate/v14/24px.svg"
              width={24}
              height={24}
              alt=""
            />
          </div>
          <div className=" VIpgJd-yAWNEb-hvhgNd-k77Iif-i3jM8c">
            <div className="VIpgJd-yAWNEb-hvhgNd-IuizWc" dir="ltr">
              Original text
            </div>
            <div
              id="goog-gt-original-text"
              className="VIpgJd-yAWNEb-nVMfcd-fmcmS VIpgJd-yAWNEb-hvhgNd-axAV1"
            />
          </div>
          <div className="VIpgJd-yAWNEb-hvhgNd-N7Eqid ltr">
            <div className="VIpgJd-yAWNEb-hvhgNd-N7Eqid-B7I4Od ltr" dir="ltr">
              <div className="VIpgJd-yAWNEb-hvhgNd-UTujCb">
                Rate this translation
              </div>
              <div className="VIpgJd-yAWNEb-hvhgNd-eO9mKe">
                Your feedback will be used to help improve Google Translate
              </div>
            </div>
            <div className="VIpgJd-yAWNEb-hvhgNd-xgov5 ltr">
              <button
                id="goog-gt-thumbUpButton"
                type="button"
                className="VIpgJd-yAWNEb-hvhgNd-bgm6sf"
                title="Good translation"
                aria-label="Good translation"
                aria-pressed="false"
              >
                <span id="goog-gt-thumbUpIcon">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="VIpgJd-yAWNEb-hvhgNd-THI6Vb NMm5M"
                  >
                    <path d="M21 7h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 0S7.08 6.85 7 7H2v13h16c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73V9c0-1.1-.9-2-2-2zM7 18H4V9h3v9zm14-7l-3 7H9V8l4.34-4.34L12 9h9v2z" />
                  </svg>
                </span>
                <span id="goog-gt-thumbUpIconFilled">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="VIpgJd-yAWNEb-hvhgNd-THI6Vb NMm5M"
                  >
                    <path d="M21 7h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 0S7.08 6.85 7 7v13h11c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73V9c0-1.1-.9-2-2-2zM5 7H1v13h4V7z" />
                  </svg>
                </span>
              </button>
              <button
                id="goog-gt-thumbDownButton"
                type="button"
                className="VIpgJd-yAWNEb-hvhgNd-bgm6sf"
                title="Poor translation"
                aria-label="Poor translation"
                aria-pressed="false"
              >
                <span id="goog-gt-thumbDownIcon">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="VIpgJd-yAWNEb-hvhgNd-THI6Vb NMm5M"
                  >
                    <path d="M3 17h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 24s7.09-6.85 7.17-7h5V4H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2zM17 6h3v9h-3V6zM3 13l3-7h9v10l-4.34 4.34L12 15H3v-2z" />
                  </svg>
                </span>
                <span id="goog-gt-thumbDownIconFilled">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="VIpgJd-yAWNEb-hvhgNd-THI6Vb NMm5M"
                  >
                    <path d="M3 17h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 24s7.09-6.85 7.17-7V4H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2zm16 0h4V4h-4v13z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div
            id="goog-gt-votingHiddenPane"
            className="VIpgJd-yAWNEb-hvhgNd-aXYTce"
          >
            <form
              id="goog-gt-votingForm"
              action="//translate.googleapis.com/translate_voting?client=te"
              method="post"
              target="votingFrame"
              className="VIpgJd-yAWNEb-hvhgNd-aXYTce"
            >
              <input type="text" name="sl" id="goog-gt-votingInputSrcLang" />
              <input type="text" name="tl" id="goog-gt-votingInputTrgLang" />
              <input type="text" name="query" id="goog-gt-votingInputSrcText" />
              <input
                type="text"
                name="gtrans"
                id="goog-gt-votingInputTrgText"
              />
              <input type="text" name="vote" id="goog-gt-votingInputVote" />
            </form>
            <iframe name="votingFrame" frameBorder={0} />
          </div>
        </div>
      </div>
      <div className="VIpgJd-ZVi9od-aZ2wEe-wOHMyf">
        <div className="VIpgJd-ZVi9od-aZ2wEe-OiiCO">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="VIpgJd-ZVi9od-aZ2wEe"
            width="96px"
            height="96px"
            viewBox="0 0 66 66"
          >
            <circle
              className="VIpgJd-ZVi9od-aZ2wEe-Jt5cK"
              fill="none"
              strokeWidth={6}
              strokeLinecap="round"
              cx={33}
              cy={33}
              r={30}
            />
          </svg>
        </div>
      </div>
      <div
        id="gb-widget-1816"
        style={{
          bottom: 14,
          left: 16,
          boxSizing: "border-box",
          direction: "ltr",
          textAlign: "left",
          flexDirection: "row-reverse",
          position: "fixed !important",
          zIndex: "16000160 !important",
          opacity: 1,
        }}
      >
        <div className="sc-q8c6tt-3 kvLxar">
          <a
            href="https://wa.me/2349063827037"
            target="_blank"
            className="sc-1s18q3d-2 sc-8eqc3y-1 eA-Dkgm EPOka"
          >
            <div className="sc-8eqc3y-0 cEaIkM">Contact us!</div>
          </a>
          <div color="#4dc247" size={50} className="sc-q8c6tt-1 ljrDDi">
            <a
              size={50}
              href="https://wa.me/2349063827037"
              target="_blank"
              aria-label="Go to whatsapp"
              color="#4dc247"
              id=""
              direction="column"
              order="whatsapp"
              className="sc-q8c6tt-0 kwCIV"
            >
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{
                  width: "100%",
                  height: "100%",
                  fill: "rgb(255, 255, 255)",
                  stroke: "none",
                }}
              >
                <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z" />
              </svg>
            </a>
          </div>
        </div>
        <a
          size={50}
          type="link"
          href="https://getbutton.io/?utm_campaign=multy_widget&utm_medium=widget&utm_source=sm.danloaded.com"
          target="_blank"
          aria-label="Go to GetButton.io website"
          className="sc-sbsi7l-0 ijfSyc"
        >
          <div className="sc-1au8ryl-0 dkuywW">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.16 10.15">
              <path
                d="M2.49,6.42,1.65,9.75c-.09.27.18.54.4.21L3.68,7.89A5.49,5.49,0,0,0,4.76,8C7.4,8,9.53,6.21,9.53,4S7.4,0,4.76,0,0,1.79,0,4A3.47,3.47,0,0,0,.24,5.25a.45.45,0,0,0,.49.18,7.07,7.07,0,0,0,.7-.26s.24-.1.19-.48h0A2,2,0,0,1,1.49,4C1.49,2.62,3,1.5,4.76,1.5S8,2.62,8,4,6.57,6.5,4.76,6.5a4.06,4.06,0,0,1-1.68-.36A.49.49,0,0,0,2.49,6.42Z"
                fill="#afafaf"
              />
              <path
                d="M11.12,10.15H11l-1.49-.9a5.45,5.45,0,0,1-2.4.6,4.16,4.16,0,0,1-2.27-.62L5,9.17c2.22,0,5.43-1.66,5.61-4.37h0a3,3,0,0,1,.57,1.86,2.33,2.33,0,0,1-.65,1.64l.52,1.29s.22.44.16.51-.06.05-.11.05Z"
                fill="#afafaf"
              />
              <path
                d="M49.84,3.21h0a2.33,2.33,0,0,1,2.32,2.34v1.3a2.33,2.33,0,0,1-2.32,2.33h0a2.34,2.34,0,0,1-2.33-2.33V5.55A2.34,2.34,0,0,1,49.84,3.21Zm0,1.16h0a1,1,0,0,1,1,1V7a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V5.39A1,1,0,0,1,49.84,4.37Z"
                fill="#afafaf"
                fillRule="evenodd"
              />
              <path
                d="M55.83,3.21h0a2.34,2.34,0,0,1,2.33,2.34V9.06H56.84V5.39a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V9.06H53.5V5.55A2.34,2.34,0,0,1,55.83,3.21Z"
                fill="#afafaf"
              />
              <path
                d="M36.93,9.06h0a2.33,2.33,0,0,0,2.33-2.32V3.21H37.94V6.9a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V3.21H34.6V6.74A2.33,2.33,0,0,0,36.93,9.06Z"
                fill="#afafaf"
              />
              <polygon
                points="43.2 3.37 42.12 3.37 42.12 1.79 40.97 1.79 40.97 3.37 39.91 3.37 40.26 4.39 40.97 4.39 40.97 9.03 42.12 9.03 42.12 4.39 43.2 4.39 43.2 3.37"
                fill="#afafaf"
              />
              <polygon
                points="46.76 3.37 45.67 3.37 45.67 1.79 44.52 1.79 44.52 3.37 43.47 3.37 43.81 4.39 44.52 4.39 44.52 9.03 45.67 9.03 45.67 4.39 46.76 4.39 46.76 3.37"
                fill="#afafaf"
              />
              <path
                d="M28.56,1.73H30.9a3.48,3.48,0,0,1,1.34.18,1.53,1.53,0,0,1,.66.63,2.11,2.11,0,0,1,.27,1,2,2,0,0,1-.23.95,1.6,1.6,0,0,1-.59.64,1.49,1.49,0,0,1,.8.64,2.09,2.09,0,0,1,.3,1.11,2.31,2.31,0,0,1-.38,1.35,1.54,1.54,0,0,1-.88.68A9,9,0,0,1,30.54,9h-2ZM29.73,3V4.64h.78a7.06,7.06,0,0,0,.87,0,.71.71,0,0,0,.47-.26A.86.86,0,0,0,32,3.77a.91.91,0,0,0-.14-.52A.64.64,0,0,0,31.55,3a8.16,8.16,0,0,0-1.14,0Zm0,2.9V7.79h1.1a3.49,3.49,0,0,0,.92-.07.71.71,0,0,0,.35-.3,1.13,1.13,0,0,0,.13-.58,1.2,1.2,0,0,0-.14-.59.88.88,0,0,0-.4-.32,4.1,4.1,0,0,0-1-.08Z"
                fill="#afafaf"
              />
              <polygon
                points="27.56 3.37 26.47 3.37 26.47 1.79 25.32 1.79 25.32 3.37 24.27 3.37 24.62 4.39 25.32 4.39 25.32 9.03 26.47 9.03 26.47 4.39 27.56 4.39 27.56 3.37"
                fill="#afafaf"
              />
              <path
                d="M21.49,3.21h0a2.34,2.34,0,0,1,2.33,2.34v1H20.48V7c0,1.25,1.94,1.19,2.3.72l1,.72c-1.13,1.36-4.59.87-4.59-1.61V5.55A2.34,2.34,0,0,1,21.49,3.21Zm-1,2.38h2v-.2a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1Z"
                fill="#afafaf"
              />
              <path
                d="M17.27,3.05a3.82,3.82,0,0,0-2.68,0,1.14,1.14,0,0,0-.5.79h0V6.86a1.17,1.17,0,0,0,1.06,1,3.9,3.9,0,0,0,1.54-.09V6.12H15.9V4.77H18v3.4a.64.64,0,0,1-.31.64,4.55,4.55,0,0,1-2.73.4A2.52,2.52,0,0,1,12.75,7V3.79h0a2.67,2.67,0,0,1,1.14-1.92l0,0c1.56-.91,3.82,0,3.83,0Z"
                fill="#afafaf"
              />
            </svg>
          </div>
        </a>
      </div>
    </>
  );
}
