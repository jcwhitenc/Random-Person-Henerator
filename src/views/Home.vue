<template>
  <div class="home">
    <h1 style="margin-bottom: 0px;"> How To Use the Website </h1>
    <div class="body">
      <h2> Person Filter </h2>
      <div class="description">
        <p>The <router-link to="/filter">Person Filter</router-link> is where
        </p>
        <img src="../assets/filter_screenshot.png" style="height: 500px;" />
      </div>
      <h2> Person Creator </h2>
      <div class="description">
        <img src="../assets/person_list_screenshot.png" style=" height: 500px;" />
        <p> The <router-link to="/People">People</router-link> Page allows you to generate a picture and name of somebody that doesn't actually exist. The picture is generated using AI and downloaded using the
          <a href="https://generated.photos/?ref=producthunt">100,000 faces</a> api. The faces are of a diverse selection of ethnicty and age. To create a new person, click the "+" on the last box. By selecting
          the <b>Male</b> or <b>Female</b>
          buttons, the new person will have the selected gender reflected in the name and picture.</p>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
  h1 {
    font-family: 'Questrial', sans-serif;
  }

  .body {
    padding: 75px;
    padding-top: 0;
    justify-content: center;
  }

  .description {
    display: flex;
    orientation: row;
    justify-content: space-around;
    margin: 50px;
    width: 1150px;
  }

  .description p {
    padding: 200px 60px;
    font-family: 'Questrial', sans-serif;
  }
</style>