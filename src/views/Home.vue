<template>
  <div class="home">
    <div>
      <h1 style="margin-bottom: 0px;"> How To Use the Website </h1>
      <hr style="width: 100%">
    </div>
    <h2> Person Creator </h2>
    <div class="description">
      <img src="../assets/person_list_screenshot.png" style=" height: 500px;" />
      <p> The <router-link to="/People">People</router-link> Page allows you to generate a picture and name of somebody that doesn't actually exist. The picture is generated using AI and downloaded using the
        <a href="https://generated.photos/?ref=producthunt">100,000 faces</a> api. The faces are of a diverse selection of ethnicty and age. To create a new person, click the "+" on the last box. By selecting
        the <b>Male</b> or <b>Female</b> buttons, the new person will have the selected gender reflected in the name and picture. You can click the X in the corner of a person to remove them or click the
        "Clear All" button to remove all people and start over. </p>
    </div>
    <h2> Person Filter </h2>
    <div class="description" style="width: 1000px;">
      <p>The <router-link to="/filter">Person Filter</router-link> is where you can select which names will be used in the random generation process. Each table (Male, Female, and Surname)
        has a column of names that will not be used and a column of names that will be used. You can select names by clicking on them. By pressing the arrows in between the columns, you can
        move the selected names from one side to the other. You can also use the "Deselect All" and "Select All" buttons for the columns.
      </p>
      <img src="../assets/filter_screenshot.png" style="height: 600px;" />
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
  h1,
  h2 {
    font-family: 'Questrial', sans-serif;
  }

  h1 {
    font-size: 45px;
  }

  h2 {
    font-size: 35px;
  }


  .home {
    padding: 75px;
    padding-top: 0;
    display: flex;
    flex-direction: column;
  }

  .description {
    display: flex;
    orientation: row;
    justify-content: space-around;
    margin: 25px;
    width: 1150px;
    align-self: center;
  }

  .description p {
    padding: 100px 60px;
    font-family: 'Questrial', sans-serif;
    line-height: 1.5;

  }
</style>