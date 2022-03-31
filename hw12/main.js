// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

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
//
//         postDiv.classList.add('post-box')
//         postDiv.innerHTML = `
//         <h1>${id}. ${title}</h1>
//         <p>${body}</p>
//         `;
//         postsDiv.append(postDiv);
//     }
//     document.body.append(postsDiv);
// });

//
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
.then(value => value.json())
.then(comments => {
    let commentsDiv = document.createElement('div');
    for (const commentsData of comments) {
        const {postId, id, name, email, body} = commentsData
            let commentDiv = document.createElement('div');
        commentDiv.innerHTML =
            `<h1>postId - ${postId}</h1>
             <h2>id ${id}</h2>
               <p> ${email} - ${name}
                 ${body}</p>`
        document.body.append(commentDiv)
    }
    document.body.append(commentsDiv)
})
