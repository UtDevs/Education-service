<template>
  <div class="row" style="margin-top: 30px" v-if="showPage">
    <div :class="{'col-xs-12': true, 'col-lg-6': true, 'order-12': order}" v-if="!order">
      <!--      <a href="#" style="margin: auto"><img class="app-logo" src="../static/Universelogo.png"></a>-->
      <h1 style="margin-top: 20px; font-size: 50px"><b>Universe <span class="em-text">Academy</span></b></h1>
      <br/>
      <h3 style=" margin-bottom: 40px;">Universe Academy is an online, friendly and welcoming school that provides
        online courses for grades between 1 to 10th.</h3>
      <!--      <h4>To know more about us visit our website: </h4>-->
      <!--      <button type="button" class="btn btn-danger" @click="browseToMainWebsite">Visit us</button>-->
    </div>
    <div :class="{'col-xs-12': true, 'col-lg-5': true, 'offset-lg-1': true, 'order-1': order}">
      <div class="container">
        <div class=""></div>
        <div class="card">
          <h1 class="UPAY">Universe Academy</h1>
          <h1 class="title">Login</h1>
          <form @submit.prevent="login">
            <div class="input-container">
              <input type="text" id="username" v-model="user" required="required"/>
              <label for="username">Username</label>
              <div class="bar"></div>
            </div>
            <div class="input-container">
              <input type="password" id="password" v-model="pass" required="required"/>
              <label for="password">Password</label>
              <div class="bar"></div>
            </div>
            <div class="button-container">
              <button><span>SIGN IN</span></button>
            </div>
            <!--            <div class="footer"><span @click="routeToForgotPassword">Forgot your password?</span></div>-->
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import Logo from '~/components/Logo.vue'

  export default {
    data() {
      return {
        user: '',
        pass: '',
        order: false,
        showPage: true,
      }
    },
    components: {},
    methods: {
      login() {
          if(this.user === 'alaa' && this.pass === 'alaa') {
            this.$router.replace('/inspire');
          }
          else
            alert('wrong username or password');
      },
      handleResize() {
        this.order = window.innerWidth <= 992;
      }
    },
    created() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize)
    }
  }
</script>

