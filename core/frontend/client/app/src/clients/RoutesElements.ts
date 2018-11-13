export default class RoutesElements {

    async Elements(){
        var response = await fetch("http://localhost:3000/elements");
        if(response.ok){
            var json = await response.json();
            return json as string;
        }
        return null;
    }

    async FindElement(elementId: string){
        var response = await fetch("http://localhost:3000/findElement?id="+ elementId);
        if(response.ok){
            var json = await response.json();
            return json as string;
        }
        return null;
    }

    async CreateElement(element: element){
        var response = await fetch("http://localhost:3000/createElement", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(element)
        });
        if(response.ok){
            var json = await response.json();
            return json as element;
        }
    }

    async EditElement(id:string, element: element ){
        var response = await fetch("http://localhost:3000/updateElement?id="+ id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(element)
        });
        if(response.ok){
            var json = await response.json();
            return json as element;
        }
    }

    async DeleteElement(id:string){
        var response = await fetch("http://localhost:3000/deleteElement?id="+ id, {
            method: "DELETE"
        });
        if(response.ok){
            var json = await response.json();
            return json as string;
        }
    }




}