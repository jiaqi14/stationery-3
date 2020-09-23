import { Bar } from "vue-chartjs";
import database from "../firebase.js";


export default {
  extends: Bar,
  data: function() {
    return {
      datacollection: {
        labels: [],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: [],
            data: [],
          },
        ],
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: "Predicted world population (millions) in 2050",
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  methods: {
    fetchItems: function() {
      database
        .collection("countries")
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            this.datacollection.labels.push(doc.data().country);
            this.datacollection.datasets[0].backgroundColor.push(
              doc.data().color
            );
            this.datacollection.datasets[0].data.push(doc.data().data);
          });
          this.renderChart(this.datacollection, this.options);
        });
    },
  },
  created() {
    this.fetchItems();
  },
};