<style scoped>
  img.app-logo {
    width: 110px;
    height: 70px;
    margin-top: 30px;
  }

  .em-text {
    color: white;
  }

  .pen-title h1 {
    margin: 0 0 20px;
    font-size: 48px;
    font-weight: 300;
  }

  .pen-title span {
    font-size: 12px;
  }

  .pen-title span .fa {
    color: #005ce5;
  }

  .pen-title span a {
    color: #005ce5;
    font-weight: 600;
    text-decoration: none;
  }

  .rerun a {
    cursor: pointer;
    display: inline-block;
    background: #005ce5;
    border-radius: 3px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    padding: 10px 20px;
    color: #ffffff;
    text-decoration: none;
    transition: 0.3s ease;
  }

  .rerun a:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  #codepen i, #portfolio i {
    line-height: 56px;
  }

  #portfolio i {
    line-height: 44px;
  }

  /* Container */
  .container {
    position: relative;
    max-width: 460px;
    width: 100%;
  }

  .container.active .card.alt {
    top: 20px;
    right: 0;
    width: 100%;
    min-width: 100%;
    height: auto;
    border-radius: 5px;
    padding: 60px 0 40px;
    overflow: hidden;
  }

  .container.active .card.alt .toggle {
    position: absolute;
    top: 40px;
    right: -70px;
    box-shadow: none;
    -webkit-transform: scale(10);
    transform: scale(10);
    transition: -webkit-transform .3s ease;
    transition: transform .3s ease;
    transition: transform .3s ease, -webkit-transform .3s ease;
  }

  .container.active .card.alt .toggle:before {
    content: '';
  }

  .container.active .card.alt .title,
  .container.active .card.alt .input-container,
  .container.active .card.alt .button-container {
    left: 0;
    opacity: 1;
    visibility: visible;
    transition: .3s ease;
  }

  .container.active .card.alt .title {
    transition-delay: .3s;
  }

  .container.active .card.alt .input-container {
    transition-delay: .4s;
  }

  .container.active .card.alt .input-container:nth-child(2) {
    transition-delay: .5s;
  }

  .container.active .card.alt .input-container:nth-child(3) {
    transition-delay: .6s;
  }

  .container.active .card.alt .button-container {
    transition-delay: .7s;
  }

  /* Card */
  .card {
    position: relative;
    background: #ffffff;
    border-radius: 5px;
    padding: 60px 0 40px 0;
    box-sizing: border-box;
    transition: .3s ease;
    /* Title */
    /* Inputs */
    /* Button */
    /* Footer */
    /* Alt Card */
  }

  .card:first-child {
    background: #fafafa;
    height: 10px;
    border-radius: 5px 5px 0 0;
    margin: 0;
    padding: 0;
  }

  .card .title {
    position: relative;
    z-index: 1;
    border-left: 5px solid #005ce5;
    margin: 0 0 35px;
    padding: 10px 0 10px 50px;
    color: #005ce5;
    font-size: 32px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .card .UPAY {
    position: relative;
    z-index: 1;
    margin: 0 0 10px;
    padding: 10px;
    color: #005ce5;
    font-size: 30px;
    font-style: italic;
    font-weight: 600;
    text-align: center;
  }

  .card .input-container {
    position: relative;
    margin: 0 60px 50px;
  }

  .card .input-container input {
    outline: none;
    z-index: 1;
    position: relative;
    background: none;
    width: 100%;
    height: 60px;
    border: 0;
    color: #212121;
    font-size: 17px;
    font-weight: 400;
  }

  .card .input-container input:focus ~ label {
    color: #005ce5;
    -webkit-transform: translate(-12%, -50%) scale(0.75);
    transform: translate(-12%, -50%) scale(0.75);
  }

  .card .input-container input:focus ~ .bar:before, .card .input-container input:focus ~ .bar:after {
    width: 50%;
  }

  .card .input-container input:valid ~ label {
    color: #9d9d9d;
    -webkit-transform: translate(-12%, -50%) scale(0.75);
    transform: translate(-12%, -50%) scale(0.75);
  }

  .card .input-container label {
    position: absolute;
    top: 0;
    left: 0;
    color: #757575;
    font-size: 24px;
    font-weight: 300;
    line-height: 60px;
    transition: 0.2s ease;
  }

  .card .input-container .bar {
    position: absolute;
    left: 0;
    bottom: 0;
    background: #757575;
    width: 100%;
    height: 1px;
  }

  .card .input-container .bar:before, .card .input-container .bar:after {
    content: '';
    position: absolute;
    background: #005ce5;
    width: 0;
    height: 2px;
    transition: .2s ease;
  }

  .card .input-container .bar:before {
    left: 50%;
  }

  .card .input-container .bar:after {
    right: 50%;
  }

  .card .button-container {
    margin: 0 60px;
    text-align: center;
  }

  .card .button-container button {
    outline: 0;
    cursor: pointer;
    position: relative;
    display: inline-block;
    background: 0;
    width: 150px;
    border: 2px solid #a9c7ff;
    padding: 20px 0;
    font-size: 24px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
    overflow: hidden;
    transition: .3s ease;
  }

  .card .button-container button span {
    position: relative;
    z-index: 1;
    color: #a9c7ff;
    transition: .3s ease;
  }

  .card .button-container button:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    background: #005ce5;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    margin: -15px 0 0 -15px;
    opacity: 0;
    transition: .3s ease;
  }

  .card .button-container button:hover, .card .button-container button:active, .card .button-container button:focus {
    border-color: #005ce5;
  }

  .card .button-container button:hover span, .card .button-container button:active span, .card .button-container button:focus span {
    color: #005ce5;
  }

  .card .button-container button:active span, .card .button-container button:focus span {
    color: #ffffff;
  }

  .card .button-container button:active:before, .card .button-container button:focus:before {
    opacity: 1;
    -webkit-transform: scale(10);
    transform: scale(10);
  }

  .card .footer {
    margin: 40px 0 0;
    color: #a9c7ff;
    font-size: 24px;
    font-weight: 300;
    text-align: center;
  }

  .card .footer span {
    color: inherit;
    text-decoration: none;
    transition: .3s ease;
  }

  .card .footer span:hover {
    color: #005ce5;
    cursor: pointer;
  }

  .card.alt {
    position: absolute;
    top: 40px;
    right: -70px;
    z-index: 10;
    width: 140px;
    height: 140px;
    background: none;
    border-radius: 100%;
    box-shadow: none;
    padding: 0;
    transition: .3s ease;
    /* Toggle */
    /* Title */
    /* Input */
    /* Button */
  }

  .card.alt .toggle {
    position: relative;
    background: #005ce5;
    width: 140px;
    height: 140px;
    border-radius: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    color: #ffffff;
    font-size: 58px;
    line-height: 140px;
    text-align: center;
    cursor: pointer;
  }

  .card.alt .toggle:before {
    content: '\f040';
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  .card.alt .title,
  .card.alt .input-container,
  .card.alt .button-container {
    left: 100px;
    opacity: 0;
    visibility: hidden;
  }

  .card.alt .title {
    position: relative;
    border-color: #ffffff;
    color: #ffffff;
  }

  .card.alt .title .close {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 60px;
    display: inline;
    color: #ffffff;
    font-size: 58px;
    font-weight: 400;
  }

  .card.alt .title .close:before {
    content: '\00d7';
  }

  .card.alt .input-container input {
    color: #ffffff;
  }

  .card.alt .input-container input:focus ~ label {
    color: #ffffff;
  }

  .card.alt .input-container input:focus ~ .bar:before, .card.alt .input-container input:focus ~ .bar:after {
    background: #ffffff;
  }

  .card.alt .input-container input:valid ~ label {
    color: #ffffff;
  }

  .card.alt .input-container label {
    color: rgba(255, 255, 255, 0.8);
  }

  .card.alt .input-container .bar {
    background: rgba(255, 255, 255, 0.8);
  }

  .card.alt .button-container button {
    width: 100%;
    background: #ffffff;
    border-color: #ffffff;
  }

  .card.alt .button-container button span {
    color: #005ce5;
  }

  .card.alt .button-container button:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  .card.alt .button-container button:active:before, .card.alt .button-container button:focus:before {
    display: none;
  }

  /* Keyframes */
  @-webkit-keyframes buttonFadeInUp {
    0% {
      bottom: 30px;
      opacity: 0;
    }
  }

  @keyframes buttonFadeInUp {
    0% {
      bottom: 30px;
      opacity: 0;
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-animation: autofill 0s forwards;
    animation: autofill 0s forwards;
  }

  @keyframes autofill {
    100% {
      background: transparent;
    }
  }

  @-webkit-keyframes autofill {
    100% {
      background: transparent;
    }
  }

</style>
