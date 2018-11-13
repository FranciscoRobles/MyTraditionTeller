export default class RoutesLevels {

    async Levels(){
        var response = await fetch("http://localhost:3000/levels");
        if(response.ok){
            var json = await response.json();
            return json as string;
        }
        return null;
    }

    async CreateLevel(){
        var response = await fetch("http://localhost:3000/createLevel");
        if(response.ok){
            var json = await response.json();
            return json as string;
        }
        return null;
    }

    async FindLevel(){
        var response = await fetch("http://localhost:3000/findLevel");
        if(response.ok){
            var json = await response.json();
            return json as string;
        }
        return null;
    }

    async UpdateLevel(){
        var response = await fetch("http://localhost:3000/updateLevel");
        if(response.ok){
            var json = await response.json();
            return json as string;
        }
        return null;
    }

    async DeleteLevel(){
        var response = await fetch("http://localhost:3000/deleteLevel");
        if(response.ok){
            var json = await response.json();
            return json as string;
        }
        return null;
    }
}