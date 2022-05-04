import LogoDark from "../../assets/logo.png";
import FB from "../../assets/fb.png";
import TW from "../../assets/tw.png";
import YT from "../../assets/yt.png";
import IG from "../../assets/ig.png";


export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>
                    TenWeb, Inc. 40 E Main St, Suite 721 Newark, DE 19711 United
                    States
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>9876543210 0</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>info@10web.io</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html">
                    <img src={LogoDark} alt="logo"  height="50" />
                  </a>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="https://www.facebook.com/10Web.io/">
                    <img src={FB} alt="FB" />
                  </a>
                  <a href="https://twitter.com/10web_io">
                    <img src={TW} alt="TW" />
                  </a>
                  <a href="https://www.youtube.com/channel/UCbpgbeWR3B6w1HtuYQxoNlA">
                    <img src={YT} alt="YT" />
                  </a>
                  <a href="https://www.instagram.com/accounts/login/?next=/10web.io/">
                    <img src={IG} alt="IG" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <a href="https://10web.io/about-us/?_gl=1*1q5o66u*_ga_2J827PZZKP*MTY1MTY2ODI5NS4xMS4xLjE2NTE2NjkwNDYuMzI.*_fplc*WG12NFdFTSUyRjdvSWFOOEpPVzJlNEVxUjd6ZEVJeDhCU0l0enRKSElTYVQ5eWpsaXNCQTZSc0tzMmFWR3hwVzYySlhTVkNpUkVEZnNFTGhRa3FOdnd6UnFhY3hrc0ZKWjAlMkJiaEpCd2NFbHBxdlVEQVdWakJuU2RCQnB4RFlGQSUzRCUzRA..">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="https://10web.io/pricing/?_gl=1*1q5o66u*_ga_2J827PZZKP*MTY1MTY2ODI5NS4xMS4xLjE2NTE2NjkwNDYuMzI.*_fplc*WG12NFdFTSUyRjdvSWFOOEpPVzJlNEVxUjd6ZEVJeDhCU0l0enRKSElTYVQ5eWpsaXNCQTZSc0tzMmFWR3hwVzYySlhTVkNpUkVEZnNFTGhRa3FOdnd6UnFhY3hrc0ZKWjAlMkJiaEpCd2NFbHBxdlVEQVdWakJuU2RCQnB4RFlGQSUzRCUzRA..">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="https://10web.io/ai-powered-wordpress-platform-for-smbs/?_gl=1*30ct0x*_ga_2J827PZZKP*MTY1MTY2ODI5NS4xMS4xLjE2NTE2NzEzODQuNDg.*_fplc*WG12NFdFTSUyRjdvSWFOOEpPVzJlNEVxUjd6ZEVJeDhCU0l0enRKSElTYVQ5eWpsaXNCQTZSc0tzMmFWR3hwVzYySlhTVkNpUkVEZnNFTGhRa3FOdnd6UnFhY3hrc0ZKWjAlMkJiaEpCd2NFbHBxdlVEQVdWakJuU2RCQnB4RFlGQSUzRCUzRA..">
                      10Web for SMBs
                    </a>
                  </li>
                  <li>
                    <a href="https://10web.io/automated-website-management/?_gl=1*30ct0x*_ga_2J827PZZKP*MTY1MTY2ODI5NS4xMS4xLjE2NTE2NzEzODQuNDg.*_fplc*WG12NFdFTSUyRjdvSWFOOEpPVzJlNEVxUjd6ZEVJeDhCU0l0enRKSElTYVQ5eWpsaXNCQTZSc0tzMmFWR3hwVzYySlhTVkNpUkVEZnNFTGhRa3FOdnd6UnFhY3hrc0ZKWjAlMkJiaEpCd2NFbHBxdlVEQVdWakJuU2RCQnB4RFlGQSUzRCUzRA..">
                      Website Management
                    </a>
                  </li>
                  <li>
                    <a href="https://10web.io/automated-wordpress-migration/?_gl=1*1r4msu8*_ga_2J827PZZKP*MTY1MTY2ODI5NS4xMS4xLjE2NTE2NzEzODQuNDg.*_fplc*WG12NFdFTSUyRjdvSWFOOEpPVzJlNEVxUjd6ZEVJeDhCU0l0enRKSElTYVQ5eWpsaXNCQTZSc0tzMmFWR3hwVzYySlhTVkNpUkVEZnNFTGhRa3FOdnd6UnFhY3hrc0ZKWjAlMkJiaEpCd2NFbHBxdlVEQVdWakJuU2RCQnB4RFlGQSUzRCUzRA..">
                      1-Click Migration
                    </a>
                  </li>
                  <li>
                    <a href="https://10web.io/automated-wordpress-pagespeed-optimization/?_gl=1*1r4msu8*_ga_2J827PZZKP*MTY1MTY2ODI5NS4xMS4xLjE2NTE2NzEzODQuNDg.*_fplc*WG12NFdFTSUyRjdvSWFOOEpPVzJlNEVxUjd6ZEVJeDhCU0l0enRKSElTYVQ5eWpsaXNCQTZSc0tzMmFWR3hwVzYySlhTVkNpUkVEZnNFTGhRa3FOdnd6UnFhY3hrc0ZKWjAlMkJiaEpCd2NFbHBxdlVEQVdWakJuU2RCQnB4RFlGQSUzRCUzRA..">
                      PageSpeed Booster
                    </a>
                  </li>
                  <li>
                    <a href="https://help.10web.io/hc/en-us/articles/360028017772-Public-roadmap/">
                      Roadmap
                    </a>
                  </li>
                  <li>
                    <a href="https://experts.10web.io/become-a-10web-expert/?_gl=1*1r4msu8*_ga_2J827PZZKP*MTY1MTY2ODI5NS4xMS4xLjE2NTE2NzEzODQuNDg.*_fplc*WG12NFdFTSUyRjdvSWFOOEpPVzJlNEVxUjd6ZEVJeDhCU0l0enRKSElTYVQ5eWpsaXNCQTZSc0tzMmFWR3hwVzYySlhTVkNpUkVEZnNFTGhRa3FOdnd6UnFhY3hrc0ZKWjAlMkJiaEpCd2NFbHBxdlVEQVdWakJuU2RCQnB4RFlGQSUzRCUzRA..">
                      Become a 10Web Expert
                    </a>
                  </li>
                  <li>
                    <a href="https://experts.10web.io/find-an-expert/?_gl=1*ffw3h4*_ga_2J827PZZKP*MTY1MTY2ODI5NS4xMS4xLjE2NTE2NzEzODQuNDg.*_fplc*WG12NFdFTSUyRjdvSWFOOEpPVzJlNEVxUjd6ZEVJeDhCU0l0enRKSElTYVQ5eWpsaXNCQTZSc0tzMmFWR3hwVzYySlhTVkNpUkVEZnNFTGhRa3FOdnd6UnFhY3hrc0ZKWjAlMkJiaEpCd2NFbHBxdlVEQVdWakJuU2RCQnB4RFlGQSUzRCUzRA..">
                      Hire an Expert
                    </a>
                  </li>
                  <li>
                    <a href="https://10web.io/blog/?_gl=1*5mglg*_ga_2J827PZZKP*MTY1MTY2ODI5NS4xMS4xLjE2NTE2NjkwNDYuMzI.*_fplc*WG12NFdFTSUyRjdvSWFOOEpPVzJlNEVxUjd6ZEVJeDhCU0l0enRKSElTYVQ5eWpsaXNCQTZSc0tzMmFWR3hwVzYySlhTVkNpUkVEZnNFTGhRa3FOdnd6UnFhY3hrc0ZKWjAlMkJiaEpCd2NFbHBxdlVEQVdWakJuU2RCQnB4RFlGQSUzRCUzRA..">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button>Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
