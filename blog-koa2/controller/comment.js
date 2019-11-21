const { exec } = require('../db/mysql')

const getComment = async (article_id) => {
  const sql = `SELECT article_id,comment_conent,comment_author, comment_likes, comment_time, comment_id FROM comment where comment.article_id = '${article_id}' order by comment_time desc;`
  const selectAuthorsql = `SELECT users.autograph, username, avatar, company, job, nickname from users, comment where users.nickname = comment.comment_author;`
  const author = await exec(selectAuthorsql)
  const comments = await exec(sql)
  for (var i = 0; i<comments.length;i++) {
    const replys = await exec(`SELECT reply.reply_conent,reply_author,reply_time,comment_author,reply_id, users.avatar, users.job from reply, users where users.nickname = reply.comment_author and reply.comment_id = '${comments[i].comment_id}' order by reply_time desc;`)
    comments[i].replys = replys
    for (var j= 0; j<author.length;j++) {
      if (comments[i].comment_author == author[j].nickname) {
        comments[i].userInfo = author[j]
      }
    }
  }
  return comments
}

const newComment = async (commentData = {}) => {
  const article_id = commentData.article_id
  const comment_conent = commentData.comment_conent
  const comment_author = commentData.comment_author
  const comment_likes = commentData.comment_likes
  const comment_time = Date.now()
  const comment_id = commentData.comment_id
  const sql =  `insert into comment (article_id, comment_conent, comment_author, comment_likes, comment_time, comment_id) values ('${article_id}','${comment_conent}','${comment_author}','${comment_likes}', '${comment_time}', '${comment_id}' ); `
  const insertData = await exec(sql)
  return {
    id: insertData.insertId
  }
}
const newReply = async (commentData = {}) => {
  const comment_id = commentData.comment_id
  const reply_conent = commentData.reply_conent
  const reply_author = commentData.reply_author
  const comment_author = commentData.comment_author
  const reply_id = commentData.reply_id
  const reply_time = Date.now()
  const sql =  `insert into reply (comment_id, reply_conent, reply_author,comment_author, reply_time,reply_id) values ('${comment_id}','${reply_conent}','${reply_author}','${comment_author}','${reply_time}','${reply_id}'); `
  const insertData = await exec(sql)
  return {
    id: insertData.insertId
  }
}

module.exports = {
  newComment,
  newReply,
  getComment
}