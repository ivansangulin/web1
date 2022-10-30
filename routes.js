const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require('body-parser');
const app = express();
const { auth, requiresAuth } = require('express-openid-connect');
require("dotenv").config();
app.set('view engine', 'ejs');
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 3000
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: 'http://localhost:3000',
    clientID: process.env.CLIENTID,
    issuerBaseURL: 'https://dev-gtlzfsa5q48c5kb0.us.auth0.com'
  };
app.use(auth(config));

app.get(["/","/table"], (req,res) => {
    var admin = (JSON.parse(fs.readFileSync('admin.json'))).admin;
    var isAdmin = false;
    var auth = false;
    if(req.oidc.isAuthenticated()) {
        auth = true;
        if(req.oidc.user.name == admin) {
            isAdmin = true;
        }
    }
    fs.readFile('clubs.json', 'utf8', function (err, data) {
        if(err) {
            console.log(err)
            res.render("Error occured")
        } else {
            const clubsData = JSON.parse(data);
            res.render('table.ejs', {clubs: clubsData.clubs, loggedin:auth, admin:isAdmin});
        }
    })
})

app.get("/matchdays",   (req,res) => {
    var admin = (JSON.parse(fs.readFileSync('admin.json'))).admin;
    var isAdmin = false;
    var auth = false;
    if(req.oidc.isAuthenticated()) {
        auth = true;
        if(req.oidc.user.name == admin) {
            isAdmin = true;
        }
    }
    fs.readFile('matchdays.json', 'utf-8', function(err, data) {
        if(err) {
            console.log(err);
            res.render("Error occured")
        } else {
            const matchdaysData = JSON.parse(data);
            res.render('matchdays.ejs', {matchdays: matchdaysData.matchdays, loggedin: auth,admin:isAdmin});
        }
    })
})

app.get("/editgames",bodyParser.json(), (req,res) => {
    var admin = (JSON.parse(fs.readFileSync('admin.json'))).admin;
    if(req.oidc.isAuthenticated()) {
        if(req.oidc.user.name != admin) {
            res.redirect("/");
        }
    } else {
        res.redirect("/");
    }
        fs.readFile('matchdays.json', 'utf-8', function(err,data) {
            if(err) {
                console.log(err);
                res.render("Error occured");
            } else {
                const matchdaysData = JSON.parse(data);
                res.render('editgames.ejs', {matchdays: matchdaysData.matchdays, loggedin: true, admin:true});
            }
        })
})

