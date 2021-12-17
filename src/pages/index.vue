<template>
  <div class="content_header">
    <div
      class="item"
      v-for="data in datas"
      :key="data.key"
      :style="{ backgroundImage: data.bgColor }"
    >
      <div class="label">{{ data.label }}</div>
      <div class="count">{{ data.count }}</div>
    </div>
  </div>
  <div class="content_chart">
    <div class="project_total">
      <div class="label">Project Total</div>
      <div id="projectTotal" class="chart"></div>
    </div>
    <div class="echarts">
      <div class="db_chart">
        <div class="label">DB Total</div>
        <div id="dbTotal" class="chart"></div>
      </div>
      <div class="table_chart">
        <div class="label">Table Total</div>
        <div id="tableTotal" class="chart"></div>
      </div>
      <!-- <div class="interface_chart">
        <div class="label">Interface Total</div>
        <div id="interfaceTotal" class="chart"></div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { getAllData } from "@/service";
import { Chart } from "@antv/g2";

export default {
  data() {
    return {
      datas: [
        {
          key: "projectTotal",
          label: "Project Total",
          count: 0,
          bgColor: "linear-gradient(90deg, #80beaf, #80beaf)",
        },
        {
          key: "dbPotal",
          label: "DB Total",
          count: 0,
          bgColor: "linear-gradient(90deg, #80beaf, #80beaf)",
        },
        {
          key: "tableTotal",
          label: "Table Total",
          count: 0,
          bgColor: "linear-gradient(90deg, #f5b994, #f5b994)",
        },
        {
          key: "interfaceTotal",
          label: "Interface Total",
          count: 0,
          bgColor: "linear-gradient(90deg, #ee9c6c, #ee9c6c)",
        },
      ],
      chart: {
        projectTotal: "",
        dbPotal: "",
        tableTotal: "",
        interfaceTotal: "",
      },
    };
  },
  methods: {
    getDatas() {
      getAllData().then((res) => {
        console.log(res);
        const { status, message, data } = res;
        if (status === 0) {
          this.datas = this.datas.map((item) => {
            return { ...item, count: data[item.key].toLocaleString() };
          });
        } else {
          console.log(message);
        }
      });
    },
    initL(value) {
      const data = [
        { genre: "Sports", sold: 275 },
        { genre: "Strategy", sold: 115 },
        { genre: "Action", sold: 120 },
        { genre: "Shooter", sold: 350 },
        { genre: "Other", sold: 150 },
      ];
      this.chart[value] = new Chart({
        container: value,
        autoFit: true,
        height: 500,
      });
      // Step 2: 载入数据源
      this.chart[value].source(data);
      this.chart[value].scale({
        sold: {
          nice: true,
        },
      });
      // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
      this.chart[value].interval().position("genre*sold").color("genre");
      // Step 4: 渲染图表
      this.chart[value].render();
      const e = document.createEvent("Event");
      e.initEvent("resize", true, true);
      window.dispatchEvent(e);
    },
    initG(value) {
      var data = [
        {
          year: "2001",
          population: 41.8,
        },
        {
          year: "2002",
          population: 38,
        },
        {
          year: "2003",
          population: 33.7,
        },
        {
          year: "2004",
          population: 30.7,
        },
        {
          year: "2005",
          population: 25.8,
        },
        {
          year: "2006",
          population: 31.7,
        },
        {
          year: "2007",
          population: 33,
        },
        {
          year: "2008",
          population: 46,
        },
        {
          year: "2009",
          population: 38.3,
        },
        {
          year: "2010",
          population: 28,
        },
        {
          year: "2011",
          population: 42.5,
        },
        {
          year: "2012",
          population: 30.3,
        },
      ];

      this.chart[value] = new Chart({
        container: value,
        autoFit: true,
        height: 200,
      });
      this.chart[value].source(data);
      this.chart[value].coord("polar");
      this.chart[value].legend({
        position: "right",
        offsetY: -130,
        offsetX: -140,
      });
      this.chart[value].axis(false);
      this.chart[value].interval().position("year*population").style({
        lineWidth: 1,
        stroke: "#fff",
      });
      this.chart[value].render();
    },
  },
  mounted() {
    this.getDatas();
    this.initL("projectTotal");
    this.initG("dbTotal");
    this.initG("tableTotal");
  },
};
</script>

<style lang="less" scoped>
.content_header {
  width: 100%;
  display: flex;
  padding-bottom: 40px;
  .item {
    flex: 1;
    display: inline-block;
    margin: 0 15px;
    color: #fff;
    border-radius: 15px;
    padding: 15px;
    height: 150px;
    min-width: 200px;
    font-size: 24px;
    box-shadow: 10px 10px 10px #ddd;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .item:first-child {
    margin-left: 0;
  }
  .item:last-child {
    margin-right: 0;
  }
}
.content_chart {
  width: 100%;
  min-height: 10px;
  display: flex;
  font-size: 18px;
  font-weight: bold;
  .project_total {
    flex: 1;
    padding: 20px;
    box-shadow: 0 0 10px #888;
    border-radius: 10px;
    .label {
      margin: 0 0 40px;
    }
  }
  .echarts {
    width: 30%;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    justify-content: space-between;
    > div {
      padding: 20px;
      box-shadow: 0 0 10px #888;
      border-radius: 10px;
      flex: 1;
    }
    .table_chart {
        margin-top: 20px;
    }
  }
}
</style>