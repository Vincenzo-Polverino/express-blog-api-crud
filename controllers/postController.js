const posts = require('../database/db.js')

const index = (req, res) => {
    let markup = `
        <ul>
            ${posts.map(post => `
                <li>
                    <h2>${post.title}</h2>
                    <p>${post.content}</p>
                    <img src="${post.image}" alt="${post.title}" style="width:200px;height:auto;">
                </li>
            `).join('')}
        </ul>
    `;
    res.send(markup);
};



const show = (req, res) => {

    const post = posts.find((post) => post.slug.toLowerCase() === req.params.slug)
    if (!post) {
        return res.status(404).json({ error: "Nessun post trovato" })
    }
    return res.status(200).json({ data: post })
}




module.exports = {
    index,
    show
}