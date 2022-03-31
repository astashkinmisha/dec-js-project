// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(posts => {
//
//     const postsDiv = document.createElement('div');
//
//     postsDiv.innerHTML='<h1 class="posts-header">Posts</h1>'
//     postsDiv.classList.add('posts-box')
//
//     for (const post of posts) {
//         const {id, title, body} = post;
//         const postDiv = document.createElement('div');
//         const button = document.createElement('button');
//         button.onclick = (id) => {
//             fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
//                 .then(data => data.json())
//                 .then(comments => {
//                     for (const comment of comments) {
//
//                         if (post.id === comment.postId) {
//                             let divCardComments = document.createElement('div');
//                             divCardComments.innerHTML = `
//                                         <h3>ID: ${comment.id}</h3>
//                                         <h4>Name: ${comment.name}</h4>
//                                         <h5>Email: ${comment.email}</h5>
//                                         <h6>Body: ${comment.body}</h6>
//                                         `;
//                             postDiv.appendChild(divCardComments)
//                         }
//                         button.disabled = true;
//                     }
//                 })
//         }
//         postDiv.appendChild(button);
//         postsDiv.appendChild(postDiv)
//         postDiv.classList.add('post-box')
//         postDiv.innerHTML = `
//         <h1>${id}. ${title}</h1>
//         <p>${body}</p>
//         `;
//         postsDiv.append(postDiv);
//     }
//     document.body.append(postsDiv);
// });

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json();
    })
    .then(posts => {
        let mainDiv = document.createElement('div');

        for (const postData of posts) {

            const {id, body, title } = postData;
            let postDiv = document.createElement('div');
            postDiv.innerHTML =
                `<h1>${id} - id</h1>
                <p>${body} - text
                ${title}</p>`
                    let button = document.createElement('button');
            button.innerText = 'button'
            button.onclick = (id) => {
                    fetch('https://jsonplaceholder.typicode.com/posts/' + postData.id + '/comments')
                        .then(value => value.json())
                        .then(comments => {
                            let commentsDiv = document.createElement('div');
                            for (const commentsBlock of comments) {

                                    let {id, postId, email, body} = commentsBlock;
                                if (postData.id === commentsBlock.postId) {
                                    let commentDiv = document.createElement('div');
                                    commentDiv.innerHTML =
                                        `${id} ${body}`
                                    postDiv.appendChild(commentDiv);
                                }
                                postDiv.appendChild(commentsDiv)
                            }
                        })

            }
            document.body.append(postDiv)
            document.body.append(button)

        }
        document.body.append(mainDiv)

    })