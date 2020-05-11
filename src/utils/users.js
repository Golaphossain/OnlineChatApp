    const users=[]

    const addUser=({id,username,room })=>{
        //clean
        username=username.trim().toLowerCase()
        room=room.trim().toLowerCase()

        //validate
        if(!username||!room){
            return{
                error:'Username and room are required!'
            }
        }
        //check for existing user
        const existingUser=users.find((user)=>{
            return user.room===room&&user.username===username
        })
        //validate username
        if(existingUser){
            return{
                error:'Username is in use! '
            }
        }
        //store
        const user={id,username,room}
        users.push(user)
        return {user }
    }
    const removeUser=(id)=>{
        const index=users.findIndex((user)=>user.id===id)
        if(index!==-1){
            return users.splice(index,1)[0]
        }
    }
    const getUser=(id)=>{
        return users.find((user)=> user.id===id)
        
    }
    const getUsersInRoom=(room)=>{
        room=room.trim().toLowerCase()
        return users.filter((user)=>user.room===room)
    }
    // addUser({
    //     id:22,
    //     username:'Golap',
    //     room:'Machine learning'
    // })
    // addUser({
    //     id:23,
    //     username:'Hasan',
    //     room:'Machine learning'
    // })
    // addUser({
    //     id:24,
    //     username:'Golap',
    //     room:'aminoacid'
    // })
    // const user=getUser(22)
    // console.log(user)
    // const userList=getUsersInRoom('Machine Learning')
    // console.log(userList)
    module.exports={
        addUser,
        removeUser,
        getUser,
        getUsersInRoom
    }