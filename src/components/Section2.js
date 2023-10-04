const Section2 = () => {

  const accDropDown = () => {
    let accBtn = document.getElementById("accBtn");
        let accBody = document.getElementById("accBody");
        let faSolid = document.getElementById("faSolid");
        accBody.classList.toggle("showacc"); 
        faSolid.classList.toggle("fibtn");
  }
  const accDropDown1 = () => {
    let accBtn = document.getElementById("accBtn1");
        let accBody = document.getElementById("accBody1");
        let facSolid = document.getElementById("facSolid");
        accBody.classList.toggle("showacc");
        facSolid.classList.toggle("fibtn");
  }
  const accDropDown2 = () => {
    let accBtn = document.getElementById("accBtn2");
        let accBody = document.getElementById("accBody2");
        let fatSolid = document.getElementById("fatSolid");
        accBody.classList.toggle("showacc");
        fatSolid.classList.toggle("fibtn");
  }
  const accDropDown3 = () => {
    let accBtn = document.getElementById("accBtn3");
        let accBody = document.getElementById("accBody3");
        let famSolid = document.getElementById("famSolid");
        accBody.classList.toggle("showacc");
        famSolid.classList.toggle("fibtn");
  }
  const accDropDown4 = () => {
    let accBtn = document.getElementById("accBtn4");
        let accBody = document.getElementById("accBody4");
        let fanSolid = document.getElementById("fanSolid");
        accBody.classList.toggle("showacc");
        fanSolid.classList.toggle("fibtn");
  }

  const imgSrc = "/Profile_pic.jpg";
  return (
    <section className="section2" id="about">
      <div className="section-title text-center">
        <h2 className="s-2-title">About me</h2>
        <h4 className="s-2-subtitle">--Who i am--</h4>
      </div>
      <div className="about-content flex justify-around align-center m-bottom-2">
        <div className="dp text-center">
          <img src={require('.//Profile_pic.jpg') } alt="profilepic" />
        </div>
        <div className="about-me">
          <h3 className="text-center" id="typeEffect">
            I'm Suhaanth V V-Frontend web developer
          </h3>
          <p className="p-2">
            Hello There, this is my portfolio website I will be updating the
            information on this website regularly. Currently, I’m pursuing BE
            Degree in Computer science stream with Artificial intelligence and
            machine learning at MS Ramaiah Institute of Technology Bangalore, My
            hobbies are listening to music, and playing badminton and cricket. I
            like traveling. Sweets! I love them. Ok so get in touch with me on
            social media…Links below! <br /> I am keen on artificial
            intelligence, machine learning, and cloud computing. I believe
            Knowledge comes with experience, and I am trying my best in my way
            to acquire the maximum amount of knowledge in the fields I explore.
          </p>
        </div>
      </div>
      <div className="edu flex flex-col justify-around align-center">
        <div className="row border m-bottom-1">
          <button
            className="accbtn flex align-center justify-between"
            id="accBtn"
            onClick={ accDropDown }
          >
            <h1 className="ff-pp fw-300">BP Indian Public School</h1>
            <div className="ibtn p-2">
              <i className="fa-solid fa-angle-down fs-20px" id="faSolid" />
            </div>
          </button>
          <div className="accbody showacc" id="accBody">
            Studied from LKG to 4th std
            <br />
            Studied from 2009 to 2014 <br />
            ICSE Board <br />
            Malleshwaram 11th cross, Bangalore, 560003
          </div>
        </div>
        <div className="row border m-bottom-1">
          <button
            className="accbtn flex align-center justify-between"
            id="accBtn1"
            onClick={ accDropDown1 }
          >
            <h1 className="ff-pp fw-300">Orchids International School</h1>
            <div className="ibtn p-2">
              <i className="fa-solid fa-angle-down fs-20px" id="facSolid" />
            </div>
          </button>
          <div className="accbody showacc" id="accBody1">
            Studied 5th and 6th std in orchids <br />
            Studied from 2014 to 2016 <br />
            CBSE Board <br />
            Jalahalli, Bangalore, 560013
          </div>
        </div>
        <div className="row border m-bottom-1">
          <button
            className="accbtn flex align-center justify-between"
            id="accBtn2"
            onClick={ accDropDown2 }
          >
            <h1 className="ff-pp fw-300">Narayana E-Techno School</h1>
            <div className="ibtn p-2">
              <i className="fa-solid fa-angle-down fs-20px" id="fatSolid" />
            </div>
          </button>
          <div className="accbody showacc" id="accBody2">
            Studied from 7th to 10th std <br />
            Studied from 2016 to 2019 <br />
            CBSE Board <br />
            Vidyaranyapura, Bangalore, 560097
          </div>
        </div>
        <div className="row border m-bottom-1">
          <button
            className="accbtn flex align-center justify-between"
            id="accBtn3"
            onClick={ accDropDown3 }
          >
            <h1 className="ff-pp fw-300">Narayana PU College</h1>
            <div className="ibtn p-2">
              <i className="fa-solid fa-angle-down fs-20px" id="famSolid" />
            </div>
          </button>
          <div className="accbody showacc" id="accBody3">
            Completed my 11th and 12th std here <br />
            Studied from 2019 to 2021 <br />
            State Board <br />
            Vidhyaranyapura, Bangalore, 560097
          </div>
        </div>
        <div className="row border m-bottom-1">
          <button
            className="accbtn flex align-center justify-between"
            id="accBtn4"
            onClick={ accDropDown4 }
          >
            <h1 className="ff-pp fw-300">MS Ramaiah Institute of Technology</h1>
            <div className="ibtn p-2">
              <i className="fa-solid fa-angle-down fs-20px" id="fanSolid" />
            </div>
          </button>
          <div className="accbody showacc" id="accBody4">
            Autonomous engineering college <br />
            Affiliated to VTU <br />
            Stream choosen-Computer science and engineering (AI &amp; ML) <br />
            MSRIT Post, M S Ramaiah Nagar, MSR Nagar, Bengaluru, Karnataka
            560054
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
