function randomDelay() {
  return Math.floor(Math.random() * 1500) + 500;
}

function getPlanetData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve({
          name: "Jupiter",
          size: "139,820 km diameter",
          distance: "778 million km from Sun",
        });
      } else {
        reject("Failed to fetch planet data");
      }
    }, randomDelay());
  });
}

function getSatelliteData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve({
          moons: 79,
          mainMoons: ["Io", "Europa", "Ganymede", "Callisto"],
        });
      } else {
        reject("Failed to fetch satellite data");
      }
    }, randomDelay());
  });
}

function getExplorationData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve({
          missions: ["Pioneer 10", "Voyager 1", "Juno"],
          ongoingMission: "Juno",
        });
      } else {
        reject("Failed to fetch exploration data");
      }
    }, randomDelay());
  });
}

getPlanetData()
  .then((data) => console.log("Planet Data:", data))
  .catch((err) => console.error(err));

getSatelliteData()
  .then((data) => console.log("Satellite Data:", data))
  .catch((err) => console.error(err));

getExplorationData()
  .then((data) => console.log("Exploration Data:", data))
  .catch((err) => console.error(err));

Promise.all([getPlanetData(), getSatelliteData(), getExplorationData()])
  .then(([planet, satellite, exploration]) => {
    const report = { ...planet, ...satellite, ...exploration };
    console.log("Combined Planet Report:");
    console.log(report);
  })
  .catch((error) => {
    console.error("Planet Report failed:");
    console.error(error);
  });