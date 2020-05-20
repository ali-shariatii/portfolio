<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/about.css">
    <link rel="stylesheet" href="css/work.css">
    <link rel="stylesheet" href="css/testimonials.css">
    <link rel="stylesheet" href="css/contact.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"> -->
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>  -->
    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <title>Portfolio | Ali Shariati</title>
    <link rel="shortcut icon" type="image/png" href="img/favicon/favicon-256×256.ico">
</head>

<body>
<!--NAVIGATION-->
<div id="nav-flex">
    <div id="nav-items">
        <ul>
            <li id="home-tab" class="active-tab"><div><a href="#home-grid">HOME</a></div></li>
            <li id="about-tab"><div><a href="#about-grid">ABOUT</a></div></li> 
            <li id="work-tab"><div><a href="#work-grid">WORK</a></div></li> 
            <li id="testimonials-tab"><div><a href="#testimonials-grid">TESTIMONIALS</a></div></li> 
            <li id="contact-tab"><div><a href="#contact-grid">CONTACT</a></div></li> 
        </ul>
    </div>
</div>

<!--SECTION 1: HOME / LANDING PAGE-->
<header id="home-grid">
    <div id="header-grid-shade">
        <div id="header-grid-item">
            <h1><a href="#about-grid" class="logo-pointer"><img src="img/logo.svg" alt="A" id="logo1"></a> LI SH <a href="#contact-grid" class="logo-pointer"><img src="img/logo.svg" alt="A" id="logo2"></a> RIATI</h1>
            <h3>WEB DEVELOPER | WEB DESIGNER</h3>
        </div>
    </div>
</header>

<!--SECTION 2: ABOUT-->
<section class="container-grid">
    <div id="about-grid">
        <div id="about-grid-item-1"><h4>ABOUT</h4></div>
        <div id="about-grid-item-2">
            <div id="highlights-grid-item-1">
                <!--<div id="highlight-img-container-1"></div>-->
                <div id="highlight-content-container-1"><p>Tight deadlines or fast load times, employers or website visitors, I save time either way.</p></div>
            </div>
            <div id="highlights-grid-item-2">
                <!--<div id="highlight-img-container-2"></div>-->
                <div id="highlight-content-container-2"><p>For website visitors or fellow coders & designers, my easy-to-use contents work both ways.</p></div>
            </div>
            <div id="highlights-grid-item-3">
                <!--<div id="highlight-img-container-3"></div>-->
                <div id="highlight-content-container-3"><p>Bespoke visual element selection & proper implementation, according to plans & preferences</p></div>
            </div>
        </div>
        <div id="about-grid-item-3">
            <p>I am a web designer & developer with an interest in front-end side. My main focus is on advancing my skills in HTML,CSS, JS & its libraries/frameworks, building interactive & responsive web flows as well as designing tools. My quote of the month is__<q>Work hard,<a href="https://github.com/ali-shariatii/" target="_blank"> code hardcore</a>.</q></p>
            <div id="about-grid-item-4">
                <div class="skills-items" id="skills-grid-item-1"><span>HTML<br>7</span></div>
                <div class="skills-items" id="skills-grid-item-2"><span>CSS<br>6</span></div>
                <div class="skills-items" id="skills-grid-item-3"><span>JS<br>6</span></div>
                <div class="skills-items" id="skills-grid-item-4"><span>JQuery<br>5</span></div>
                <div class="skills-items" id="skills-grid-item-5"><span>PHP<br>4</span></div>
                <div class="skills-items" id="skills-grid-item-6"><span>MySQL<br>5</span></div>
                <div class="skills-items" id="skills-grid-item-7"><span>Ai<br>7</span></div>
                <div class="skills-items" id="skills-grid-item-8"><span>UI/UX<br>6</span></div>
                <div class="skills-items" id="skills-grid-item-9"><span>Ps<br>6</span></div>
            </div>
        </div>
</section>

