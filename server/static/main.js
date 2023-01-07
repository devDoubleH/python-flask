const table_id = document.getElementById("table_id");
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

let DATA = ["Ismoil", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

let table = (data) => `
    <table class="min-w-full">
        <thead class="bg-white border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                NAME
              </th>
               <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                RATING
              </th>
               <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                SHOOT
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                PAS
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                DRIB
              </th>
               <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                DEX
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                LOW
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                AER
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                DEFEN
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                GK1
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                GK2
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                GK3
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                MAX
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                BOOST
              </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                ${data.map((item) => {
                  console.log(item);
                  return `
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        ${item}
                    </td>
                    `;
                })}
            </tr>
        </tbody>
    </table>
`;
searchButton.addEventListener("click", async () => {
  const result = await axios.post("/search", {
    name: searchInput.value,
  });

  if (result.data.length > 0) {
    DATA = result.data;

    let html = table(DATA);

    table_id.innerHTML = html;
  }
});
