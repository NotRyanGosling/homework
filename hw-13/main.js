const me = {
    name: 'Renat',
    age: 23,
    status: 'studying'
}

console.log('Hello ' + `${me.name}`)
// ====================

const users = [
    {
        name: 'julia',
        isAdmin: true
    },
    
    {
        name: 'ilya',
        isAdmin: false
    },

    {
        name: 'ax',
        isAdmin: true
    },

    {
        name: 'masha',
        isAdmin: true
    },

    {
        name: 'Vadim',
        isAdmin: false
    }
]

let regularUserCount = null

for (let i=0; i<users.length; i++){
    if (users[i].isAdmin == false){
        regularUserCount++
    }
}

console.log(`В системе ${regularUserCount} обычных пользователя`)
