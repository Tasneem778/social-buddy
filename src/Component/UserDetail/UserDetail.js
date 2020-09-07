
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    const { postId } = useParams();


    const [post, setpost] = useState({});
    const [comment, setComment] = useState({});


    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        const url1 = `https://jsonplaceholder.typicode.com/comments/${postId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setpost(data))
        fetch(url1)
            .then(res => res.json())
            .then(data => setComment(data))


    }, [postId])

    const userStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={userStyle}>


            {/* <p>This is User Post Detail: {userId}</p> */}
            {/* <h3>UserId:{user.id}</h3> */}
            <h2>ID:{post.id}</h2>
            <h3>Title: {post.title}</h3>
            <p><strong>Body:</strong><br></br> {post.body}</p>
            <br></br>
            <br></br>
            <h3>Comments:</h3>
            <p><strong>Id:</strong> {comment.id}</p>
            <p><strong>Post id:</strong> {comment.postId}</p>
            <p><strong>Name:</strong> {comment.name}</p>
            <p><strong>Email:</strong> {comment.email}</p>
            <p><strong>Body: <br></br></strong>{comment.body}</p>



        </div>
    );
};

export default UserDetail;