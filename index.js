const processFroyoOrder = () => {
    const input = prompt("Enter your list of comma-separated froyo flavors:");
    if (input) {
        const flavorsArray = input.split(",").map(flavor => flavor.trim());
        const flavorCounts = {};

        flavorsArray.forEach(flavor => {
            if (!flavorCounts[flavor]) {
                flavorCounts[flavor] = 1;
            } else {
                flavorCounts[flavor]++;
            }
        });

        console.log("Flavor counts:");
        for (let flavor in flavorCounts) {
            console.log(`${flavor}: ${flavorCounts[flavor]}`);
        }
    } else {
        console.log("No flavors entered.");
    }
};

processFroyoOrder();
