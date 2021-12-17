let userInfo = {
    userId: 'yhch',
    userType: 'admin',
    joinTime: '2021-10-11',
    username: '闫宏超',
    enName: 'yhch',
    email: '17794248039@163.com',
    portrait: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180520%2F0473e00bdfd2476fbe0c228a45a1652c.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636785440&t=ac7311fa82e6c42f0ff484bd1dc8b2cd',
    menus: [
        'A001',
        'B001',
        'C001'
    ]
}

const getUserInfo = () => {
    return {
        status: 0,
        message: 'success',
        data: userInfo
    }
}

const login = (values) => {
    console.log(values)
    const data = JSON.parse(values.body)
    console.log(data)
    if (data.username === 'yhch' && data.password === 'Aa000000') {
        return {
            status: 0,
            message: 'success',
            data: userInfo
        }
    }
    return {
        status: 1,
        message: 'error'
    }
}

const editUser = (values) => {
    console.log(values)
    const data = JSON.parse(values.body)
    console.log(data)
    return {
        status: 0,
        message: 'success',
    }
}

export default {
    'get|/yhch/getUserInfo': getUserInfo,
    'post|/yhch/login': login,
    'post|/yhch/editUser': editUser
}