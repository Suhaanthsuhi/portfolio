const Footer = () => {
  const jumpToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <>
      <div className="footer flex justify-around align-center">
        <div className="fcon fcon2 text-justify">
          Thank you for visiting my website. I will frequently be updating
          content on this site…and yea projects and services section will be
          updated as soon as possible. Need to share, tell, or suggest anything
          to me you are always welcome. Ahh and check out my social media
          accounts.
        </div>
        <div className="fcon fcon1 flex flex-col align-center justify-between">
          <div className="ftitle">Explore</div>
          <ul className="bottom-nav flex align-center">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <button
        onClick={ jumpToTop }
        id="jumpToTop"
        className="jttbtn cursor-pointer"
      >
        <i className="fa-solid fa-arrow-up" />
      </button>
    </>
  );
};

export default Footer;
