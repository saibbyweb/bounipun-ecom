<template>
  <div class="dashboard center">
    <!-- pages cards -->
    <div class="pages center" style="height:20vh;">
      <!-- <div class="card page center-col" v-for="(card, index) in cards" :key="index">
            <h2 class="name"> {{ card.name }} </h2>
            <span class="desc"> {{ card.desc }} </span>
        </div> -->
      <p>
        You are now authorized to use this dashboard.
      </p>
    </div>

    <!-- stats cards -->
    <!-- <div class="stats center">
        <div class="stat card center-col" v-for="(stat, index) in stats" :key="index">
            <h2 class="value"> {{ stat.value }} </h2>
            <span class="name"> {{ stat.name }} </span>
        </div>
    </div> -->
  </div>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      cards: [
        {
          name: "Products",
          path: "/products",
          desc: "Manage Bounipun inventory",
          path: "/admin-panel/products",
        },
        {
          name: "Collections",
          path: "/",
          desc: "Manage techniques",
        },
        {
          name: "Categories",
          path: "/categories",
          desc: "Add or remove list of categories",
        },
        {
          name: "Fabrics",
          path: "/fabrics",
          desc: "Manage list and details of various fabrics",
        },
        {
          name: "Colors",
          path: "/colors",
          desc: "Manage bounipun colors",
        },
        {
          name: "Payments",
          path: "/payments",
          desc: "Track payments",
        },
        {
          name: "SMS",
          path: "/sms",
          desc: "Track SMS Usage",
        },
        {
          name: "Orders",
          path: "/orders",
          desc: "Manage orders",
        },
        {
          name: "Messages",
          path: "/orders",
          desc: "Manage messages",
        },
        {
          name: "Coupons",
          path: "/coupon",
          desc: "Manage coupons",
        },
      ],
      stats: [
        {
          name: "Total Orders",
          value: 102,
        },
        {
          name: "Total Revenue",
          value: "599202 INR",
        },
        {
          name: "SMS Usage",
          value: 570,
        },
        {
          name: "Total Products",
          value: 75,
        },
        {
          name: "Total Collections",
          value: 5,
        },
        {
          name: "Total Categories",
          value: 3,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  .pages {
    width: 50%;
    flex-wrap: wrap;
  }

  .stats {
    width: 50%;
    flex-wrap: wrap;
  }

  .card {
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .page {
    padding: 10px;

    width: 20%;
    height: 100px;
    margin: 10px;

    .name {
      font-family: $font_2;
      text-transform: uppercase;
      color: $dark_gray;
      transition: all 0.3s ease-in-out;
      font-size: 17px;
    }

    .desc {
      font-family: $font_1;
      text-align: center;
      font-size: 11px;
      transition: all 0.1s ease-in-out;
    }

    &:hover {
      background-color: #492727ca;
      border-radius: 4px;
      width: 21%;

      .name {
        color: white;
      }

      .desc {
        color: white;
      }
    }
  }

  .stat {
    padding: 10px;
    width: 20%;
    height: 100px;
    margin: 10px;
    border-radius: 5px;

    .value {
      font-size: 18px;
    }
    .name {
      text-align: center;
      font-size: 12px;
    }
  }
}
</style>
