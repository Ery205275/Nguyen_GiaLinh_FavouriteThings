function getData(targetURL, callback) {
    console.log(`it's aliiive!`);

    //use the Fetch API to go and get out data
    fetch(targetURL)//go retrieve the data from this file or resource
    //parse the JSON object -> turn into a plain js object
    .then(res => res.json()) // res means response -> data that we retrieved
    //.res.json() is a buildt-in methid or function that turns the JSON into a plain object
    .then(data => {
        console.log(data);
        //build out the team content on the page
        //callback is a ref to buildTeam function in the main js file
        callback(data);
    })
    //if anything breaks anywhere along the line, catch the error event here and report it to the developer
    .catch(error => console.log(error));
}
export { getData }