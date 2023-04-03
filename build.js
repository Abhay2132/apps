import * as fs from "fs";
import path from "path";
const routes = ["imgD", "ytdl", "notebook", "notebook/new", "settings", "about","login", "signup", "reset"];

const index = fs.readFileSync(path.join(path.resolve(), "dist", "index.html"));

routes.forEach((route) =>{
    console.log("Creating route for", "/"+route);
    let dir = path.join(path.resolve(), "dist", route)
    let file = path.join(dir, "index.html");
    fs.mkdirSync(dir, {recursive :true});
    fs.writeFileSync(file, index);
})