app.post("/editscore", function(req,res) {
    var admin = (JSON.parse(fs.readFileSync('admin.json'))).admin;
    if(req.oidc.user.name != admin) {
        res.status(403);
    } else {
        fs.readFile('matchdays.json', 'utf-8', function(err,data) {
            const matchdaysData = (JSON.parse(data)).matchdays;
            for(let i = 0; i < matchdaysData.length; i++) {
                if(matchdaysData[i].id == req.body.gameid) {
                    const clubs = (JSON.parse(fs.readFileSync('clubs.json'))).clubs;
                    if(matchdaysData[i].homegoals == "" && matchdaysData[i].homegoals == "") {
                        clubs.forEach(club => {
                            if(club.clubname == matchdaysData[i].hometeam) {
                                club.goaldifference = parseInt(club.goaldifference) + req.body.homegoals - req.body.awaygoals;
                                if(req.body.homegoals == req.body.awaygoals) {
                                    club.points = parseInt(club.points) + 1;
                                } else if(req.body.homegoals > req.body.awaygoals) {
                                    club.points = parseInt(club.points) + 3;
                                } 
                            } else if(club.clubname == matchdaysData[i].awayteam) {
                                club.goaldifference = parseInt(club.goaldifference) + req.body.awaygoals - req.body.homegoals;
                                if(req.body.homegoals == req.body.awaygoals) {
                                    club.points = parseInt(club.points) + 1;
                                } else if(req.body.homegoals < req.body.awaygoals) {
                                    club.points = parseInt(club.points) + 3;
                                }
                            }
                        });
                    } else if(req.body.homegoals == "" && req.body.awaygoals == "") {
                        clubs.forEach(club => {
                            if(club.clubname == matchdaysData[i].hometeam) {
                                club.goaldifference = parseInt(club.goaldifference) + matchdaysData[i].awaygoals - matchdaysData[i].homegoals;
                                if(matchdaysData[i].homegoals == matchdaysData[i].awaygoals) {
                                    club.points = parseInt(club.points) - 1;
                                } else if(matchdaysData[i].homegoals > matchdaysData[i].awaygoals) {
                                    club.points = parseInt(club.points) - 3;
                                }
                            } else if(club.clubname == matchdaysData[i].awayteam) {
                                club.goaldifference = parseInt(club.goaldifference) + matchdaysData[i].homegoals - matchdaysData[i].awaygoals;
                                if(matchdaysData[i].homegoals == matchdaysData[i].awaygoals) {
                                    club.points = parseInt(club.points) - 1;
                                } else if(matchdaysData[i].awaygoals > matchdaysData[i].homegoals) {
                                    club.points = parseInt(club.points) - 3;
                                }
                            }
                        });
                    } else {
                        clubs.forEach(club => {
                            if(club.clubname == matchdaysData[i].hometeam) {
                                club.goaldifference = parseInt(club.goaldifference) + (req.body.homegoals - req.body.awaygoals) - (matchdaysData[i].homegoals - matchdaysData[i].awaygoals);
                                if(req.body.homegoals > req.body.awaygoals && matchdaysData[i].homegoals == matchdaysData[i].awaygoals) {
                                    club.points = parseInt(club.points) + 2;
                                } else if(req.body.homegoals < req.body.awaygoals && matchdaysData[i].homegoals == matchdaysData[i].awaygoals) {
                                    club.points = parseInt(club.points) - 1;
                                } else if(req.body.homegoals == req.body.awaygoals && matchdaysData[i].homegoals > matchdaysData[i].awaygoals) {
                                    club.points = parseInt(club.points) - 2;
                                } else if(req.body.homegoals < req.body.awaygoals && matchdaysData[i].homegoals > matchdaysData[i].awaygoals) {
                                    club.points = parseInt(club.points) - 3;
                                } else if(req.body.homegoals == req.body.awaygoals && matchdaysData[i].homegoals < matchdaysData[i].awaygoals) {
                                    club.points = parseInt(club.points) + 1;
                                } else if(req.body.homegoals > req.body.awaygoals && matchdaysData[i].homegoals < matchdaysData[i].awaygoals) {
                                    club.points = parseInt(club.points) + 3;
                                }
                            } else if(club.clubname == matchdaysData[i].awayteam) {
                                club.goaldifference = parseInt(club.goaldifference) + (req.body.awaygoals - req.body.homegoals) - (matchdaysData[i].awaygoals - matchdaysData[i].homegoals);
                                if(req.body.awaygoals > req.body.homegoals && matchdaysData[i].awaygoals == matchdaysData[i].homegoals) {
                                    club.points = parseInt(club.points) + 2;
                                } else if(req.body.awaygoals < req.body.homegoals && matchdaysData[i].awaygoals == matchdaysData[i].homegoals) {
                                    club.points = parseInt(club.points) - 1;
                                } else if(req.body.awaygoals == req.body.homegoals && matchdaysData[i].awaygoals > matchdaysData[i].homegoals) {
                                    club.points = parseInt(club.points) - 2;
                                } else if(req.body.awaygoals < req.body.homegoals && matchdaysData[i].awaygoals > matchdaysData[i].homegoals) {
                                    club.points = parseInt(club.points) - 3;
                                } else if(req.body.awaygoals == req.body.homegoals && matchdaysData[i].awaygoals < matchdaysData[i].homegoals) {
                                    club.points = parseInt(club.points) + 1;
                                } else if(req.body.awaygoals > req.body.homegoals && matchdaysData[i].awaygoals < matchdaysData[i].homegoals) {
                                    club.points = parseInt(club.points) + 3;
                                }
                            }
                        })
                    } 
                    matchdaysData[i].homegoals = req.body.homegoals;
                    matchdaysData[i].awaygoals = req.body.awaygoals;
                    clubs.sort(function(a,b) {
                        if(a.points == b.points) {
                            return b.pointsdifference - a.pointsdifference;
                        }
                        return b.points - a.points;
                    })
                    fs.writeFileSync('clubs.json', JSON.stringify({"clubs":clubs}), 'utf-8', function(err) {
                        if(err) {
                            console.log(err);
                        } else {
                            console.log(updated);
                        }
                    })
                    break;
                }
            }
            fs.writeFile('matchdays.json', JSON.stringify({"matchdays":matchdaysData}) ,'utf-8', function(err) {
                if(err) {
                    console.log(err);
                    res.status(400);
                } else {
                    console.log("Updated the score for the game id:" + req.body.gameid);
                    res.end("ok");
                }
            })
        })
    }
})

