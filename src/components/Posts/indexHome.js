import React, { useEffect } from 'react'
import Post from './Post'
import AOS from 'aos';
import 'aos/dist/aos.css';

const PostsHome = ({ posts, title }) => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <section className="posts" data-aos="fade-left">
            <h3 className="posts-title">{title}</h3>
            <div className="posts-center-home">
                <article>
                    {posts.map(post => {
                        return <Post key={post.id} {...post} />
                    })}
                </article>
            </div>
        </section>
    )
}

export default PostsHome
