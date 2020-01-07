/*jshint esversion: 6 */

class SolarSystem {
    constructor(
        planets = []
    ) {
        this.planets = planets;
    }
    
    addPlanet(planetToAdd) {
        if (this.checkPlanetExist(planetToAdd)) {
            return;
        }

        console.log('Adding new planet ' + planetToAdd);
        this.planets.push(planetToAdd);
    }
    
    checkPlanetExist(planetToAdd) {
        let result = this.planets.indexOf(planetToAdd);
        if (result === -1) {
            return false;
        } else {
            return true;
        }
    }

    getOrbitingPlanet(element) {
        let result = element.match(/\w+$/); // Match end of string
        return result[0];
    }

    getOrbitCenterPlanet(element) {
        let result = element.match(/([A-Z0-9])\w*/);
        return result[0];
    }
}

module.exports = SolarSystem;