<!--SECTION 3: WORK-->
<section class="container-grid">
    <div id="work-grid">
        <div id="work-grid-item-1"><h4>WORK</h4></div>
        <div id="work-grid-item-2">
            <!--modal trigger-->
            <div class="work-img-container" id="modalOpener1">
                    <div class="info-alert">More Info</div>
                    <img src="img/i2canada-thumbnail-wide.jpg" alt="i2canada">
                    <span>HTML | CSS | WORDPRESS</span>
            </div>
            <!--modal content-->
            <div class="modal-full-window" id="modalFullWindow1">
                <div class="modal-content-window">
                    <div class="modal-header"><span id="modalCloser1">&times;</span><br></div>
                    <p><a href="http://www.i2canada.com/" target="_blank">i2Canada Immigration Services Inc.</a> is an immigration law firm startup. The project goal was UI/UX redesigning, interactive & responsive development and transferring the web application from Joomla to WordPress and rebranding with SHIFTDO studio collaboration. I have been recruited as a front-end development team member.</p>
                </div>
            </div>
        </div>
        <div id="work-grid-item-3">
            <!--modal trigger-->
            <div class="work-img-container" id="modalOpener2">
                    <div class="info-alert">More Info</div>
                    <img src="img/shiftdo-thumbnail-wide.jpg" alt="Shiftdo">
                    <span>HTML | CSS | WORDPRESS</span>
            </div>
            <!--modal content-->
            <div class="modal-full-window" id="modalFullWindow2">
                <div class="modal-content-window">
                    <div class="modal-header"><span id="modalCloser2">&times;</span><br></div>
                    <p><a href="https://www.shiftdo.com/" target="_blank">SHIFTDO</a> is a private design studio owned by Mehdi Ghareh Mohammadi, an international award winning logo designer. I collaborated in the website redesigning as the front-end developer.</p>
                </div>
            </div>
        </div>
        <div id="work-grid-bottom-padding"><!--add padding bottom to this for the entire work-grid!--></div>
    </div>
</section>

<!--SECTION 4: TESTIMONIALS-->
<section class="container-grid">
    <div id="testimonials-grid">
        <div id="testimonials-grid-shade">
            <div id="testimonials-grid-item-1"><h4>TESTIMONIALS</h4></div>
            <div id="testimonials-grid-item-2">
                <div id="recom-item-1"><p><q>Ali is a team player & an exceptional problem solver.</q></p></div>
                <div id="recom-item-2"><p><q>He is keen to learn new skills & challenge himself every day.</q></p></div>
                <div id="recom-item-3"><p><q>Every team which Ali is a part of, is among the winners.</q></p></div>
                <div id="recom-item-4"><p><a href="https://www.linkedin.com/in/ali-shariatii/" target="_blank"><span>More on </span></a><a href="https://www.linkedin.com/in/ali-shariatii/"target="_blank" class="fa fa-linkedin" id="in"></a></p></div>
            </div>
        </div>
    </div>
</section>
   
<!--SECTION 5: CONTACT-->
<section class="container-grid">
    <div id="contact-grid">
        <div id="contact-grid-item-1"><h4>CONT<a href="#home-grid" class="logo-pointer"><img src="img/logo.svg" alt="A" id="logo3"></a>CT</h4></div>
        <div id="contact-grid-item-2">
            <form id="form-grid" action="php/contactform.php" method="POST">
                <div id="form-grid-item-1"><input type="text" placeholder="Name*" name="name" required></div>
                <div id="form-grid-item-2"><input type="email" placeholder="Email*" name="email" required></div>
                <div id="form-grid-item-3"><input type="number" placeholder="Phone*" name="phone" required></div>
                <div id="form-grid-item-4"><input type="text" placeholder="Subject*" name="subject" required></div>
                <div id="form-grid-item-5"><textarea placeholder="Your message*" name="message" required></textarea></div>
                <div id="form-grid-item-6"><button type="submit" name="submit">SUBMIT</button></div>
            </form>
        </div>
    </div>
</section>

<!--SECTION 6: FOOTER-->
<footer>
    <div id="footer-grid-item-1" target="_blank"><p>
        <a href="mailto:info@alishariatii.com">EMAIL</a><span> |</span>
        <a href="https://github.com/ali-shariatii/" target="_blank"> GITHUB</a><span> |</span>
        <a href="https://www.linkedin.com/in/ali-shariatii/" target="_blank"> LINKEDIN</a><span> |</span>
        <a href="https://stackoverflow.com/users/13517523/ali-shariati" target="_blank"> STACK</a>
    </p></div>
    <div id="footer-grid-item-2">© 2020 ALI SHARIATI. MADE IN CANADA</div>
</footer>

<!--JS LINKS-->
<script src="js/jquery.js"></script>
<script src="js/main.js"></script>
</body>
</html>