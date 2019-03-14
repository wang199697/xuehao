<template>
    <div class="movie-box">
        <MovieItem
          v-for="movie in movies"
          :key="movie.id"
          :movie="movie"
          ></MovieItem>
    </div>
</template>
<script>
import MovieItem from "./MovieItem"

export default {
    data(){
        return{
            movies:null
        }
    },
    components:{
        MovieItem
    },
    methods:{
        getMovies(){
            
            this.$http.get("/dt/napi/blog/list/by_category/?start=0&include_fields=sender%2Calbum%2Clike_count%2Cmsg&limit=24&cate_key=5017d172705cbe10c0000003&path=&_=1551962127756"
                // params:{
                //     start:0,
                //     include_fields:"sender%2Calbum%2Clike_count%2Cmsg",
                //     limit:24,
                //     cate_key:"5017d172705cbe10c0000003",
                //     path:"",
                //     _:"1551962127756"


                // }
            )
            .then(res=>{
                console.log(res);
                this.movies = res.data.data.object_list;
                

            })
        },
     

    },
    created(){
        this.getMovies();
    }
}
</script>

<style lang="scss" scoped>
    .movie-box{
        
        display:flex;
        justify-content: space-around;
        flex-flow: wrap;
    }
</style>