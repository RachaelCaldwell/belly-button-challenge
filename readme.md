# belly-button-challenge

## Description
The Module 14 Challenge uses JavaScript to build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels. The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Dashboard Features

**Drop Down Menu**<br>
*Allows uses to select the Test Subject ID No. with the drop down menu to toggle the visualizations (demographic info, bar and bubble charts)* <br>
![image](https://github.com/RachaelCaldwell/belly-button-challenge/blob/main/images/dropdown.png)

**Demographic Info Panel**<br>
* *Displays the demographic information of the chosen test subject*<br>
* *Displays each key-value pair from the metadata JSON object*<br>
![image](https://github.com/RachaelCaldwell/belly-button-challenge/blob/main/images/demo_info.png)

**Horizontal Bar Graph**<br>
*Bar chart is generated when a test subject is selected on the drop menu*<br>
* *Displays the top 10 OTUs found in the selected test subject, where the `sample_values` are presented as the values for the bar chart and the `otu_ids` presented as the labels for the bar chart*<br>
* *When users hover over a bar, the `otu_labels` are presented as the hovertext for the chart*<br>
![image](https://github.com/RachaelCaldwell/belly-button-challenge/blob/main/images/bar_chart.png)

**Bubble Chart**<br>
*A bubble chart is generated when a test subject is selected on the drop menu*<br>
* *Each sample is displayed as a bubble, where the larger the sample value, the larger the bubble size*<br>
* *Displays the x values as the `otu_ids`, the y values as the `sample_values`*<br>
* *Displays the colors of the bubbles based on `otu_ids`, where the hovertext is the `otu_labels`*<br>
![image]
