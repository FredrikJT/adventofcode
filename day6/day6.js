/*jshint esversion: 6 */

const inputArray = require('./day6_input');
const SolarSystem = require('./day6SolarSystem');
let planets = [];
const ss = new SolarSystem(planets);

// Extract all unique planets and put in list
inputArray.forEach( element => {
    let centerPlanet = ss.getOrbitCenterPlanet(element);
    let orbitingPlanet = ss.getOrbitingPlanet(element);

    ss.addPlanet(centerPlanet);
    ss.addPlanet(orbitingPlanet);

    console.log('The planet ' + orbitingPlanet + ' is orbiting ' + centerPlanet);
});

//Create graph
// TRANSISTIVE CLOSURE size





// create a hashmap for each input value. Key = orbiting planet, value= planet being orbited

// Loop through each hashmap whose key is never used as a value in any of the other hashmaps. This finds the planets at the edges of the planet system.
    // Look at the value of the hashkey, if a hashkey exist which has
    // a key equal to the value of the current hashkey, count +1.
    //Do this recursively until COM is found.




console.log('input' + inputArray);
console.log('planets' + planets);

