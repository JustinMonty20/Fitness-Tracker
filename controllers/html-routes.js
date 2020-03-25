
module.exports = function (app) {
    app.get("/",(req,res)=> {
        res.sendFile("/index.html");
    })

    app.get("/exercise", (req,res)=> {
        res.sendFile("/exercise.html");
    })
}