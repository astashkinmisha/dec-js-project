// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        console.log(users);
        let usersDiv = document.createElement('div');
        for (const user of users) {
            let userDiv = document.createElement('div');
            let {name, id, email, username} = user;
            userDiv.innerHTML =
                `<p>${id} ${username}</p>
                        <p>${name} - ${email}</p>`
            let postButton = document.createElement('button');
            document.body.append(userDiv);
            postButton.innerText = 'show posts'
            document.body.append(postButton);
            postButton.onclick = (id) => {
                fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts/')
                    .then(value => value.json())
                    .then(posts => {
                        console.log(posts);
                        let postsDiv = document.createElement('div');
                        for (const postsOfUser of posts) {
                            let postData = document.createElement('div');
                            let {id, body,title, userId} = postsOfUser;
                            if (user.id === postsOfUser.userId) {
                                let postOfUserDiv = document.createElement('div');
                                postOfUserDiv.innerHTML =
                                    `<h1>${userId} - ${id}</h1>
                                            <p>${title}- ${body}</p>`
                                let commentsButton = document.createElement('button');
                                commentsButton.innerText = 'show comments';
                                userDiv.appendChild(postOfUserDiv)
                                userDiv.appendChild(postData)
                                userDiv.appendChild(commentsButton)
                                commentsButton.onclick = (id) => {
                                    fetch('https://jsonplaceholder.typicode.com/posts/' + postsOfUser.id + '/comments')
                                        .then(value => value.json())
                                        .then(comments => {
                                            let commentsDiv = document.createElement('div');
                                            for (const commentsBlock of comments) {

                                                let {id, postId, email, body} = commentsBlock;
                                                if(postsOfUser.id === commentsBlock.postId) {
                                                    let commentDiv = document.createElement('div');
                                                    commentDiv.innerHTML =
                                                        `${id} ${body}`
                                                    postData.appendChild(commentDiv)
                                                }
                                            }
                                            document.body.append(commentsDiv);
                                        })
                                }
                            }
                        }
                        document.body.append(postsDiv);
                    })
            }
        }
    document.body.append(usersDiv);

})
