import { React, useState, useEffect } from 'react'
import Post from './Post.jsx'
import AddPost from './addPost.jsx'

export default function Test() {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=4");
        const data = await response.json();
        setPosts(data);
    }

    useEffect(() => {
        fetchPosts()
    }, []);

    const addPostF = async (title, body) => {
        try {
            let userId = Math.random().toString(36).slice(2);
            while (await isUserIdExists(userId)) {
                userId = Math.random().toString(36).slice(2);
            }

            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    body: body,
                    userId: userId,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            const data = await response.json()

            setPosts((prevPosts) => [data, ...prevPosts])
        } catch (error) {
            console.log(error);
        }
    };

    const isUserIdExists = async (userId) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const data = await response.json();
        return data.length > 0;
    };

    const deletePost = async (id) => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                    method: 'DELETE'
                });
    
                if (response.status === 200) {
                    setPosts(
                        posts.filter((post) => {
                            return post.id !== id;
                        })
                    );
                }
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <main>
            <h1>Consuming REST api tutorial</h1>
            <AddPost addPostP={addPostF} />
            <section className="posts-container">
                <h2>Posts</h2>
                {posts.map((post) =>
                    <Post
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        body={post.body}
                        deletePost={deletePost}
                    />
                )}
            </section>
        </main>
    )
}