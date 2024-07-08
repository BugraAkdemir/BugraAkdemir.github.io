document.addEventListener("DOMContentLoaded", function() {
    // Create and append the HTML elements
    var html = document.documentElement;
    var head = document.createElement('head');
    html.appendChild(head);

    var title = document.createElement('title');
    title.textContent = 'Bugra Akdemir';
    head.appendChild(title);

    var metaCharset = document.createElement('meta');
    metaCharset.setAttribute('charset', 'UTF-8');
    head.appendChild(metaCharset);

    var metaViewport = document.createElement('meta');
    metaViewport.setAttribute('name', 'viewport');
    metaViewport.setAttribute('content', 'width=device-width, initial-scale=1');
    head.appendChild(metaViewport);

    var link1 = document.createElement('link');
    link1.setAttribute('rel', 'stylesheet');
    link1.setAttribute('href', 'https://www.w3schools.com/w3css/4/w3.css');
    head.appendChild(link1);

    var link2 = document.createElement('link');
    link2.setAttribute('rel', 'stylesheet');
    link2.setAttribute('href', 'https://fonts.googleapis.com/css?family=Raleway');
    head.appendChild(link2);

    var link3 = document.createElement('link');
    link3.setAttribute('rel', 'stylesheet');
    link3.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
    head.appendChild(link3);

    var link4 = document.createElement('link');
    link4.setAttribute('rel', 'stylesheet');
    link4.setAttribute('href', 'css/index.css');
    head.appendChild(link4);

    var link5 = document.createElement('link');
    link5.setAttribute('rel', 'icon');
    link5.setAttribute('href', 'image/logo/mainLogo.png');
    head.appendChild(link5);

    var style = document.createElement('style');
    style.textContent = `
        body {
            font-family: "Raleway", sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
        }

        .w3-content {
            padding: 20px;
        }

        .header-content {
            max-width: 800px;
            margin: auto;
            text-align: center;
            padding: 64px 16px;
        }

        .main-content {
            max-width: 800px;
            margin-left: auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 15px;
            box-shadow: 0 5px 8px rgba(0, 0, 0, 0.1);
        }

        .main-content img {
            width: 100%;
            display: block;
            margin: auto;
            border-radius: 80px;
        }

        .footer-content {
            text-align: center;
            padding: 32px;
        }

        .footer-content a {
            margin-right: 20px;
        }

        .w3-half, h1 {
            text-align: center;
        }

        @media screen and (max-width: 768px) {
            .header-content {
                padding: 48px 16px;
            }

            .main-content {
                padding: 10px;
            }
        }

        @media screen and (max-width: 600px) {
            .header-content {
                padding: 32px 8px;
            }

            .main-content {
                border-radius: 80px;
                box-shadow: none;
                padding: 10px;
            }

            .main-content img {
                border-radius: 80px;
            }
        }

        .language-container select {
            display: flex;
            border-radius: 15px;
            padding-top: 10px;
            padding-bottom: 10px;
            padding-left: 10px;
            padding-right: 10px;
        }

        .language-container {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-bottom: 10px;
        }
    `;
    head.appendChild(style);

    var body = document.createElement('body');
    html.appendChild(body);

    var languageContainer = document.createElement('div');
    languageContainer.className = 'language-container';
    var select = document.createElement('select');
    select.setAttribute('onchange', 'window.location.href = this.value;');
    var option1 = document.createElement('option');
    option1.setAttribute('value', '');
    option1.textContent = '🌐 Choose another language';
    select.appendChild(option1);
    var option2 = document.createElement('option');
    option2.setAttribute('value', '/turkish/index-tr.html');
    option2.textContent = '🇹🇷 Turkish';
    select.appendChild(option2);
    var option3 = document.createElement('option');
    option3.setAttribute('value', '/');
    option3.textContent = '🇬🇧 English';
    select.appendChild(option3);
    languageContainer.appendChild(select);
    body.appendChild(languageContainer);

    var w3Content = document.createElement('div');
    w3Content.className = 'w3-content';
    body.appendChild(w3Content);

    var header = document.createElement('header');
    header.className = 'header-content w3-panel w3-center w3-opacity';
    w3Content.appendChild(header);

    var h1_1 = document.createElement('h1');
    h1_1.className = 'w3-xlarge';
    h1_1.textContent = 'SoftWare';
    header.appendChild(h1_1);

    var h1_2 = document.createElement('h1');
    h1_2.textContent = 'Buğra Akdemir';
    header.appendChild(h1_2);

    var p1 = document.createElement('p');
    p1.textContent = 'Hello, Welcome, This is My Blog Page Here You Can Find My Projects, Project DEVELOPMENT Processes and Before the Projects Are Uploaded to GitHub';
    header.appendChild(p1);

    var w3Padding32 = document.createElement('div');
    w3Padding32.className = 'w3-padding-32';
    header.appendChild(w3Padding32);

    var w3Bar = document.createElement('div');
    w3Bar.className = 'w3-bar w3-border';
    w3Padding32.appendChild(w3Bar);

    var homeLink = document.createElement('a');
    homeLink.href = '/';
    homeLink.className = 'w3-bar-item w3-button';
    homeLink.textContent = 'Home';
    w3Bar.appendChild(homeLink);

    var contactLink = document.createElement('a');
    contactLink.href = '/contatct';
    contactLink.className = 'w3-bar-item w3-button';
    contactLink.textContent = 'Contact';
    w3Bar.appendChild(contactLink);

    var projectsLink = document.createElement('a');
    projectsLink.href = '/projects';
    projectsLink.className = 'w3-bar-item w3-button';
    projectsLink.textContent = 'Projects';
    w3Bar.appendChild(projectsLink);

    var aboutMeLink = document.createElement('a');
    aboutMeLink.href = '/about-us';
    aboutMeLink.className = 'w3-bar-item w3-button';
    aboutMeLink.textContent = 'About Me';
    w3Bar.appendChild(aboutMeLink);

    var mainContent = document.createElement('div');
    mainContent.className = 'main-content';
    w3Content.appendChild(mainContent);

    var w3RowPadding = document.createElement('div');
    w3RowPadding.className = 'w3-row-padding w3-grayscale';
    mainContent.appendChild(w3RowPadding);

    var w3Half = document.createElement('div');
    w3Half.className = 'w3-half';
    w3RowPadding.appendChild(w3Half);

    var h2 = document.createElement('h2');
    h2.textContent = 'Who Are We';
    w3Half.appendChild(h2);

    var h1_3 = document.createElement('h1');
    h1_3.textContent = 'AKDBT';
    w3Half.appendChild(h1_3);

    var p2 = document.createElement('p');
    p2.textContent = 'Akdemir SoftWare';
    w3Half.appendChild(p2);

    var img1 = document.createElement('img');
    img1.src = 'image/backraund/i1.jpg';
    img1.alt = 'Image 1';
    w3Half.appendChild(img1);

    var h4_1 = document.createElement('h4');
    h4_1.textContent = 'Hello, I am Bugra and I have been a Business Partner in the Software Industry for 2 years.';
    w3Half.appendChild(h4_1);

    var img2 = document.createElement('img');
    img2.src = 'image/backraund/i2.jpg';
    img2.alt = 'Image 2';
    w3Half.appendChild(img2);

    var h4_2 = document.createElement('h4');
    h4_2.textContent = 'I live in Turkey and I am a high school student. I started my software life in my secondary school years and today I am a computer engineering student.';
    w3Half.appendChild(h4_2);

    var img3 = document.createElement('img');
    img3.src = 'image/backraund/i3.jpg';
    img3.alt = 'Image 3';
    w3Half.appendChild(img3);

    var footer = document.createElement('footer');
    footer.className = 'footer-content w3-container w3-padding-64 w3-light-grey w3-center w3-large';
    w3Content.appendChild(footer);

    var instagramLink = document.createElement('a');
    instagramLink.href = 'https://www.instagram.com/s1r.bugra';
    instagramLink.target = '_blank';
    var instagramIcon = document.createElement('i');
    instagramIcon.className = 'fa fa-instagram w3-hover-opacity';
    instagramLink.appendChild(instagramIcon);
    footer.appendChild(instagramLink);

    var githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/BugraAkdemir';
    githubLink.target = '_blank';
    var githubIcon = document.createElement('i');
    githubIcon.className = 'fa fa-github w3-hover-opacity';
    githubLink.appendChild(githubIcon);
    footer.appendChild(githubLink);

    var script = document.createElement('script');
    script.src = 'index.js';
    body.appendChild(script);
});
