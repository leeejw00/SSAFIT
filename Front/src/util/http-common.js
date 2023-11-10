import axios from 'axios'

// 구현한 spring boot 서버에 맞게 수정합니다
export default axios.create({
    baseURL: "http://localhost:9999/userapi",
    headers:{
        "Content-type" : "application/json",
    }
})
