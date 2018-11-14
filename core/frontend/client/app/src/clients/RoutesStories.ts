export default class RoutesStories {

    async Stories(){
        var response = await fetch("http://localhost:3000/stories");
        if(response.ok){
            var json = await response.json();
            return json as string;
        }
        return null;
    }

    async FindStory(storyId: string){
        var response = await fetch("http://localhost:3000/findStory?id="+ storyId);
        if(response.ok){
            var json = await response.json();
            return json as string;
        }
        return null;
    }

    async CreateStory(story: story){ //element
        var response = await fetch("http://localhost:3000/createStory", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(story)
        });
        if(response.ok){
            var json = await response.json();
            return json as story;
        }
    }

    async UpdateStory(id:string, story: story){
        var response = await fetch("http://localhost:3000/updateStory?id="+ id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(story)
        });
        if(response.ok){
            var json = await response.json();
            return json as story;
        }
    }

    async DeleteStory(id:string){
        var response = await fetch("http://localhost:3000/deleteStory?id="+ id, {
            method: "DELETE"
        });
        if(response.ok){
            var json = await response.json();
            return json as string;
        }
    }
}