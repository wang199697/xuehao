<template>
      <div class="img">
          <img width="100%" :src="getImages(movie.photo.path)" alt="">
          <h1>{{movie.msg}}</h1>
          <p class="info">
              <span>★ &nbsp;{{movie.favorite_count}}</span>
              <span><br></span>
              <span class="hr"></span>
          </p>
          <p class="album">
              <img :src="getImages(movie.sender.avatar)" class="a1" alt="">
              <span class="sender">
                  <a href="">{{movie.sender.username}}</a>
                  <br>
                  <a href="">收集到{{movie.album.name}}</a>
              </span>
          </p>
      </div>
</template>
<script>

export default {
    methods:{
        getImages(_url) {
        if (_url !== undefined) {
        let _u = _url.substring(7);
        return "https://images.weserv.nl/?url=" + _u;
      }
    },
    },
    props:["movie"]
}
</script>

<style lang="scss" scoped>
    .movie-item{
        display:flex;
    //    flex-wrap: wrap;
       justify-content: space-around;
       
      
    }
    .img{ 
        width:45%; 
        margin-top: 10px;
        border: 1px solid #e0e0e0;
        h1{
             font-size: 12px;
        }   
    }
   .info{
        position: relative;
    }
    .hr{
        position: absolute;
        width: 100%;
        height:1px;
        background-color: rgba(232, 235, 235, 1);
        // background-size: 100% 2px;
        // background-position: bottom;
    }
    .album{
        position: relative;
        padding: 8px 8px 8px 46px;

        .a1{
            overflow: hidden;
            position: absolute;
            top: 8px;
            left: 8px;
            width: 30px;
            height: 30px;
        }
        .sender{
              height:36px;
              width:51px;

        }
       
    }
</style>
