"use strict";
const fs=require("node:fs"),path=require("node:path");
const root=path.resolve(__dirname,".."),out=path.join(root,"dist");
fs.mkdirSync(out,{recursive:true});
for(const file of ["index.html","styles.css","app.js"]){fs.copyFileSync(path.join(root,file),path.join(out,file));}
console.log("Built offline SpineFlow gallery to dist/ (3 files).");

if(fs.existsSync(path.join(root,"assets")))fs.cpSync(path.join(root,"assets"),path.join(out,"assets"),{recursive:true});
fs.mkdirSync(path.join(out,"legacy"),{recursive:true});
fs.copyFileSync(path.join(root,"client/public/spineflow-v5.6.html"),path.join(out,"legacy/spineflow-v5.6.html"));
