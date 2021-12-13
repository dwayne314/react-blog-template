import React from 'react';
import { Link } from 'react-router-dom';


const BlogLink = (props) => {

    const { id, coverImgSrc, header, bodyText, styleId } = props;

    return (
         <article key={id} className={`style${styleId}`}>
            <span className="image">
                <img src={`images/${coverImgSrc}`} alt="" />
            </span>
            <Link to={`/posts/${id}`}>
                <h2>{ header }</h2>
                <div className="content">
                    <p>{ bodyText }</p>
                </div>
            </Link>
        </article>
    );
};


export default BlogLink;
