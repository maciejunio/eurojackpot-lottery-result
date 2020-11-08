<template>
  <div class="home">
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 text-left">
            <h2>Eurojackpot</h2>
            <h1>PLAY TO WIN</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <router-link class="button" to="/results" role="button"
              >Results</router-link
            >
          </div>
          <div class="col-lg-6">
            <img class="logo" src="../assets/winner.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  @media (max-width: 650px) {
    padding-top: 15px;
  }
  .logo {
    width: 80%;
    @media (max-width: 991px) {
      width: 50%;
    }
    @media (max-width: 650px) {
      display: none;
    }
  }
  h2 {
    font-size: 28px;
    line-height: 38px;
    font-weight: 600;
    margin-bottom: 10px;
    text-transform: uppercase;
    color: #ec2f46;
    @media (max-width: 991px) {
      font-size: 20px;
    }
  }
  p {
    font-size: 28px;
    line-height: 38px;
    font-weight: 300;
    margin-bottom: 40px;
    color: #a1aed4;
    @media (max-width: 991px) {
      font-size: 20px;
    }
    @media (max-width: 650px) {
      font-size: 16px;
    }
  }
}
</style>
