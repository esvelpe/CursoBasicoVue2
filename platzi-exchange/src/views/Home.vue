<template>
  <div>
    <px-assets-table :assets="assets" />
  </div>
</template>

<script>
import PxAssetsTable from "@/components/PxAssetsTable";
import api from "@/api";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",

  components: { PxAssetsTable },

  data() {
    return {
      assets: [],
    };
  },

  created() {
    api.getAssets().then((assets) => (this.assets = assets));
  },
};
</script>
