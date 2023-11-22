export default function usersQueries(db){

    async function registerUser(user){
        await db.none(`INSERT INTO users (username,email,user_password) VALUES($1,$2,$3)`,[user.username,user.email,user.user_password])

    }

    async function checkiIfUserExist(username,password){
        return await db.oneOrNone(`SELECT * FROM users WHERE username = $1 AND user_password= $2`,[username,password])
    }

    async function getHashedPassword(username){
        return await db.oneOrNone(`SELECT user_password FROM users WHERE username = $1`,[username])

    }
    return{
        registerUser,
        checkiIfUserExist,
        getHashedPassword
    }
} 