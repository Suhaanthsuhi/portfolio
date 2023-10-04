const Section3 = () => {
  return (
    <section className="section3" id="skills">
      <div className="section-title text-center">
        <h2 className="s-2-title">Skills</h2>
        <h4 className="s-2-subtitle">--What i know--</h4>
      </div>
      <div className="skills flex align-center justify-between">
        <div className="skills-cont">
          <h2 className="text-center ff-ro fw-400">My skills and experience</h2>
          <p className="text-justify p-1">
            Currently, I'm working on backend skills like Nodejs and MongoDB.
            Parallel I am learning the basics of python programming and when it
            comes to programming skills I know C, and C++ languages. ’m a
            self-learned frontend web developer aware of HTML, CSS, and
            Javascript. I can design apps and web pages using Figma or
            whimsical. Know more about my coding skills by checking my coding profiles links given below.
          </p>
          <div className="div-1 flex justify-between align-center">
            <button className="readmore" id="readMore">
              Beginner level
            </button>
            <div className="code-prof flex justify-around align-center">
              <a href="#" className="code-prof-links">
                <img
                  src={require(".//codechef-1324440139527402917.png")}
                  alt="Hrank"
                />
              </a>
              <a
                href="https://www.hackerrank.com/suhaanthsuhi21"
                className="code-prof-links"
              >
                <img
                  src={require(".//160_Hackerrank_logo_logos-512.webp")}
                  alt="Hrank"
                />
              </a>
              <a
                href="https://leetcode.com/Suhaanthsuhi/"
                className="code-prof-links"
              >
                <img src={require(".//LeetCode_logo_black.png")} alt="Hrank" />
              </a>
            </div>
          </div>
        </div>
        <div className="skills-btn flex align-center justify-center">
          <div className="learnt flex justify-center align-center">
            <div className="range flex justify-between align-center cursor-pointer">
              <span>HTML</span>
              <span>90%</span>
            </div>
            <div className="line" />
            <div className="range flex justify-between align-center cursor-pointer">
              <span>CSS</span>
              <span>80%</span>
            </div>
            <div className="line4 css" />
            <div className="range flex justify-between align-center cursor-pointer">
              <span>Javascript</span>
              <span>80%</span>
            </div>
            <div className="line5 js" />
            <div className="range flex justify-between align-center cursor-pointer">
              <span>C</span>
              <span>90%</span>
            </div>
            <div className="line6 c" />
            <div className="range flex justify-between align-center cursor-pointer">
              <span>C++</span>
              <span>50%</span>
            </div>
            <div className="line7 c++" />
            <div className="range flex justify-between align-center cursor-pointer">
              <span>Python</span>
              <span>70%</span>
            </div>
            <div className="line8 python" />
          </div>
          <h2 className="ff-ro fw-400 m-bottom-1">Learning new skills</h2>
          <div className="learning flex justify-center align-center">
            <button className="sk-btn">DSA</button>
            <button className="sk-btn">NodeJs</button>
            <button className="sk-btn">MongoDB</button>
          </div>
          <div className="learning flex justify-center align-center my-0">
            <button className="sk-btn">Angular</button>
            <button className="sk-btn">Express</button>
            <button className="sk-btn">React</button>
          </div>
        </div>
      </div>
      <br />
      <div className="range range1 flex-col flex justify-center align-center">
        <h2 className="overall ff-ro text-left ff-ro fw-400">Overall:</h2>
        <div className="range2 flex justify-between align-center cursor-pointer">
          <span>Frontend Web development</span>
          <span>80%</span>
        </div>
        <div className="line" />
        <div className="range flex justify-between align-center m-top-1 cursor-pointer">
          <span>Backend Web development</span>
          <span>50%</span>
        </div>
        <div className="line2" />
        <div className="range flex justify-between align-center m-top-1 cursor-pointer">
          <span>Programming</span>
          <span>60%</span>
        </div>
        <div className="line3" />
      </div>
      <div className="frameworks flex flex-col justify-center align-center">
        <h2 className="text-center ff-ro fw-400">Frameworks and tools:</h2>
        <div className="fmw-btn flex flex-col justify-center align-center">
          <button className="sk-btn">Bootstrap</button>
          <button className="sk-btn my-1">Whimsical</button>
          <button className="sk-btn m-bottom-1">Figma</button>
        </div>
      </div>
    </section>
  );
};

export default Section3;
