import React from 'react';

// const getTodos = async () => {
//     return fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(res => res.json())
// }

function About(props) {
    // const data = await getTodos()
    return (
        <div>
            about page
        </div>
    );
};

export default About;

export async function getServerSideProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json()
    return {
        props: { data }, // will be passed to the page component as props
    }
}