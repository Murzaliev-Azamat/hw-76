import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import SubmissionForm, {PostMutation} from "./components/SubmissionForm/SubmissionForm";
import Post from "./components/Post/Post";

const baseUrl = 'http://localhost:8000/messages';

interface Message {
    id: string,
    author: string,
    message: string,
    date: string
}

function App() {
    const [posts, setPosts] = useState<Message[]>([]);
    let url = baseUrl;

    const getAllPosts = useCallback( async () => {
        const response = await fetch(url);
        const allPosts = await response.json();
        setPosts(prevPosts => [...prevPosts, ...allPosts])
    }, [])

    useEffect(() => {
        void getAllPosts().catch(console.error);
    }, [getAllPosts])

    useEffect(() => {
        setTimeout(async () => {
            if (posts.length > 0) {
                const dateLastPost = posts.slice(-1)[0].date;
                url = baseUrl + '?datetime=' + dateLastPost;
                const response = await fetch(url);
                const newPosts = await response.json();
                setPosts(prevPosts => [...prevPosts, ...newPosts]);
            }
        }, 3000);
    }, [posts]);

    const sendPost = async (e: React.FormEvent, post: PostMutation) => {
        e.preventDefault();
        const author = post.author;
        const message = post.message;

        const body = {
            author: author,
            message: message,
        }

        await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(body),
        });
    };

    return (
        <div className="App">
            <SubmissionForm onSubmit={sendPost}/>
            {posts.map((post) => (
                <Post key={post.id} author={post.author} message={post.message} date={post.date}/>
            ))}
        </div>
    );
}

export default App;
