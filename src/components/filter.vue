<template>
  <div class="root">
    <h1> {{title}} </h1>
    <div class="filter_box">
      <div class="list_col" id="inactive">
        <h2> Unused Names </h2>
        <div class="select_buttons">
          <button @click="deselectAll(inactive_list)">Deselect All</button>
          <button @click="selectAll(inactive_list)">Select All</button>
        </div>
        <div class="name_list">
          <ul>
            <li v-for="(person,index) in inactive_list" :key="person.name" @click="toggleHighlight(inactive_list,index)" :class="{selected: person.selected}">{{person.name}}</li>
          </ul>
        </div>
      </div>
      <div id="move_buttons">
        <a @click="moveSelectedToActive()"><img src="../assets/right_arrow.png"></a>
        <a @click="moveSelectedToInactive()"><img src="../assets/left_arrow.png"></a>
      </div>
      <div class="list_col" id="active">
        <h2> Used Names </h2>
        <div class="select_buttons">
          <button @click="deselectAll(active_list)">Deselect All</button>
          <button @click="selectAll(active_list)">Select All</button>
        </div>
        <div class="name_list">
          <ul id="active_name_list">
            <li v-for="(person,index) in active_list" :key="person.name" @click="toggleHighlight(active_list,index)" :class="{selected: person.selected}">{{person.name}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Name_Filter',
    props: {
      active: Array,
      inactive: Array,
      title: String
    },
    data() {
      return {
        active_list: this.active,
        inactive_list: this.inactive
      }
    },
    methods: {
      selectAll(list) {
        list = list.forEach(p => {
          p.selected = true;
        });
        return list;
      },
      deselectAll(list) {
        list = list.forEach(p => {
          p.selected = false;
        });
        return list;
      },
      moveSelectedToActive() {
        let toActive = this.inactive_list.filter(person => person.selected == true);
        this.inactive_list = this.inactive_list.filter(person => person.selected == false);
        toActive.forEach(p => {
          p.selected = false
        });
        this.active_list = this.active_list.concat(toActive);
        this.updateData();
      },
      moveSelectedToInactive() {
        let toInactive = this.active_list.filter(person => person.selected == true);
        this.active_list = this.active_list.filter(person => person.selected == false);
        toInactive.forEach(p => {
          p.selected = false
        });
        this.inactive_list = this.inactive_list.concat(toInactive);
        this.updateData();
      },
      toggleHighlight(list, index) {
        list[index].selected = !list[index].selected;
      },
      updateData() {
        if (this.title === "Male Names") {
          this.$root.$data.m_names.active = this.active_list;
          this.$root.$data.m_names.inactive = this.inactive_list;
        } else if (this.title === "Female Names") {
          this.$root.$data.f_names.active = this.active_list;
          this.$root.$data.f_names.inactive = this.inactive_list;
        } else {
          this.$root.$data.s_names.active = this.active_list;
          this.$root.$data.s_names.inactive = this.inactive_list;
        }
      }
    }
  }
</script>

<style scoped>
  .root {
    background: #B7E8B1;
    border-radius: 50px;
    margin: 15px;
    padding: 10px;
  }

  .filter_box {
    display: flex;
    flex-direction: row;
  }

  .list_col {
    display: flex;
    flex-direction: column;
    width: 175px;
  }

  .list_col h2 {
    margin-bottom: 5px;
    margin-top: 0;
  }

  .select_buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .select_buttons button {
    height: 25px;
    background-color: white;
    border-radius: 10px;
  }

  #move_buttons {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 10px;
  }

  #move_buttons img {
    max-height: 40px;
  }

  ul {
    max-height: 625px;
    overflow: scroll;
    padding: 0;
    border: 2px;
  }

  li {
    list-style-type: none;
  }

  label,
  li {
    font-family: 'Inria Sans', sans-serif;
  }



  .selected {
    background: #41c69e;
  }
</style>