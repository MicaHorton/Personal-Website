import axios from 'axios';
const base = 'https://api.micahorton.com/'; 
// const base = 'http://localhost:5000/'; 

export const getAllPosts = () => {
    return axios.get(base)
    .then(res => {
        return res.data
    })
    .catch(err => {
        return err
    })
}

export const getSinglePost = postId => {
    return axios.get(base + postId)
    .then(res => {
        return res.data
    })
    .catch(err => {
        return err
    })
}

export const sendEmail = email => {
    return axios.post(base + 'email', email)
    .then(res => {
        return res.data
    })
    .catch(err => {
        return err
    })
}