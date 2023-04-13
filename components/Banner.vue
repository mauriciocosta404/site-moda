<template>
    <div class="banner">
      <div class="container">
        <div class="banner-content">
          <div class="main-banner">
            <div class="img-container">
              <img src="@/assets/images/banner1.jpg" alt="" />
              <div class="img-content">
                <span> Banner </span>
                <h3>your Title text</h3>
              </div>
            </div>
          </div>
  
          <div class="category-banner">
            <div class="top">
              <div class="img-container">
                <img src="@/assets/images/banner2.jpg" alt="" />
                <div class="img-content">
                  <h3>Women</h3>
                </div>
              </div>
              <div class="img-container">
                <img src="@/assets/images/banner3.png" alt="" />
                <div class="img-content">
                  <h3>men</h3>
                </div>
              </div>
            </div>
            <div class="bottom">
              <div class="img-container">
                <img src="@/assets/images/banner4.png" alt="" />
                <div class="img-content">
                  <h3>Women</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="banner-servieces">
          <div v-for="n in 3" :key="n" class="service">
            <span class="icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.8">
                  <path
                    d="M21.6667 26.6666V9.99992C21.6667 9.55789 21.4911 9.13397 21.1785 8.82141C20.8659 8.50885 20.442 8.33325 20 8.33325H6.66667C6.22464 8.33325 5.80072 8.50885 5.48816 8.82141C5.17559 9.13397 5 9.55789 5 9.99992V26.6666C5 27.1086 5.17559 27.5325 5.48816 27.8451C5.80072 28.1577 6.22464 28.3333 6.66667 28.3333H8.33333M21.6667 26.6666C21.6667 27.1086 21.4911 27.5325 21.1785 27.8451C20.8659 28.1577 20.442 28.3333 20 28.3333H15M21.6667 26.6666V13.3333C21.6667 12.8912 21.8423 12.4673 22.1548 12.1547C22.4674 11.8422 22.8913 11.6666 23.3333 11.6666H27.6433C28.0853 11.6667 28.5092 11.8423 28.8217 12.1549L34.5117 17.8449C34.8242 18.1574 34.9999 18.5813 35 19.0233V26.6666C35 27.1086 34.8244 27.5325 34.5118 27.8451C34.1993 28.1577 33.7754 28.3333 33.3333 28.3333H31.6667M21.6667 26.6666C21.6667 27.1086 21.8423 27.5325 22.1548 27.8451C22.4674 28.1577 22.8913 28.3333 23.3333 28.3333H25M8.33333 28.3333C8.33333 29.2173 8.68452 30.0652 9.30964 30.6903C9.93477 31.3154 10.7826 31.6666 11.6667 31.6666C12.5507 31.6666 13.3986 31.3154 14.0237 30.6903C14.6488 30.0652 15 29.2173 15 28.3333M8.33333 28.3333C8.33333 27.4492 8.68452 26.6014 9.30964 25.9762C9.93477 25.3511 10.7826 24.9999 11.6667 24.9999C12.5507 24.9999 13.3986 25.3511 14.0237 25.9762C14.6488 26.6014 15 27.4492 15 28.3333M31.6667 28.3333C31.6667 29.2173 31.3155 30.0652 30.6904 30.6903C30.0652 31.3154 29.2174 31.6666 28.3333 31.6666C27.4493 31.6666 26.6014 31.3154 25.9763 30.6903C25.3512 30.0652 25 29.2173 25 28.3333M31.6667 28.3333C31.6667 27.4492 31.3155 26.6014 30.6904 25.9762C30.0652 25.3511 29.2174 24.9999 28.3333 24.9999C27.4493 24.9999 26.6014 25.3511 25.9763 25.9762C25.3512 26.6014 25 27.4492 25 28.3333"
                    stroke="#121212"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </span>
            <div class="details">
              <h6>FREE SHIPPING</h6>
              <p>On all UA order or order above $100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  

<script setup>

</script>

<style scoped>
    img{
        height: 100%;
    }
    .banner{
        border-bottom: 2px solid #f8f8f8;
        margin-bottom: 100px;
    }
    .banner-container{
        max-width: calc(1440px - 130px);
        padding: 0px 20px;
        width: 100%;
        margin: auto;
    }
    .banner-content{
        display: flex;
        justify-content: space-between;
        padding: 40px 0px;
    }
    .banner-content > div{
        flex:0 0 calc(50% - 20px);
        max-width: calc(50% - 20px);
    }
    .img-container {
        position: relative;
        height: 100%;
        width: 100%;
    }
    .img-container img {
         width: 100%;
        object-fit: cover;
    }
    .img-container .img-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #ffffff;
        border-radius: 4px;
        padding: 16px 32px;
        text-align: center;
    }
    .img-content span {
        font-weight: 600;
        font-size: 12px;
        line-height: 13px;
        color: #121212;
        opacity: 0.4;
        text-transform: uppercase;  
    }
    .img-content h3 {
        font-weight: 600;
        font-size: 22px;
        line-height: 25px;
        color: #121212;
        text-transform: uppercase;
        margin-top: 5px;
    }
    .category-banner .top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
    }
    .category-banner .top > div {
        flex: 0 0 calc(50% - 20px);
        max-width: calc(50% - 20px);
        width: 100%;
    }
    
    .banner-servieces {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
        align-items: center;
    }
    .banner-servieces > div {
        flex: 0 0 calc(33.33% - 20px);
        max-width: calc(33.33% - 20px);
        width: 100%;
        display: flex;
        align-items: center;
    }
    .service .details {
        margin-left: 10px;
    }
    .details h6 {
        font-weight: 600;
        font-size: 12px;
        line-height: 13px;
    }
    .details p {
        font-weight: 500;
        font-size: 12px;
        line-height: 22px;
        opacity: 0.9;
    }

    @media (max-width: 969px) {
  .banner-content {
    flex-wrap: wrap;
  }
  .banner-content > div {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 20px;
  }
}

@media (max-width: 600px) {
  .category-banner .top > div {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 20px;
  }
  .category-banner .top {
    flex-wrap: wrap;
  }
  .img-content h3 {
    font-size: 16px;
    line-height: 20px;
  }
  .banner-servieces {
    flex-wrap: wrap;
  }
  .banner-servieces > div {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 20px;
  }
}
</style>