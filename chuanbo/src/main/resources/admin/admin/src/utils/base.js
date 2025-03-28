const base = {
    get() {
        return {
            url : "http://localhost:8080/chuanbo/",
            name: "chuanbo",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/chuanbo/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "船舶监造系统"
        } 
    }
}
export default base
