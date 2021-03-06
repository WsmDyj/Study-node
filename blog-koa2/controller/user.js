const { exec, escape } = require('../db/mysql')
const { genPassword } = require('../utils/cryp')

const login = async (username, password) => {
  username = escape(username)
   // 生成密码加密
  password = genPassword(password)
  password = escape(password)

  const sql = `select * from users where username=${username} and password=${password} `
  
  const rows = await exec(sql)
  return rows[0] || {}
}

const oauthLogin = async (userData = {}) => {
  const username = userData.username
  const nickname = userData.username
  const avatar = userData.avatar
  const date = Date.now()
  const userSql = `select * from users where username = '${username}' `
  const rows = await exec(userSql)
  if (rows.length > 0) {
    return rows[0] || {}
  } else {
    password = genPassword(123)
    const sql = `insert into users (username,password, nickname, avatar, date) values ('${username}', '${password}', '${nickname}', '${avatar}', '${date}');`
    const insertData = await exec(sql)
    if (insertData.affectedRows > 0) {
      return false
    }
  }
}

const register = async(username, password, nickname) => {
  const date = Date.now()
  const userSql = `select * from users where username = '${username}' `
  const rows = await exec(userSql)
  if (rows.length > 0) {
    return false
  } else {
    password = genPassword(password)
    const sql = `insert into users (username, password, nickname, date) values ('${username}', '${password}', '${nickname}', '${date}');`
    const insertData = await exec(sql)
    if (insertData.affectedRows > 0) {
      return true
    }
  }
}

const getUserInfo = async (username) => {
  let sql = `select comments, reviews, likeCount from blogs where author = '${username}';`
  let userSql = `select avatar,autograph, date, company, job, nickname from users where nickname = '${username}';`
  const rows = await exec(sql)
  let s = 0, sum = 0, t = 0;
  rows.forEach(item => {
    s += item.reviews
    sum += item.comments
    t += item.likeCount
  })
  const userInfo = await exec(userSql)
  Object.assign(userInfo[0], { reviews: s, comments: sum, likes: t})
  return userInfo[0]
}

const updateUser = async (username, nickname, userData = {}) => {
  const sql = `update users set nickname='${userData.nickname}', avatar='${userData.avatar}', job='${userData.job}', autograph='${userData.autograph}', company='${userData.company}' where username= '${username}'; `
  const blogSql = `update blogs set author='${userData.nickname}' where author ='${nickname}';`
  const commentSql = `update comment set comment_author='${userData.nickname}' where comment_author ='${nickname}';`
  const likesSql = `update likes set like_author='${userData.nickname}' where like_author ='${nickname}';`
  const replySql = `update reply set reply_author ='${userData.nickname}' where reply_author ='${nickname}';`
  const replycommentSql = `update reply set comment_author='${userData.nickname}' where comment_author ='${nickname}';`
  const followSql = `update follows set follow_author ='${userData.nickname}' where follow_author ='${nickname}';`
  const followingSql = `update follows set following_author='${userData.nickname}' where following_author ='${nickname}';`
  const updateData = await exec(sql)
  await exec(blogSql)
  await exec(commentSql)
  await exec(likesSql)
  await exec(replySql)
  await exec(replycommentSql)
  await exec(followSql)
  await exec(followingSql)
  if (updateData.affectedRows > 0) {
    return true
  } 
  return false
}

const getList = async (top) => {
  let sql = `select autograph, avatar, company, job, nickname, date from users;`
  const userList = await exec(sql)
  for (var i=0;i< userList.length;i++) {
    let reviewsSql = `select reviews,comments,likeCount from blogs where author = '${userList[i].nickname}';`
    let commentsSql = `select comments from blogs where author = '${userList[i].nickname}';`
    let likesSql = `select likeCount from blogs where author = '${userList[i].nickname}';`
    const _reviews = await exec(reviewsSql)
    const _comments = await exec(commentsSql)
    const _likes = await exec(likesSql)
    var s = 0, sum = 0, t = 0;
    _reviews.forEach(item => {
      s += item.reviews
    })
    _comments.forEach(item => {
      sum += item.comments
    })
    _likes.forEach(item => {
      t += item.likeCount
    })
    userList[i].reviews = s
    userList[i].comments = sum
    userList[i].likes = t
  }
  userList.sort(compare("likes"))
  if (top) {
    return userList.slice(0, top)
  } else {
    return userList
  }
}

function compare(p){ //这是比较函数
  return function(m,n){
      var a = m[p];
      var b = n[p];
      return b - a; //升序
  }
}
module.exports = {
  login,
  oauthLogin,
  register,
  getUserInfo,
  updateUser,
  getList
}