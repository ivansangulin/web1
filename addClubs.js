let fs = require('fs');

fs.readFile('clubs.json', 'utf8', function (err, data) {
   if (err) {
       console.log(err)
   } else {
       const file = JSON.parse(data);
       //file.events.push({"id": title1, "year": 2018, "month": 1, "day": 3});
       //file.events.push({"id": title2, "year": 2018, "month": 2, "day": 4});
       file.clubs.push({"clubname": 'Dinamo','points': '35', 'goaldifference': '24', 'gamesplayed':'13'});
       file.clubs.push({"clubname": 'Hajduk','points': '30', 'goaldifference': '12', 'gamesplayed':'14'});
        file.clubs.push({"clubname": 'Osijek','points': '24', 'goaldifference': '7', 'gamesplayed':'14'});
        file.clubs.push({"clubname": 'Slaven','points': '23', 'goaldifference': '-10', 'gamesplayed':'14'});
        file.clubs.push({"clubname": 'Varazdin','points': '22', 'goaldifference': '1', 'gamesplayed':'15'});
        file.clubs.push({"clubname": 'Istra','points': '17', 'goaldifference': '-2', 'gamesplayed':'14'});
        file.clubs.push({"clubname": 'Sibenik','points': '13', 'goaldifference': '-4', 'gamesplayed':'15'});
        file.clubs.push({"clubname": 'Lokomotiva','points': '13', 'goaldifference': '-8', 'gamesplayed':'14'});
        file.clubs.push({"clubname": 'Rijeka','points': '12', 'goaldifference': '-8', 'gamesplayed':'15'});
        file.clubs.push({"clubname": 'Gorica','points': '6', 'goaldifference': '-12', 'gamesplayed':'14'});
       const json = JSON.stringify(file);

       fs.writeFile('clubs.json', json, 'utf8', function(err){
            if(err){ 
                  console.log(err); 
            } else {
                  console.log('added!')
            }});
   }

});

