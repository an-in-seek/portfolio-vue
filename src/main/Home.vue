<template>
  <div>
    <div class="mt-4">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="2000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide
          caption="Community"
          text="안녕하세요~! 만나서 반가워요~!"
          img-src="https://picsum.photos/1024/480/?image=52"
        ></b-carousel-slide>
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
          <h1>Hello World!</h1>
        </b-carousel-slide>
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
          <h1>Hello World!!</h1>
        </b-carousel-slide>
      </b-carousel>
    </div>

    <div>
      <h4>Top and Bottom</h4>
      <b-card-group deck>
        <b-card
          img-src="https://placekitten.com/1000/300"
          img-alt="Card image"
          img-top
        >
          <b-card-text>
            Some quick example text to build on the card and make up the bulk of
            the card's content.
          </b-card-text>
        </b-card>

        <b-card
          img-src="https://placekitten.com/1000/300"
          img-alt="Card image"
          img-bottom
        >
          <b-card-text>
            Some quick example text to build on the card and make up the bulk of
            the card's content.
          </b-card-text>
        </b-card>
      </b-card-group>
    </div>
    <div class="mt-4">
      <h4>Left and Right (or Start and End)</h4>
      <b-card
        img-src="https://placekitten.com/300/300"
        img-alt="Card image"
        img-left
        class="mb-3"
      >
        <b-card-text>
          Some quick example text to build on the card and make up the bulk of
          the card's content.
        </b-card-text>
      </b-card>

      <b-card
        img-src="https://placekitten.com/300/300"
        img-alt="Card image"
        img-right
      >
        <b-card-text>
          Some quick example text to build on the card and make up the bulk of
          the card's content.
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      content: "",
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
