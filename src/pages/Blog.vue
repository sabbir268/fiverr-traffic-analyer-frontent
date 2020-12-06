<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg6.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">Traffic analyzer</h1>
          <div class="text-center">
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-google-plus"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="row m-0 mt-5">
      <div class="col-md-8">
        <div
          class="row shadow bg-white mx-1 my-3 rounded"
          v-for="i in 5"
          :key="i"
        >
          <div class="col-md-4 col-sm-4 p-0">
            <img
              class="rounded w-100"
              :src="`https://picsum.photos/id/${i}/400/250`"
              alt="Card image cap"
            />
          </div>
          <div class="col-md-6 col-sm-4 my-auto p-0">
            <h5 class="px-3 pt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing
            </h5>
            <p class="px-3 pt-0">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro et
              eius, ullam expedita deserunt aspernatur, dolores quod, in
              voluptates quia officiis quasi
              <router-link to="/details">Read More..</router-link>
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <h2>Tags</h2>
        <ul class="list-group list-group-flush">
          <li class="list-group-item px-0 d-flex justify-content-between">
            <span>Cras justo odio</span>
            <i class="fa fa-arrow-right"></i>
          </li>
          <li class="list-group-item px-0 d-flex justify-content-between">
            <span>Dapibus ac facilisis in</span>
            <i class="fa fa-arrow-right"></i>
          </li>
          <li class="list-group-item px-0 d-flex justify-content-between">
            <span>Dolor sit amet consectetur</span>
            <i class="fa fa-arrow-right"></i>
          </li>
          <li class="list-group-item px-0 d-flex justify-content-between">
            <span>Expedita deserunt aspernatur, dolores</span>
            <i class="fa fa-arrow-right"></i>
          </li>
          <li class="list-group-item px-0 d-flex justify-content-between">
            <span>Aspernatur, dolores quod,</span>
            <i class="fa fa-arrow-right"></i>
          </li>
          <li class="list-group-item px-0 d-flex justify-content-between">
            <span>Voluptates quia officiis quasi</span>
            <i class="fa fa-arrow-right"></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from "@/components";
export default {
  name: "landing",
  bodyClass: "landing-page",
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  data() {
    return {
      form: {
        firstName: "",
        email: "",
        message: "",
      },
    };
  },
};
</script>
<style></style>
