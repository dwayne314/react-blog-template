import React, { Fragment } from 'react';
import { useParams } from "react-router-dom";
import blogPosts from '../data/blogPosts';


const BlogPost = () => {
    const { id } = useParams();
    const { header, headerImgSrc, postContent } = blogPosts.find(blogPost => Number(blogPost.id) === Number(id));
    const paragraphs = postContent
        .reduce((paragraph, currentparagraph, index) => {
            return [...paragraph, <p key={index}>{ currentparagraph }</p>]
        }, []);

    return (
        <Fragment>
            <div id="wrapper">
                <div id="main">
                    <div className="inner">
                        <h1>{ header } </h1>
                        <span className="image main">
                            <img src={`/images/${headerImgSrc}`} alt="" />
                        </span>
                        { paragraphs }
                    </div>
                </div>
                
            </div>
        </Fragment>
    );
};


export default BlogPost;
