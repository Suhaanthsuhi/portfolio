function showNav() {
    let navBar = document.getElementById("navBar1");
    navBar.classList.toggle("menuClose");
    }
    function jumpToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function accDropDown() {
        let accBtn = document.getElementById("accBtn");
        let accBody = document.getElementById("accBody");
        let faSolid = document.getElementById("faSolid");
        accBody.classList.toggle("showacc");
        faSolid.classList.toggle("fibtn");
    }

    function accDropDown1() {
        let accBtn = document.getElementById("accBtn1");
        let accBody = document.getElementById("accBody1");
        let facSolid = document.getElementById("facSolid");
        accBody.classList.toggle("showacc");
        facSolid.classList.toggle("fibtn");
    }

    function accDropDown2() {
        let accBtn = document.getElementById("accBtn2");
        let accBody = document.getElementById("accBody2");
        let fatSolid = document.getElementById("fatSolid");
        accBody.classList.toggle("showacc");
        fatSolid.classList.toggle("fibtn");
    }

    function accDropDown3() {
        let accBtn = document.getElementById("accBtn3");
        let accBody = document.getElementById("accBody3");
        let famSolid = document.getElementById("famSolid");
        accBody.classList.toggle("showacc");
        famSolid.classList.toggle("fibtn");
    }

    function accDropDown4() {
        let accBtn = document.getElementById("accBtn4");
        let accBody = document.getElementById("accBody4");
        let fanSolid = document.getElementById("fanSolid");
        accBody.classList.toggle("showacc");
        fanSolid.classList.toggle("fibtn");
    }

    function checkform() {
        let pnum = document.getElementById("pnumber").value;
        if( (pnum=="") || isNaN(pnum)) {
            window.alert("Please enter valid phone number");
            return false;
        }
    }
    window.addEventListener('scroll', checkEnorDisScrollBtn());
    function checkEnorDisScrollBtn(){
        let jumpToTop = document.getElementById("jumpToTop");
        let scrollPosition = window.scrollY;
        if(scrollPosition < 400){
            jumpToTop.style.display = "none";
        }
    }