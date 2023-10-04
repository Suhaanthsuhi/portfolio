const Section4 = () => {
  const checkform = () => {
    let pnum = document.getElementById("pnumber").value;
        if( (pnum=="") || isNaN(pnum)) {
            window.alert("Please enter valid phone number");
            return false;
        }
  }
  return (
    <section className="section4" id="contact">
      <div className="section-title text-center">
        <h2 className="s-2-title">Contact</h2>
        <h4 className="s-2-subtitle">--Get in touch--</h4>
      </div>
      <div className="contactform flex justify-between align-start">
        <div className="leftside">
          <div className="my-con-det">
            <h2 className="ff-ro text-center ff-ro fw-400">Get in Touch</h2>
            <div className="mail p-1">
              <span className="flex align-center justify-start cursor-pointer">
                <i className="fa-solid impicon fa-envelope" /> &nbsp;
                suhaanthsuhi356@gmail.com
              </span>
            </div>
            <div className="pno p-1">
              <span className="flex align-center justify-start cursor-pointer">
                <i className="fa-solid impicon fa-phone" /> &nbsp;+918217264837
              </span>
            </div>
            <div className="loc p-1">
              <span className="flex align-center justify-start cursor-pointer">
                <i className="fa-solid impicon fa-location-dot" /> &nbsp;
                Bangalore, IN
              </span>
            </div>
            <div className="det">
              <p className="text-justify p-1">
                Hello! You can contact me through my email address or phone
                number i'm glad to help you. Also please checkout my social
                media profiles and keep in touch with me.
              </p>
            </div>
            <div className="socialmedia flex justify-around align-center p-1">
              <a
                href="https://www.facebook.com/suhaanth.suhi.7"
                target="_blank"
                className="sm-link"
              >
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a
                href="https://www.instagram.com/_suhaanth_suhi/"
                target="_blank"
                className="sm-link"
              >
                <i className="fa-brands fa-instagram" />
              </a>
              <a
                href="https://github.com/Suhaanthsuhi"
                target="_blank"
                className="sm-link"
              >
                <i className="fa-brands fa-github" />
              </a>
              <a href="https://www.linkedin.com/in/suhaanth-v-v-a233b7255/" target="_blank" className="sm-link">
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>
        <div className="rightside">
          <h2 className="text-center ff-ro fw-400">Message me</h2>
          <form action="" method="get" className="form" onSubmit={checkform}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              spellCheck="false"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              spellCheck="false"
              autoComplete="off"
              required
            />
            <input
              type="text"
              name="pnumber"
              id="pnumber"
              placeholder="Mobile no"
              pattern="[1-9]{1}[0-9]{9}"
              spellCheck="false"
              autoComplete="off"
              defaultValue=""
            />
            {/* <input name="message" id="message" cols="30" rows="5" placeholder="Message" spellcheck="false" autocomplete="off" spellcheck="true"> */}
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={5}
              placeholder="Message"
              spellCheck="false"
              autoComplete="off"
              defaultValue={""}
            />
            <input
              type="submit"
              defaultValue="Send"
              value="Send"
              id="sendbtn"
              className="cursor-pointer"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Section4;
