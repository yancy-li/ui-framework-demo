var users = [{
        id: 1,
        name: 'foo'
    },
    {
        id: 2,
        name: 'bar'
    },
    {
        id: 3,
        name: 'baz'
    }
];

// 用 promise 模拟异步请求
export default {
    getUser: function (id) {
        return new Promise(function (resolve, reject) {
            for (var i = 0; i < users.length; i++) {
                var user = users[i];
                if (user.id == id) {
                    resolve(user)
                }
            }
        });
    },
    getUsers: function () {
        return new Promise(function (resolve, reject) {
            resolve(users)
        });
    },
    update: function (id, name) {
        return new Promise(function (resolve, reject) {
            for (var i = 0; i < users.length; i++) {
                var user = users[i];
                if (user.id == id) {
                    user.name = name;
                    resolve(user);
                }
            }
        });
    },
    find: function(name) {
        return new Promise(function (resolve, reject) {
            var foundUsers = [];
            for (var i = 0; i < users.length; i++) {
                var user = users[i];
                if (user.name.indexOf(name) >= 0) {
                    foundUsers.push(user);
                }
            }
            resolve(foundUsers);
        });
    }
}