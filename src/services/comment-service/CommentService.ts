import axios from 'axios';
import { useState } from 'react';




export const getComment = () => {
    const [comment, setComment] = useState([]);
    axios.get('http://localhost:5000/user', {
     })
    .then(function (response) {
        console.log(response.data);
        setComment(response.data);
        console.log(comment);
    })
    .catch(function (error) {
        console.log(error);
    })
}

export interface comment {
    comment_id: string;
    comment_desc: string;
  }

