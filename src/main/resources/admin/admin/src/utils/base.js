const base = {
    get() {
        return {
            url : "http://localhost:8080/shipindianbo/",
            name: "shipindianbo",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/shipindianbo/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "视频点播系统"
        } 
    }
}
export default base
