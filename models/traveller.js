const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function () {
  return this.journeys.map(journey => journey.startLocation);

  // return this.journeys.map((journey => {
  //   return journey.startLocation}))

  // return this.journeys.map(function(journey){
  //   return journey.startLocation});
}

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(function(journey){
    return journey.endLocation});
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(function(journey){
    return journey.transport === transport;})

  // return this.journeys.filter(journey => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance >= minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  // return this.journeys.reduce((total, journey) => {
  //   return total += journey.distance
  // }, 0)

return this.journeys.reduce((total, journey) => total += journey.distance, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
const typeOfTransport = this.journeys.map(journey => journey.transport);
// console.log(typeOfTransport);
// const uniqueTransport = Array.from(new Set(typeOfTransport));
// console.log(uniqueTransport);
// return uniqueTransport;
// return Array.from(new Set(typeOfTransport));
return [...new Set(typeOfTransport)];
};


module.exports = Traveller;
