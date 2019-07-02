<template>
  <div class="videosContainer">
    <h1 style="color: #191153">Please choose the video you want to watch:</h1>
    <br/>
    <div class="card-deck" style="color: black">
      <div class="card">
        <video width="400" controls class="card-img-top">
          <source src="../static/abc.mp4" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
        <div class="card-body">
          <h5 class="card-title">ABC Video</h5>
          <p class="card-text">Dummy Description 1.</p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div class="card">
        <video width="400" controls class="card-img-top">
          <source src="../static/animals.mp4" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
        <div class="card-body">
          <h5 class="card-title">Animals sounds</h5>
          <p class="card-text">Dummy Description 2.</p>
          <p class="card-text">
            <small class="text-muted">Last updated 20 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "videoContent"
  }
</script>

<style scoped>

</style>
