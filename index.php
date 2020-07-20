<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-171562548-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-171562548-1');
    </script>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preload" href="fonts/FuturaPTBook.otf" as="font" type="font/otf" crossorigin>
    <meta name="description" content="I am a web developer & designer with an interest and passion in building web applications and websites. My main focus is mostly on front-end side.">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/navigation.css">
    <link rel="stylesheet" href="css/about.css">
    <link rel="stylesheet" href="css/work.css">
    <link rel="stylesheet" href="css/testimonials.css">
    <link rel="stylesheet" href="css/contact.css">
    <link rel="stylesheet" href="css/small-devices.css">
    <link rel="stylesheet" href="css/global-animation.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <title>Ali Shariati | Web Developer & Designer</title>
    <link rel="shortcut icon" type="image/png" href="img/favicon-256×256.ico">
</head>

<body class="noscroll-x">
    <!-- ¯\_(ツ)_/¯  -->

    <div id="content-wrapper">
        <!--NAVIGATION-->
        <div id="nav-grid" class="hidden-fixed-nav shadow-filter-effect">
            <div id="nav-item-1">
                <audio id="bgMusic" src="snd/bg-music.mp3" loop></audio>
                <div id="ctrl-container">
                    <div id="musicBtn" onclick="toggleMusic();"></div>
                </div>
            </div>
            <div id="nav-item-2">
                <ul>
                    <li>
                        <div><a href="#home-grid" id="home-tab" class="active-tab">HOME</a></div>
                    </li>
                    <li>
                        <div><a href="#about-grid" id="about-tab">ABOUT</a></div>
                    </li>
                    <li>
                        <div><a href="#work-grid" id="work-tab">WORK</a></div>
                    </li>
                    <li>
                        <div><a href="#testimonials-grid" id="testimonials-tab">TESTIMONIALS</a></div>
                    </li>
                    <li>
                        <div><a href="#contact-grid" id="contact-tab">CONTACT</a></div>
                    </li>
                </ul>
            </div>
            <div id="nav-item-3">
                <div id="nav-github">
                    <a href="https://github.com/ali-shariatii/" target="_blank" class="fa fa-github" id="nav-github"></a>
                </div>
                <!-- hamburger icon-->
                <div id="hamburger-menu-container">
                    <div id="hamburgerLine1"></div>
                    <div id="hamburgerLine2"></div>
                </div>
            </div>
            <!-- dropdown menu-->
            <div id="nav-item-4" class="hidden-dropdown">
                <div id=menu-min>
                    <ul>
                        <li><div><a href="#home-grid" id="home-tab-min">HOME</a></div></li><br>
                        <li><div><a href="#about-grid" id="about-tab-min">ABOUT</a></div></li><br>
                        <li><div><a href="#work-grid" id="work-tab-min">WORK</a></div></li><br>
                        <li><div><a href="#testimonials-grid" id="testimonials-tab-min">TESTIMONIALS</a></div></li><br>
                        <li><div><a href="#contact-grid" id="contact-tab-min">CONTACT</a></div></li>
                    </ul>
                </div>
                <div id="social-media-min">
                    <ul>
                        <li>
                            <a href="mailto:info@alishariatii.com" class="fa fa-envelope"></a>
                            <li>
                                <a href="https://github.com/ali-shariatii/" target="_blank" class="fa fa-github"></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/ali-shariatii/" target="_blank" class="fa fa-linkedin"></a>
                            </li>
                            <li>
                                <a href="https://stackoverflow.com/users/13517523/ali-shariati" target="_blank" class="fa fa-stack-overflow"></a>
                            </li>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!--SOCIAL MEDIA WINDOW-->
        <div id="media-container">
            <div id="media-window">
                <ul>
                    <li>
                        <a href="mailto:info@alishariatii.com" class="fa fa-envelope"></a>
                    </li>
                    <li>
                        <a href="https://github.com/ali-shariatii/" target="_blank" class="fa fa-github"></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/ali-shariatii/" target="_blank" class="fa fa-linkedin"></a>
                    </li>
                    <li>
                        <a href="https://stackoverflow.com/users/13517523/ali-shariati" target="_blank" class="fa fa-stack-overflow"></a>
                    </li>
                </ul>
            </div>
            <div id="media-container-arrow"></div>
        </div>

        <!--SECTION 1: HOME / LANDING PAGE-->
        <header id="home-grid">
            <div id="header-grid-shade">
                <div id="header-grid-item">
                    <h1><a href="#about-grid" class="header-logo-position logoPointer"><img src="img/logo.svg" alt="A" id="logo1"></a><div class="name-letters">LI SH</div><a href="#contact-grid" class="header-logo-position logoPointer"><img src="img/logo.svg" alt="A" id="logo2"></a><div class="name-letters">RIATI</div></h1>
                    <h3>WEB DEVELOPER | WEB DESIGNER</h3>
                </div>
            </div>
            <img src="img/sky-city-1.png" alt="sky-city" class="sky-city-land" id="sky-city-1">
            <img src="img/sky-city-1-1200px.png" alt="sky-city" class="sky-city-land" id="sky-city-1-1200px">
            <img src="img/sky-city-1-992px.png" alt="sky-city" class="sky-city-land" id="sky-city-1-992px">
            <img src="img/sky-city-1-768px.png" alt="sky-city" class="sky-city-land" id="sky-city-1-768px">
            <img src="img/sky-city-1-600px.png" alt="sky-city" class="sky-city-land" id="sky-city-1-600px">
            <img src="img/sky-city-1-400px.png" alt="sky-city" class="sky-city-land" id="sky-city-1-400px">
        </header>

        <!--SECTION 2: ABOUT-->
        <section class="container-grid" id="about-container">
            <div id="about-grid">
                <div id="about-grid-item-1">
                    <h4>ABOUT</h4>
                </div>
                <div id="about-grid-item-2">
                    <div id="highlights-grid-item-1" class="init-scale-in">
                        <!--<div id="highlight-img-container-1"></div>-->
                        <div id="highlight-content-container-1">
                            <p>Tight deadlines or fast load times, employers or website visitors, I save time either way.</p>
                        </div>
                    </div>
                    <div id="highlights-grid-item-2" class="init-scale-in">
                        <!--<div id="highlight-img-container-2"></div>-->
                        <div id="highlight-content-container-2">
                            <p>For website visitors or fellow coders & designers, my easy-to-use contents work both ways.</p>
                        </div>
                    </div>
                    <div id="highlights-grid-item-3" class="init-scale-in">
                        <!--<div id="highlight-img-container-3"></div>-->
                        <div id="highlight-content-container-3">
                            <p>Bespoke visual element selection & proper implementation, according to plans & preferences</p>
                        </div>
                    </div>
                </div>
                <div id="about-grid-item-3">
                    <p class="init-appear-in">I am a web developer & designer with an interest and passion in building web applications and websites. My main focus is mostly on front-end side including advanced CSS + extension, JavaScript & JS libraries/frameworks and building
                        interactive & responsive web flows. My quote of the month is__<q>Work hard,<a href="https://github.com/ali-shariatii/" target="_blank" title="More Code on Github"> code hardcore</a>.</q></p>
                </div>
                <div id="about-grid-item-4" class="init-appear-in">
                    <div class="skills-items" id="skills-grid-item-1"><span>HTML<br>7</span></div>
                    <div class="skills-items" id="skills-grid-item-2"><span>CSS<br>7</span></div>
                    <div class="skills-items" id="skills-grid-item-3"><span>JS<br>6</span></div>
                    <div class="skills-items" id="skills-grid-item-4"><span>JQuery<br>5</span></div>
                    <div class="skills-items" id="skills-grid-item-5"><span>PHP<br>5</span></div>
                    <div class="skills-items" id="skills-grid-item-6"><span>MySQL<br>5</span></div>
                    <div class="skills-items" id="skills-grid-item-7"><span>Ai<br>7</span></div>
                    <div class="skills-items" id="skills-grid-item-8"><span>UI/UX<br>6</span></div>
                    <div class="skills-items" id="skills-grid-item-9"><span>Ps<br>6</span></div>
                </div>
        </section>

        <!--SECTION 3: WORK-->
        <section class="container-grid" id="work-container">
            <div id="work-grid">
                <div id="work-grid-item-1">
                    <h4>WORK</h4>
                </div>
                <!--gallery filter
        <div id="work-grid-item-2">
            <div><span>ALL</span></div>
            <div><span>HTML/CSS</span></div>
            <div><span>JavaScript</span></div>
            <div><span>JQuery</span></div>
        </div> -->
                <!--work gallery-->
                <div id="work-grid-item-3">
                    <div id="gallery-grid-item-1" class="init-scale-in">
                        <!--modal trigger-->
                        <div class="work-img-container" id="modalOpener1">
                            <div class="info-alert">More Info</div>
                            <img src="img/i2canada-thumbnail-wide.jpg" alt="i2canada">
                            <span>HTML | CSS | JAVASCRIPT</span>
                        </div>
                    </div>

                    <!--modal content1: it is kept outside the gallery div in order to prevent stacking context effect-->
                    <div class="modal-full-window" id="modalFullWindow1">
                        <div class="modal-content-window" id="modalContentWindow1">
                            <div class="modal-header"><span id="modalCloser1">&times;</span><br></div>
                            <p><a href="http://www.i2canada.com/" target="_blank">i2Canada Immigration Services Inc.</a> is an immigration law firm startup. The project goal was UI/UX redesigning, interactive & responsive development and transferring the
                                web application from Joomla to WordPress and rebranding with SHIFTDO studio collaboration. I have been recruited as a front-end development team member. </p>
                        </div>
                    </div>

                    <div id="gallery-grid-item-2" class="init-scale-in">
                        <!--modal trigger-->
                        <div class="work-img-container" id="modalOpener2">
                            <div class="info-alert">More Info</div>
                            <img src="img/shiftdo-thumbnail-wide.jpg" alt="Shiftdo">
                            <span>HTML | CSS | WORDPRESS</span>
                        </div>
                    </div>

                    <!--modal content2: it is kept outside the gallery div in order to prevent stacking context effect-->
                    <div class="modal-full-window" id="modalFullWindow2">
                        <div class="modal-content-window" id="modalContentWindow2">
                            <div class="modal-header"><span id="modalCloser2">&times;</span><br></div>
                            <p><a href="https://www.shiftdo.com/" target="_blank">SHIFTDO</a> is a private design studio owned by Mehdi Ghareh Mohammadi, an international award winning logo designer. I collaborated in the website redesigning as the front-end
                                developer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--SECTION 4: TESTIMONIALS-->
        <section class="container-grid" id="testimonials-container">
            <div id="testimonials-grid">
                <!--<div id="testimonials-grid-shade">-->
                <div id="testimonials-grid-item-1">
                    <h4>TESTIMONIALS</h4>
                </div>
                <div id="testimonials-grid-item-2">
                    <div id="recom-item-1" class="init-scale-in">
                        <p><q>Ali is a team player & an exceptional problem solver.</q></p>
                    </div>
                    <div id="recom-item-2" class="init-scale-in">
                        <p><q>He is keen to learn new skills & challenge himself every day.</q></p>
                    </div>
                    <div id="recom-item-3" class="init-scale-in">
                        <p><q>Every team which Ali is a part of, is among the winners.</q></p>
                    </div>
                    <div id="recom-item-4" class="init-appear-in">
                        <p><a href="https://www.linkedin.com/in/ali-shariatii/" target="_blank"><span>More on </span></a>
                            <a href="https://www.linkedin.com/in/ali-shariatii/" target="_blank" class="fa fa-linkedin" id="in"></a>
                        </p>
                    </div>
                </div>
                <!--</div>-->
            </div>
        </section>

        <!--SECTION 5: CONTACT-->
        <section class="container-grid" id="contact-container">
            <div id="contact-grid">
                <div id="contact-grid-item-1"><h4>CONT<a href="#home-grid" class="logoPointer"><img src="img/logo.svg" alt="A" id="logo3"></a>CT</h4></div>
                <div id="contact-grid-item-2" class="init-scale-in">
                    <form id="form-grid" action="contactform.php" method="POST">
                        <div id="form-grid-item-1"><input type="text" placeholder="Name*" name="name" required></div>
                        <div id="form-grid-item-2"><input type="email" placeholder="Email*" name="email" required></div>
                        <div id="form-grid-item-3"><input type="number" placeholder="Phone*" name="phone" required></div>
                        <div id="form-grid-item-4"><input type="text" placeholder="Subject*" name="subject" required></div>
                        <div id="form-grid-item-5"><textarea placeholder="Your message*" name="message" required></textarea></div>
                        <div id="form-grid-item-6"><button type="submit" name="submit">SUBMIT</button></div>
                    </form>
                </div>
            </div>
            <img src="img/sky-city-2.jpg" alt="sky-city" class="sky-city-2" id="sky-city-2">
            <img src="img/sky-city-2-1200px.jpg" alt="sky-city" class="sky-city-2" id="sky-city-2-1200px">
            <img src="img/sky-city-2-992px.jpg" alt="sky-city" class="sky-city-2" id="sky-city-2-992px">
            <img src="img/sky-city-2-768px.jpg" alt="sky-city" class="sky-city-2" id="sky-city-2-768px">
            <img src="img/sky-city-2-600px.jpg" alt="sky-city" class="sky-city-2" id="sky-city-2-600px">
            <img src="img/sky-city-2-400px.jpg" alt="sky-city" class="sky-city-2" id="sky-city-2-400px">
        </section>

        <!--SECTION 6: FOOTER-->
        <footer>
            <div id="footer-wrapper">
                <div id="footer-grid-item-1" target="_blank">
                    <p>
                        <a href="mailto:info@alishariatii.com">EMAIL</a><span> |</span>
                        <a href="https://github.com/ali-shariatii/" target="_blank"> GITHUB</a><span> |</span>
                        <a href="https://www.linkedin.com/in/ali-shariatii/" target="_blank"> LINKEDIN</a><span> |</span>
                        <a href="https://stackoverflow.com/users/13517523/ali-shariati" target="_blank"> STACK</a>
                    </p>
                </div>
                <div id="footer-grid-item-2">© 2020 ALI SHARIATI. MADE IN CANADA</div>
            </div>
        </footer>
        </div>

        <!--JS LINKS-->
        <script async src="js/jquery.js"></script>
        <script async src="js/main.js"></script>
</body>

</html>