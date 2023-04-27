
const mydata = {"Introduction to the Fjords":[["Welcome to the fjords\n(Viewed)","https://www.linkedin.com/learning/travel-photography-fjords-of-new-zealand/welcome-to-the-fjords"],["Reviewing the gear used on the fjord shoot\n(Viewed)","https://www.linkedin.com/learning/travel-photography-fjords-of-new-zealand/reviewing-the-gear-used-on-the-fjord-shoot"]],"1. Shooting at Waters Edge at Low Tide":[["Setting up the first shots of the fjords\n(In progress)","https://www.linkedin.com/learning/travel-photography-fjords-of-new-zealand/setting-up-the-first-shots-of-the-fjords"],["Shooting the details at low tide in the fjords\n(In progress)","https://www.linkedin.com/learning/travel-photography-fjords-of-new-zealand/shooting-the-details-at-low-tide-in-the-fjords"],["Post-processing work on a fjord photo\n(In progress)","https://www.linkedin.com/learning/travel-photography-fjords-of-new-zealand/post-processing-work-on-a-fjord-photo"]],"2. Working the Shots from a Boat":[["Introducing how to shoot from a boat\n(Viewed)","https://www.linkedin.com/learning/travel-photography-fjords-of-new-zealand/introducing-how-to-shoot-from-a-boat"],["Shooting a waterfall from a boat\n(In progress)","https://www.linkedin.com/learning/travel-photography-fjords-of-new-zealand/shooting-a-waterfall-from-a-boat"],["Shooting a wide-angle shot from a boat in the fjords\n(Viewed)","https://www.linkedin.com/learning/travel-photography-fjords-of-new-zealand/shooting-a-wide-angle-shot-from-a-boat-in-the-fjords"],["Shooting a waterfall from a boat without a tripod\n(In progress)","https://www.linkedin.com/learning/travel-photography-fjords-of-new-zealand/shooting-a-waterfall-from-a-boat-without-a-tripod"],["Documenting the fur seals in Milford Sound\n(In progress)","https://www.linkedin.com/learning/travel-photography-fjords-of-new-zealand/documenting-the-fur-seals-in-milford-sound"],["Shooting a waterfall up close on a boat\n(In progress)","https://www.linkedin.com/learning/travel-photography-fjords-of-new-zealand/shooting-a-waterfall-up-close-on-a-boat"],["Wrapping up the boat shoot with a wide angle of Mitre Peak\n(In progress)","https://www.linkedin.com/learning/travel-photography-fjords-of-new-zealand/wrapping-up-the-boat-shoot-with-a-wide-angle-of-mitre-peak"],["Post-processing a waterfall shot from the boat trip\n(In progress)","https://www.linkedin.com/learning/travel-photography-fjords-of-new-zealand/post-processing-a-waterfall-shot-from-the-boat-trip"],["Post-processing on a panorama shot from a boat\n(In progress)","https://www.linkedin.com/learning/travel-photography-fjords-of-new-zealand/post-processing-on-a-panorama-shot-from-a-boat"]],"3. Capturing Details in the Fjords":[["Shooting foam on the water using 10-stop ND filter\n(In progress)","https://www.linkedin.com/learning/travel-photography-fjords-of-new-zealand/shooting-foam-on-the-water-using-10-stop-nd-filter"],["Working the shot with the 10-stop ND filter on water\n(In progress)","https://www.linkedin.com/learning/travel-photography-fjords-of-new-zealand/working-the-shot-with-the-10-stop-nd-filter-on-water"],["Shooting a misty mountain scene in the fjords\n(In progress)","https://www.linkedin.com/learning/travel-photography-fjords-of-new-zealand/shooting-a-misty-mountain-scene-in-the-fjords"],["Isolating a tree in a lush landscape shot\n(In progress)","https://www.linkedin.com/learning/travel-photography-fjords-of-new-zealand/isolating-a-tree-in-a-lush-landscape-shot"],["Post-processing on the foamy water photo\n(In progress)","https://www.linkedin.com/learning/travel-photography-fjords-of-new-zealand/post-processing-on-the-foamy-water-photo"],["Post-processing on the isolated tree shot\n(In progress)","https://www.linkedin.com/learning/travel-photography-fjords-of-new-zealand/post-processing-on-the-isolated-tree-shot"]],"4. Final Images from the Shoot":[["Reviewing the final selects from the fjord shoot\n(In progress)","https://www.linkedin.com/learning/travel-photography-fjords-of-new-zealand/reviewing-the-final-selects-from-the-fjord-shoot"]]}

function createTables(data) {
  const tableContainer = document.createElement("div");
  tableContainer.style.display = "flex";
  tableContainer.style.flexWrap = "wrap";
  document.body.appendChild(tableContainer);

  let tableCount = 0;
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const table = document.createElement("table");
      const header = document.createElement("th");
      header.textContent = '🍅' + key;
      const headerRow = document.createElement("tr");
      headerRow.appendChild(header);
      table.appendChild(headerRow);

      for (const [k, v] of data[key]) {
        const row = document.createElement("tr");
        const cell1 = document.createElement("td");
        const cell2 = document.createElement("td");
        const link = document.createElement("a");
        link.href = v;
        link.textContent = '🌻' + k;
        cell1.appendChild(link);
        row.appendChild(cell1);
        table.appendChild(row);
      }

      tableContainer.appendChild(table);
      tableCount++;

      if (tableCount % 4 === 0) {
        const breakTag = document.createElement("br");
        tableContainer.appendChild(breakTag);
      }
    }
  }
}

createTables(mydata);





