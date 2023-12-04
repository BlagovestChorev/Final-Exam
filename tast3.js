function zooFeeding(input) {
    let animals = {};
    let areas = {};
  
    for (const line of input) {
      if (line === 'EndDay') {
        break;
      }
  
      let [command, params] = line.split(': ');
      let [animalName, foodQuantity, area] = params.split('-').map(x => isNaN(x) ? x : Number(x));
  
      if (command === 'Add') {
        if (!animals.hasOwnProperty(animalName)) {
          animals[animalName] = { foodLimit: foodQuantity, area };
          if (!areas.hasOwnProperty(area)) {
            areas[area] = 0;
          }
          areas[area]++;
        } else {
          animals[animalName].foodLimit += foodQuantity;
        }
      } else if (command === 'Feed' && animals.hasOwnProperty(animalName)) {
        animals[animalName].foodLimit -= foodQuantity;
  
        if (animals[animalName].foodLimit <= 0) {
          console.log(`${animalName} was successfully fed`);
          areas[animals[animalName].area]--;
          delete animals[animalName];
        }
      }
    }
  
    console.log('Animals:');
    Object.entries(animals).forEach(([name, { foodLimit }]) => console.log(` ${name} -> ${foodLimit}g`));
  
    console.log('Areas with hungry animals:');
    Object.entries(areas)
      .filter(([area, hungryAnimals]) => hungryAnimals > 0)
      .forEach(([area, hungryAnimals]) => console.log(` ${area}: ${hungryAnimals}`));
  }
  
  // Example usage:
  let input = [
    "Add: Jamie-600-WaterfallArea",
    "Add: Maya-6570-WaterfallArea",
    "Add: Adam-4500-ByTheCreek",
    "Add: Bobbie-6570-WaterfallArea",
    "Feed: Jamie-2000",
    "Feed: Adam-2000",
    "Feed: Adam-2500",
    "EndDay"
  ];
  
  zooFeeding(input);