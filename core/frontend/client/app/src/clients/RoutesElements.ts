export default class RoutesElements {

    async Elements(){
        var response = await fetch("http://localhost:3000/elements");
        if(response.ok){
            var json = await response.json();
            return json as string;
        }
        return null;
    }


}