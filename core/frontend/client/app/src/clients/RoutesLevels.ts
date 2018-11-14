export default class RoutesLevels {

    async Levels(){
        var response = await fetch("http://localhost:3000/levels");
        if(response.ok){
            var json = await response.json();
            return json as string;
        }
        return null;
    }

    async CreateLevel(level: level){
        var response = await fetch("http://localhost:3000/createLevel", {
        method: "POST",
        headers:{
            "Content-Type": "applicaction/json"
        },
        body: JSON.stringify(level)
        });
        if(response.ok){
           var json = await response.json();
           return json as level;
        }
    }

    async FindLevel(levelID: string){
        var response = await fetch("http://localhost:3000/findLevel?id="+ levelID);
        if(response.ok){
            var json = await response.json();
            return json as string;
        }
        return null;
    }

    async UpdateLevel(id:string, level:level){
        var response = await fetch("http://localhost:3000/updateLevel?id="+id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(level)
        });
        if(response.ok){
            var json = await response.json();
            return json as level;
        }
    }

    async DeleteLevel(id: string){
        var response = await fetch("http://localhost:3000/deleteLevel?id="+ id, {
            method: "DELETE"
        });
        if(response.ok){
            var json = await response.json();
            return json as string;
        }
    }
}