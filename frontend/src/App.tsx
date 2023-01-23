import React, {useEffect, useState} from 'react';
import './App.css';
import SubmissionForm, {PostMutation} from "./components/SubmissionForm/SubmissionForm";
import Post from "./components/Post/Post";

const baseUrl = 'http://146.185.154.90:8000/messages';

interface Message {
    _id: string,
    author: string,
    message: string,
    datetime: string
}

let myPosts: Message[] = [];
function App() {

    const [posts, setPosts] = useState<Message[]>([]);
    myPosts = posts;
    useEffect(() => {

        setInterval(async () => {
            let url = baseUrl;
            console.log('posts', myPosts);
            if (myPosts.length > 0) {
                const dateLastPost = myPosts.slice(-1)[0].datetime;
                url = baseUrl + '?datetime=' + dateLastPost;
            }

            const response = await fetch(url);
            const newPosts = await response.json();
            console.log('newPosts', newPosts);

            setPosts(prevPosts => [...prevPosts, ...newPosts]);
        }, 3000);

        // return () => clearInterval(interval);
    }, []);

    const sendPost = async (e: React.FormEvent, post: PostMutation) => {
        e.preventDefault();
        const author = post.author;
        const message = post.message;
        const body = new URLSearchParams();
        body.append('author', author);
        body.append('message', message);

        await fetch(baseUrl, {
            method: 'POST',
            body
        });
    };

    return (
        <div className="App">
            <SubmissionForm onSubmit={sendPost}/>
            {posts.map((post) => (
                <Post key={post._id} author={post.author} message={post.message} date={post.datetime}/>
            ))}
        </div>
    );
}

export default App;
