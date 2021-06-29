<template>
  <div class="recommend">
    <div class="slider-wrapper">
      <div-slider-content>
        <slider v-if="!sliders.length" :sliders="sliders"></slider>
      </div-slider-content>
    </div>
  </div>
</template>

<script>
import { getRecommend } from "@/service/recommendApi"
import Slider from '@/components/base/slide/slide'

export default {
  name: "recommend",
  components: {
    Slider
  },
  data() {
    return {
      sliders: [],
    }
  },
  async created() {
    const result = await getRecommend();
    this.sliders = result.sliders
  },
};
</script>

<style scoped></style>
