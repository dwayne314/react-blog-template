import React, { Fragment } from 'react';
import BlogLink from './BlogLink';
import blogPosts from '../data/blogPosts';


const Body = () => {

    const allPosts = blogPosts.map(blogPost => {
        const { id, coverImgSrc, header, bodyText, styleId, headerImgSrc } = blogPost;
        return (
            <Fragment key={id}>
                <BlogLink id={id} coverImgSrc={coverImgSrc} headerImgSrc={headerImgSrc} header={header} bodyText={bodyText} styleId={styleId} />
            </Fragment>
        );
    });

    return (
        <div id="main">
            <div className="inner">
                <header>
                    <h1>This is Phantom, a free, fully responsive site<br />
                    template designed by <a href="http://html5up.net">HTML5 UP</a>.</h1>
                    <p>Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem ipsum dolor sit amet nullam dolore.</p>
                </header>
                <section className="tiles">
                    { allPosts }
                </section>
            </div>
        </div>
    );
};


export default Body;