app.get("/matchdays/:matchdayId" ,(req,res) => {
    var admin = (JSON.parse(fs.readFileSync('admin.json'))).admin;
    var isAdmin = false;
    var auth = false;
    var user = "";
    if(req.oidc.isAuthenticated()) {
        auth = true;
        user = req.oidc.user.name;
        if(req.oidc.user.name == admin) {
            isAdmin = true;
        }
    }
    const comments = (JSON.parse(fs.readFileSync('comments.json'))).comments;
    var commentsForMatchday = [];
    comments.forEach(comment => {
        if(comment.matchday == req.params.matchdayId) {
            commentsForMatchday.push(comment);
        }
    })
    const matchdays = (JSON.parse(fs.readFileSync('matchdays.json'))).matchdays;
    const maxid = (JSON.parse(fs.readFileSync('comments.json'))).maxid;
    var found = false;
    var matchday = [];
    matchdays.forEach(game => {
        if(game.matchday == req.params.matchdayId) {
            matchday.push(game);
            found = true;
        }
    })
    if(found == false) {
        res.send("There is no such matchday!");
    } else {
        res.render('matchday.ejs', {matchday:matchday, loggedin:auth, admin:isAdmin,comments:commentsForMatchday,user:user,maxid:maxid});
    }
})

app.post("/deletecomment", function(req,res) {
    if(!req.oidc.isAuthenticated()) {
        res.status(403);
    } else {
        var commentsFile = JSON.parse(fs.readFileSync('comments.json'));
        var comments = commentsFile.comments;
        var maxid = commentsFile.maxid;
        var index = "";
        comments.forEach(comment => {
            if(comment.id == req.body.commentid) {
                index = comments.indexOf(comment);
            }
        })
        comments.splice(index,1);
        fs.writeFile('comments.json',JSON.stringify({"comments":comments,"maxid":maxid}), 'utf-8', function(err) {
            if(err) {
                console.log(err);
                res.status(400);
            } else {
                res.send("ok");
            }
        })
    }
})

app.post("/addcomment", function(req,res) {
    if(!req.oidc.isAuthenticated()) {
        res.status(403);
    } else {
        var commentsFile = JSON.parse(fs.readFileSync('comments.json'));
        var comments = commentsFile.comments;
        var maxid = commentsFile.maxid;
        maxid = maxid + 1;
        comments.push(req.body.newcomment);
        fs.writeFile('comments.json', JSON.stringify({"comments":comments,"maxid":maxid}), 'utf-8', function(err) {
            if(err) {
                console.log(err);
                res.status(400);
            } else {
                res.send("ok");
            }
        })
    }
})

app.post("/editcomment", function(req,res) {
    if(!req.oidc.isAuthenticated()) {
        res.status(403);
    } else {
        var commentsFile = JSON.parse(fs.readFileSync('comments.json'));
        var comments = commentsFile.comments;
        var maxid = commentsFile.maxid;
        comments.forEach(comment => {
            if(comment.id == req.body.newcomment.id) {
                comment.comment = req.body.newcomment.comment;
            }
        })
        fs.writeFile('comments.json', JSON.stringify({"comments":comments,"maxid":maxid}), 'utf-8', function(err) {
            if(err) {
                console.log(err);
                res.status(400);
            } else {
                res.send("ok");
            }
        })
    }
})

app.listen(port, () => {
    console.log('App listening on port ' + port)
})