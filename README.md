# React Blog Template

React Blog Template is a simple blog template transformation into react. The template files come with pre-packaged html, css, and JavaScript in order to simplify the design process of creating a blog. This app was bootstrapped with Create React App and uses the [Phantom blog template](https://html5up.net/phantom) from [HTML5 Up](https://html5up.net/).

# Installing the Application

Create an application folder, navigate inside, and clone to repository with `git clone`

# Starting the Application

### `npm start`

Starts the application in development mode.

### `npm build`

Creates a production build for the application in the build folder.

# Summary Of Template Refactors

As React will be used to build the front end, this template required several changes, noted below, in order to be fully React complaint.

* Convert all html pages to components
* Add JavaScript imports to the body of the index.html
* Update the index page links to include missing leading "\"
* Convert all JSX "class" attributes to "className" per the React documentation
* Convert all internal links to use the React Router

Additionally. there were several differences between the downloaded template and the [Phantom template model](https://html5up.net/phantom), particularly with the menu, and additional refactoring to the html and css was necessary. The refactors are noted below:

* Initially the #menu was a child of the #wrapper but should be a sibling.

    **Incorrect Menu Layout**

        <body>
            <nav id="menu">
                <div id="wrapper"></div>
            </nav>       
        </body>
    
    **Corrected Menu Layout**
    
        <body>
            <nav id="menu"></nav>
            <div id="wrapper"></div>
        </body>
    

* The #menu is missing a child link component that contains the Close button.

    **Incorrect Menu Layout**

        <nav id="menu">
            <div className="inner"></div>
        </nav>
    
    
    **Corrected Menu Layout**
    
        <nav id="menu">
            <div className="inner"></div>
            <a class="close" href="#menu">
                ::before
                Close
                ::after
            </a>
        </nav>


* Moved the Footer outside of the body wrapper so it's present on all pages which required some css refactors to select the .inner class.

    **Removed css selectors in main.css**

        #wrapper > * > .inner {
            width: 100%;
            max-width: 68em;
            margin: 0 auto;
            padding: 0 2.5em;
        }
            @media screen and (max-width: 736px) {
                #wrapper > * > .inner {
                    padding: 0 1.25em;
                }
            }
        

    **Added css selectors to App.css**

        .app-container .inner {
            width: 100%;
            max-width: 68em;
            margin: 0 auto;
            padding: 0 2.5em;
        }
        @media screen and (max-width: 736px) {
            .app-container > .inner {
                padding: 0 1.25em;
            }
        }
    

# Future Enhancements

* Add external social media links for the follow icons
* Have the Get In Touch Form send an email to the blog owner
* Add actual blog post cover and header images
* Store the blog posts in a headless CMS
* Open up modals for external links to keep users on the page