fs.readFile('matchdays.json', 'utf-8', function(err,data) {
      if(err) {
            console.log(err);
      } else {
            const file = JSON.parse(data);
            file.matchdays.push({"id":"1","matchday":"1","hometeam":"Dinamo","awayteam":"Lokomotiva","homegoals":"3","awaygoals":"2"})
            file.matchdays.push({"id":"2","matchday":"1","hometeam":"Osijek","awayteam":"Gorica","homegoals":"2","awaygoals":"1"})
            file.matchdays.push({"id":"3","matchday":"1","hometeam":"Sibenik","awayteam":"Rijeka","homegoals":"0","awaygoals":"1"})
            file.matchdays.push({"id":"4","matchday":"1","hometeam":"Varazdin","awayteam":"Slaven","homegoals":"0","awaygoals":"1"})
            file.matchdays.push({"id":"5","matchday":"1","hometeam":"Istra","awayteam":"Hajduk","homegoals":"0","awaygoals":"2"})
            file.matchdays.push({"id":"6","matchday":"2","hometeam":"Istra","awayteam":"Varazdin","homegoals":"1","awaygoals":"2"})
            file.matchdays.push({"id":"7","matchday":"2","hometeam":"Gorica","awayteam":"Sibenik","homegoals":"0","awaygoals":"0"})
            file.matchdays.push({"id":"8","matchday":"2","hometeam":"Lokomotiva","awayteam":"Osijek","homegoals":"2","awaygoals":"1"})
            file.matchdays.push({"id":"9","matchday":"2","hometeam":"Slaven","awayteam":"Dinamo","homegoals":"1","awaygoals":"5"})
            file.matchdays.push({"id":"10","matchday":"2","hometeam":"Hajduk","awayteam":"Rijeka","homegoals":"3","awaygoals":"1"})
            file.matchdays.push({"id":"11","matchday":"3","hometeam":"Dinamo","awayteam":"Istra","homegoals":"4","awaygoals":"1"})
            file.matchdays.push({"id":"12","matchday":"3","hometeam":"Osijek","awayteam":"Slaven","homegoals":"0","awaygoals":"0"})
            file.matchdays.push({"id":"13","matchday":"3","hometeam":"Sibenik","awayteam":"Lokomotiva","homegoals":"2","awaygoals":"1"})
            file.matchdays.push({"id":"14","matchday":"3","hometeam":"Varazdin","awayteam":"Hajduk","homegoals":"0","awaygoals":"2"})
            file.matchdays.push({"id":"15","matchday":"3","hometeam":"Rijeka","awayteam":"Gorica","homegoals":"1","awaygoals":"1"})
            file.matchdays.push({"id":"16","matchday":"4","hometeam":"Varazdin","awayteam":"Dinamo","homegoals":"1","awaygoals":"1"})
            file.matchdays.push({"id":"17","matchday":"4","hometeam":"Slaven","awayteam":"Sibenik","homegoals":"0","awaygoals":"0"})
            file.matchdays.push({"id":"18","matchday":"4","hometeam":"Istra","awayteam":"Osijek","homegoals":"1","awaygoals":"0"})
            file.matchdays.push({"id":"19","matchday":"4","hometeam":"Lokomotiva","awayteam":"Rijeka","homegoals":"3","awaygoals":"1"})
            file.matchdays.push({"id":"20","matchday":"4","hometeam":"Hajduk","awayteam":"Gorica","homegoals":"3","awaygoals":"1"})
            file.matchdays.push({"id":"21","matchday":"5","hometeam":"Sibenik","awayteam":"Istra","homegoals":"0","awaygoals":"0"})
            file.matchdays.push({"id":"22","matchday":"5","hometeam":"Gorica","awayteam":"Lokomotiva","homegoals":"3","awaygoals":"2"})
            file.matchdays.push({"id":"23","matchday":"5","hometeam":"Dinamo","awayteam":"Hajduk","homegoals":"4","awaygoals":"1"})
            file.matchdays.push({"id":"24","matchday":"5","hometeam":"Osijek","awayteam":"Varazdin","homegoals":"2","awaygoals":"2"})
            file.matchdays.push({"id":"25","matchday":"5","hometeam":"Rijeka","awayteam":"Slaven","homegoals":"0","awaygoals":"1"})
            file.matchdays.push({"id":"26","matchday":"6","hometeam":"Slaven","awayteam":"Gorica","homegoals":"2","awaygoals":"1"})
            file.matchdays.push({"id":"27","matchday":"6","hometeam":"Varazdin","awayteam":"Sibenik","homegoals":"2","awaygoals":"2"})
            file.matchdays.push({"id":"28","matchday":"6","hometeam":"Dinamo","awayteam":"Osijek","homegoals":"5","awaygoals":"2"})
            file.matchdays.push({"id":"29","matchday":"6","hometeam":"Istra","awayteam":"Rijeka","homegoals":"1","awaygoals":"1"})
            file.matchdays.push({"id":"30","matchday":"6","hometeam":"Hajduk","awayteam":"Lokomotiva","homegoals":"2","awaygoals":"1"})
            file.matchdays.push({"id":"31","matchday":"7","hometeam":"Gorica","awayteam":"Istra","homegoals":"0","awaygoals":"2"})
            file.matchdays.push({"id":"32","matchday":"7","hometeam":"Rijeka","awayteam":"Varazdin","homegoals":"1","awaygoals":"2"})
            file.matchdays.push({"id":"33","matchday":"7","hometeam":"Sibenik","awayteam":"Dinamo","homegoals":"1","awaygoals":"2"})
            file.matchdays.push({"id":"34","matchday":"7","hometeam":"Lokomotiva","awayteam":"Slaven","homegoals":"0","awaygoals":"1"})
            file.matchdays.push({"id":"35","matchday":"7","hometeam":"Osijek","awayteam":"Hajduk","homegoals":"2","awaygoals":"1"})
            file.matchdays.push({"id":"36","matchday":"8","hometeam":"Dinamo","awayteam":"Rijeka","homegoals":"3","awaygoals":"1"})
            file.matchdays.push({"id":"37","matchday":"8","hometeam":"Osijek","awayteam":"Sibenik","homegoals":"1","awaygoals":"1"})
            file.matchdays.push({"id":"38","matchday":"8","hometeam":"Hajduk","awayteam":"Slaven","homegoals":"5","awaygoals":"1"})
            file.matchdays.push({"id":"39","matchday":"8","hometeam":"Varazdin","awayteam":"Gorica","homegoals":"2","awaygoals":"1"})
            file.matchdays.push({"id":"40","matchday":"8","hometeam":"Istra","awayteam":"Lokomotiva","homegoals":"1","awaygoals":"2"})
            file.matchdays.push({"id":"41","matchday":"9","hometeam":"Gorica","awayteam":"Dinamo","homegoals":"0","awaygoals":"1"})
            file.matchdays.push({"id":"42","matchday":"9","hometeam":"Rijeka","awayteam":"Osijek","homegoals":"0","awaygoals":"3"})
            file.matchdays.push({"id":"43","matchday":"9","hometeam":"Sibenik","awayteam":"Hajduk","homegoals":"1","awaygoals":"1"})
            file.matchdays.push({"id":"44","matchday":"9","hometeam":"Slaven","awayteam":"Istra","homegoals":"0","awaygoals":"3"})
            file.matchdays.push({"id":"45","matchday":"9","hometeam":"Lokomotiva","awayteam":"Varazdin","homegoals":"1","awaygoals":"2"})
            file.matchdays.push({"id":"46","matchday":"10","hometeam":"Slaven","awayteam":"Varazdin","homegoals":"1","awaygoals":"0"})
            file.matchdays.push({"id":"47","matchday":"10","hometeam":"Gorica","awayteam":"Osijek","homegoals":"0","awaygoals":"1"})
            file.matchdays.push({"id":"48","matchday":"10","hometeam":"Hajduk","awayteam":"Istra","homegoals":"2","awaygoals":"2"})
            file.matchdays.push({"id":"49","matchday":"10","hometeam":"Rijeka","awayteam":"Sibenik","homegoals":"0","awaygoals":"0"})
            file.matchdays.push({"id":"50","matchday":"10","hometeam":"Lokomotiva","awayteam":"Dinamo","homegoals":"1","awaygoals":"2"})
            file.matchdays.push({"id":"51","matchday":"11","hometeam":"Varazdin","awayteam":"Istra","homegoals":"1","awaygoals":"1"})
            file.matchdays.push({"id":"52","matchday":"11","hometeam":"Osijek","awayteam":"Lokomotiva","homegoals":"4","awaygoals":"1"})
            file.matchdays.push({"id":"53","matchday":"11","hometeam":"Dinamo","awayteam":"Slaven","homegoals":"4","awaygoals":"1"})
            file.matchdays.push({"id":"54","matchday":"11","hometeam":"Rijeka","awayteam":"Hajduk","homegoals":"0","awaygoals":"1"})
            file.matchdays.push({"id":"55","matchday":"11","hometeam":"Sibenik","awayteam":"Gorica","homegoals":"1","awaygoals":"1"})
            file.matchdays.push({"id":"56","matchday":"12","hometeam":"Lokomotiva","awayteam":"Sibenik","homegoals":"1","awaygoals":"1"})
            file.matchdays.push({"id":"57","matchday":"12","hometeam":"Istra","awayteam":"Dinamo","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"58","matchday":"12","hometeam":"Hajduk","awayteam":"Varazdin","homegoals":"2","awaygoals":"1"})
            file.matchdays.push({"id":"59","matchday":"12","hometeam":"Slaven","awayteam":"Osijek","homegoals":"0","awaygoals":"4"})
            file.matchdays.push({"id":"60","matchday":"12","hometeam":"Gorica","awayteam":"Rijeka","homegoals":"0","awaygoals":"2"})
            file.matchdays.push({"id":"61","matchday":"13","hometeam":"Sibenik","awayteam":"Slaven","homegoals":"0","awaygoals":"2"})
            file.matchdays.push({"id":"62","matchday":"13","hometeam":"Osijek","awayteam":"Istra","homegoals":"2","awaygoals":"0"})
            file.matchdays.push({"id":"63","matchday":"13","hometeam":"Gorica","awayteam":"Hajduk","homegoals":"0","awaygoals":"1"})
            file.matchdays.push({"id":"64","matchday":"13","hometeam":"Dinamo","awayteam":"Varazdin","homegoals":"3","awaygoals":"1"})
            file.matchdays.push({"id":"65","matchday":"13","hometeam":"Rijeka","awayteam":"Lokomotiva","homegoals":"3","awaygoals":"0"})
            file.matchdays.push({"id":"66","matchday":"14","hometeam":"Hajduk","awayteam":"Dinamo","homegoals":"1","awaygoals":"1"})
            file.matchdays.push({"id":"67","matchday":"14","hometeam":"Lokomotiva","awayteam":"Gorica","homegoals":"2","awaygoals":"1"})
            file.matchdays.push({"id":"68","matchday":"14","hometeam":"Varazdin","awayteam":"Osijek","homegoals":"4","awaygoals":"1"})
            file.matchdays.push({"id":"69","matchday":"14","hometeam":"Istra","awayteam":"Sibenik","homegoals":"0","awaygoals":"0"})
            file.matchdays.push({"id":"70","matchday":"14","hometeam":"Slaven","awayteam":"Rijeka","homegoals":"2","awaygoals":"1"})
            file.matchdays.push({"id":"71","matchday":"15","hometeam":"Sibenik","awayteam":"Varazdin","homegoals":"1","awaygoals":"2"})
            file.matchdays.push({"id":"72","matchday":"15","hometeam":"Rijeka","awayteam":"Istra","homegoals":"0","awaygoals":"1"})
            file.matchdays.push({"id":"73","matchday":"15","hometeam":"Osijek","awayteam":"Dinamo","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"74","matchday":"15","hometeam":"Gorica","awayteam":"Slaven","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"75","matchday":"15","hometeam":"Lokomotiva","awayteam":"Hajduk","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"76","matchday":"16","hometeam":"Dinamo","awayteam":"Sibenik","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"78","matchday":"16","hometeam":"Slaven","awayteam":"Lokomotiva","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"79","matchday":"16","hometeam":"Hajduk","awayteam":"Osijek","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"80","matchday":"16","hometeam":"Varazdin","awayteam":"Rijeka","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"81","matchday":"16","hometeam":"Istra","awayteam":"Gorica","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"81","matchday":"17","hometeam":"Lokomotiva","awayteam":"Istra","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"82","matchday":"17","hometeam":"Slaven","awayteam":"Hajduk","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"83","matchday":"17","hometeam":"Gorica","awayteam":"Varazdin","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"84","matchday":"17","hometeam":"Sibenik","awayteam":"Osijek","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"85","matchday":"17","hometeam":"Rijeka","awayteam":"Dinamo","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"86","matchday":"18","hometeam":"Dinamo","awayteam":"Gorica","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"87","matchday":"18","hometeam":"Varazdin","awayteam":"Lokomotiva","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"88","matchday":"18","hometeam":"Osijek","awayteam":"Rijeka","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"89","matchday":"18","hometeam":"Hajduk","awayteam":"Sibenik","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"90","matchday":"18","hometeam":"Istra","awayteam":"Slaven","homegoals":"","awaygoals":""})

            file.matchdays.push({"id":"91","matchday":"19","hometeam":"Dinamo","awayteam":"Lokomotiva","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"92","matchday":"19","hometeam":"Osijek","awayteam":"Gorica","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"93","matchday":"19","hometeam":"Sibenik","awayteam":"Rijeka","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"94","matchday":"19","hometeam":"Varazdin","awayteam":"Slaven","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"95","matchday":"19","hometeam":"Istra","awayteam":"Hajduk","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"96","matchday":"20","hometeam":"Istra","awayteam":"Varazdin","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"97","matchday":"20","hometeam":"Gorica","awayteam":"Sibenik","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"98","matchday":"20","hometeam":"Lokomotiva","awayteam":"Osijek","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"99","matchday":"20","hometeam":"Slaven","awayteam":"Dinamo","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"100","matchday":"20","hometeam":"Hajduk","awayteam":"Rijeka","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"101","matchday":"21","hometeam":"Dinamo","awayteam":"Istra","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"102","matchday":"21","hometeam":"Osijek","awayteam":"Slaven","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"103","matchday":"21","hometeam":"Sibenik","awayteam":"Lokomotiva","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"104","matchday":"21","hometeam":"Varazdin","awayteam":"Hajduk","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"105","matchday":"21","hometeam":"Rijeka","awayteam":"Gorica","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"106","matchday":"22","hometeam":"Varazdin","awayteam":"Dinamo","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"107","matchday":"22","hometeam":"Slaven","awayteam":"Sibenik","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"108","matchday":"22","hometeam":"Istra","awayteam":"Osijek","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"109","matchday":"22","hometeam":"Lokomotiva","awayteam":"Rijeka","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"110","matchday":"22","hometeam":"Hajduk","awayteam":"Gorica","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"111","matchday":"23","hometeam":"Sibenik","awayteam":"Istra","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"112","matchday":"23","hometeam":"Gorica","awayteam":"Lokomotiva","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"113","matchday":"23","hometeam":"Dinamo","awayteam":"Hajduk","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"114","matchday":"23","hometeam":"Osijek","awayteam":"Varazdin","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"115","matchday":"23","hometeam":"Rijeka","awayteam":"Slaven","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"116","matchday":"24","hometeam":"Slaven","awayteam":"Gorica","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"117","matchday":"24","hometeam":"Varazdin","awayteam":"Sibenik","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"118","matchday":"24","hometeam":"Dinamo","awayteam":"Osijek","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"119","matchday":"24","hometeam":"Istra","awayteam":"Rijeka","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"120","matchday":"24","hometeam":"Hajduk","awayteam":"Lokomotiva","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"121","matchday":"25","hometeam":"Gorica","awayteam":"Istra","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"122","matchday":"25","hometeam":"Rijeka","awayteam":"Varazdin","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"123","matchday":"25","hometeam":"Sibenik","awayteam":"Dinamo","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"124","matchday":"25","hometeam":"Lokomotiva","awayteam":"Slaven","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"125","matchday":"25","hometeam":"Osijek","awayteam":"Hajduk","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"126","matchday":"26","hometeam":"Dinamo","awayteam":"Rijeka","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"127","matchday":"26","hometeam":"Osijek","awayteam":"Sibenik","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"128","matchday":"26","hometeam":"Hajduk","awayteam":"Slaven","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"129","matchday":"26","hometeam":"Varazdin","awayteam":"Gorica","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"130","matchday":"26","hometeam":"Istra","awayteam":"Lokomotiva","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"131","matchday":"27","hometeam":"Gorica","awayteam":"Dinamo","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"132","matchday":"27","hometeam":"Rijeka","awayteam":"Osijek","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"133","matchday":"27","hometeam":"Sibenik","awayteam":"Hajduk","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"134","matchday":"27","hometeam":"Slaven","awayteam":"Istra","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"135","matchday":"27","hometeam":"Lokomotiva","awayteam":"Varazdin","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"136","matchday":"28","hometeam":"Slaven","awayteam":"Varazdin","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"137","matchday":"28","hometeam":"Gorica","awayteam":"Osijek","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"138","matchday":"28","hometeam":"Hajduk","awayteam":"Istra","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"139","matchday":"28","hometeam":"Rijeka","awayteam":"Sibenik","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"140","matchday":"28","hometeam":"Lokomotiva","awayteam":"Dinamo","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"141","matchday":"29","hometeam":"Varazdin","awayteam":"Istra","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"142","matchday":"29","hometeam":"Osijek","awayteam":"Lokomotiva","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"143","matchday":"29","hometeam":"Dinamo","awayteam":"Slaven","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"144","matchday":"29","hometeam":"Rijeka","awayteam":"Hajduk","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"145","matchday":"29","hometeam":"Sibenik","awayteam":"Gorica","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"146","matchday":"30","hometeam":"Lokomotiva","awayteam":"Sibenik","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"147","matchday":"30","hometeam":"Istra","awayteam":"Dinamo","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"148","matchday":"30","hometeam":"Hajduk","awayteam":"Varazdin","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"149","matchday":"30","hometeam":"Slaven","awayteam":"Osijek","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"150","matchday":"30","hometeam":"Gorica","awayteam":"Rijeka","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"151","matchday":"31","hometeam":"Sibenik","awayteam":"Slaven","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"152","matchday":"31","hometeam":"Osijek","awayteam":"Istra","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"153","matchday":"31","hometeam":"Gorica","awayteam":"Hajduk","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"154","matchday":"31","hometeam":"Dinamo","awayteam":"Varazdin","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"155","matchday":"31","hometeam":"Rijeka","awayteam":"Lokomotiva","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"156","matchday":"32","hometeam":"Hajduk","awayteam":"Dinamo","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"157","matchday":"32","hometeam":"Lokomotiva","awayteam":"Gorica","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"158","matchday":"32","hometeam":"Varazdin","awayteam":"Osijek","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"159","matchday":"32","hometeam":"Istra","awayteam":"Sibenik","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"160","matchday":"32","hometeam":"Slaven","awayteam":"Rijeka","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"161","matchday":"33","hometeam":"Sibenik","awayteam":"Varazdin","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"162","matchday":"33","hometeam":"Rijeka","awayteam":"Istra","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"163","matchday":"33","hometeam":"Osijek","awayteam":"Dinamo","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"164","matchday":"33","hometeam":"Gorica","awayteam":"Slaven","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"165","matchday":"33","hometeam":"Lokomotiva","awayteam":"Hajduk","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"166","matchday":"34","hometeam":"Dinamo","awayteam":"Sibenik","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"168","matchday":"34","hometeam":"Slaven","awayteam":"Lokomotiva","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"169","matchday":"34","hometeam":"Hajduk","awayteam":"Osijek","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"170","matchday":"34","hometeam":"Varazdin","awayteam":"Rijeka","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"171","matchday":"34","hometeam":"Istra","awayteam":"Gorica","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"171","matchday":"35","hometeam":"Lokomotiva","awayteam":"Istra","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"172","matchday":"35","hometeam":"Slaven","awayteam":"Hajduk","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"173","matchday":"35","hometeam":"Gorica","awayteam":"Varazdin","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"174","matchday":"35","hometeam":"Sibenik","awayteam":"Osijek","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"175","matchday":"35","hometeam":"Rijeka","awayteam":"Dinamo","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"176","matchday":"36","hometeam":"Dinamo","awayteam":"Gorica","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"177","matchday":"36","hometeam":"Varazdin","awayteam":"Lokomotiva","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"178","matchday":"36","hometeam":"Osijek","awayteam":"Rijeka","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"179","matchday":"36","hometeam":"Hajduk","awayteam":"Sibenik","homegoals":"","awaygoals":""})
            file.matchdays.push({"id":"180","matchday":"36","hometeam":"Istra","awayteam":"Slaven","homegoals":"","awaygoals":""})

            const json = JSON.stringify(file);

            fs.writeFile('matchdays.json', json, 'utf8', function(err){
                 if(err){ 
                       console.log(err); 
                 } else {
                       console.log('added!')
                 }});
      }
});
