<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  color: #ffffff;
  background: #070b28;
}
h1 {
  font-size: 70px;
  font-weight: 700;
  line-height: 70px;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 13px;
  letter-spacing: -1px;
  @media (max-width: 991px) {
    font-size: 55px;
  }
  @media (max-width: 650px) {
    font-size: 35px;
  }
}
.button {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
  padding: 14px 35px;
  display: inline-block;
  border: 0px;
  border-radius: 50px;
  cursor: pointer;
  -webkit-transition: all 0.3s ease-in;
  -o-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
  background-image: linear-gradient(to left, #ff344d, #d2273c);
  color: #ffffff !important;
  @media (max-width: 960px) {
    padding: 10px 25px;
    font-size: 14px;
  }
  &:hover {
    text-decoration: none;
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
}
</style>
