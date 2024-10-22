
1.Transactions Table:

    * Dropdown to select months (January to December), default to March.
    * Search input to filter transactions by title, description, or price.
    * Pagination (Next/Previous buttons) to load data for different pages.
    * Use axios to call /api/transactions and display the data in a table.

2. Statistics Display:

    * Call the statistics API /api/statistics and display total sale amount, sold items, and not sold items for the selected month.

3.Bar Chart:

    * Use Recharts or Chart.js to display a bar chart for price ranges and item counts. Fetch data from /api/bar-chart.
4.Pie Chart:

    * Use Recharts or Chart.js to display a pie chart for categories and the number of items. Fetch data from /api/pie-chart.