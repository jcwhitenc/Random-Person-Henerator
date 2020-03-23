<template>
  <div class="root">
    <div class="header">
      <h1> People Generator </h1>
      <button @click="removeAll()" id="clear_all_but"> Clear All </button>
    </div>
    <div id="people_grid">
      <div v-for="(person,index) in people" :key="index" class="person_box">
        <div container>
          <div class="delete"><a @click="removePerson(index)"><img src="../assets/x.jpg" /></a></div>
          <img :src="person.imageSource" />
        </div>
        <p> {{person.firstName}} {{person.lastName}}</p>
      </div>
      <div id="new_person_block">
        <a @click="addPerson()"><img src="../assets/Plus.png" /></a>
        <div id="gender_buttons">
          <div class="radio">
            <input type="radio" id="male_radio_button" name="gender" value="male" checked="true">
            <label for="male">Male</label><br>
          </div>
          <div class="radio">
            <input type="radio" id="female_radio_button" name="gender" value="female">
            <label for="female">Female</label><br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "People_Generator",
    methods: {
      async addPerson() {
        //get the first name
        let firstNameList = this.addMale() ? this.$root.$data.m_names.active : this.$root.$data.f_names.active;
        if (firstNameList.length === 0) firstNameList = this.addMale() ? this.$root.$data.m_names.all : this.$root.$data.f_names.all;
        let firstName = this.getRandomItem(firstNameList).name;
        //get the last name
        let lastName;
        if (this.$root.$data.s_names.active.length === 0) {
          lastName = this.getRandomItem(this.$root.$data.s_names.all).name;
        } else {
          lastName = this.getRandomItem(this.$root.$data.s_names.active).name;
        }
        if (firstNameList === null) this.addMale() ? this.$root.$data.m_names.all : this.$root.$data.f_names.all;
        let imageURL = this.getRandomItem(this.addMale() ? this.$root.images.maleImages : this.$root.images.femaleImages).urls[3]['256'];
        let newPerson = {
          'firstName': firstName,
          'lastName': lastName,
          'imageSource': imageURL
        };
        this.$root.$data.people = this.$root.$data.people.concat(newPerson);
        console.log()
      },
      getRandomItem(list) {
        let index = Math.floor(Math.random() * Math.floor(list.length));
        return list[index];
      },
      addMale() {
        return !document.getElementById('female_radio_button').checked;
      },
      removePerson(index) {
        this.$root.$data.people.splice(index, 1);
      },
      removeAll() {
        this.$root.$data.people = [];
      }
    },
    computed: {
      people() {
        return this.$root.$data.people;
      }
    }
  }
</script>
<style scoped>
  template {
    background: red;
  }

  #people_grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .person_box p {
    margin: 5px;
    font-size: 20px;
    font-family: 'Inria Sans', sans-serif;
  }

  .delete img {
    max-height: 20px;
    padding: 5px;
    background: transparent;
  }

  .delete a {
    margin: 0px;
    background: transparent;
  }

  .delete {
    justify-content: right;
    position: absolute;
  }

  .container {
    position: relative;
  }

  #new_person_block {
    height: 300px;
    width: 254px;
  }

  #new_person_block,
  .person_box {
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 20px;
    padding: 15px;
    margin: 15px;
  }

  #new_person_block img {
    max-height: 45px;
  }

  #new_person_block a {
    padding: 93px 105px;
  }

  #gender_buttons {
    display: flex;
    justify-content: center;

  }

  #gender_buttons .radio {
    margin: 10px 25px;
  }

  #clear_all_but {
    width: 85px;
    height: 40px;
  }

  .radio input {
    height: 20px;
    width: 20px;
    margin: 0px;
  }

  label {
    font-size: 25px;
  }

  #clear_all_but {
    font-size: 15px;
    border-radius: 12px;
    align-self: center;
  }
</style>