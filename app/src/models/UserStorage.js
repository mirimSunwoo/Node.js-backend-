"use strict";

class UserStorage{
    //#은 외부에서 불러올 수 없음
    //데이터 은닉화
    static #users = {
        id: ["woorimIT","나개발","김팀장","오민정 지각"],
        psword: ["1234","1234","123456","00000"],
        nickname: ["w2010@e-mirim.hs.kr","s11330@e-mirim.hs.kr","d2534@e-mirim.hs.kr"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers,field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        // console.log(newUsers);
        return newUsers;
        // return this.#users;
    }
    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        },{});
        return userInfo;
    }
    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.psword.push(userInfo.psword);
        users.nickname.push(userInfo.nickname);
        console.log(users);
    }
}
module.exports = UserStorage;