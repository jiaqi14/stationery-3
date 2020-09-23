import { Bubble } from "vue-chartjs";
import database from "../firebase.js";

export default {
  extends: Bubble,
  data: function() {
    return {
      datacollection: {
        labels: [],
        datasets: [],
      },
      options: {
        legend: { display: true, position: "left" },
        title: {
          display: true, position: "left",
          text: "GDP, happiness and population",
        },
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Happiness",
              },
            },
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "GDP (PPP)",
              },
            },
          ],
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  methods: {
    fetchItems: function() {
      database
        .collection("bubble")
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            const { labels, bgcolor, color, label, r, x, y } = doc.data();
            const item = {
              label: label,
              backgroundColor: bgcolor,
              borderColor: color,
              data: [{ x, y, r }],
            };
            this.datacollection.labels.push(labels);
            this.datacollection.datasets.push(item);
          });
          this.renderChart(this.datacollection, this.options);
        });
    },
  },
  created() {
    this.fetchItems();
  },
};
