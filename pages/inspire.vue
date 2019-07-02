<template>
   <div>
        <h1 style="font-weight: bold">Welcome To Universe <span style="color: #191153">Academy</span></h1>
    <br v-for="i in 3"/>
     <button class="btn" style="background-color: #2196F3" @click="ReturnBack()" v-if="flag">
       <v-icon dark>arrow_back</v-icon>
     </button>
     <br v-for="i in 3" v-if="flag"/>
      <div class="col-xs-12">
        <div class="card-deck" v-if="!flag">
          <div class="col-xs-12 col-lg-4" style="margin-bottom: 20px" v-for="i in 10">
            <button style="width: 100%;height:100px;background-color:#2196F3;margin: 2px; font-weight: bold" class="btn" @click="SwitchFlag()">{{i}}{{i == 1? 'st': i >=2&& i<4?'ed': 'th'}} Grade
           </button>
          </div>
<!--          #00C48D-->
        </div>

        <div class="card-deck" v-if="flag">
          <div class="col-xs-12 col-lg-4" style="margin-bottom: 20px" v-for="i in materials.length - 1">
            <button style="width: 100%;height:100px;;margin: 2px;background-color: #2979FF; font-weight: bold" class="btn" @click="RouteToVideoContent()" >{{materials[i]}}
            </button>
          </div>

        </div>

      </div>


  </div>
</template>

<script>
  export default {
    data: () => ({
      legacySystemHTML: `
        <p color="#faddad" size="-2">
          <MARQUEE>Please chose grade to continue.</MARQUEE>
        </p>
      `,
      materials: ['Arabic', 'English', 'France', 'Math', "Science", "biology", "physics", "History", "Religion", "geography", "Art", "Sport"],
      flag: false
    }),
    methods: {
      selectedList() {
        return this.items;
      },
      SwitchFlag(){
        this.flag = !this.flag;
      },
      ReturnBack(){
        this.flag = !this.flag;
      },
      RouteToVideoContent(){
        this.$router.push('/videoContent');
      }
    }
  }
</script>
