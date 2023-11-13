export default function usersQueries(db){

    async function registerUser(user){
        await db.none(`INSERT INTO users (username,email,user_password) VALUES($1,$2,$3)`,[user.username,user.email,user.user_password])

    }

    return{
        registerUser,
    }
} 