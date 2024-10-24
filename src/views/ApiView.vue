<template lang="">
    <div>
        <h2> NEWS APP </h2>
        <nav class="tab">
            <button 
            @click="tabName='article'"
            :class="{active:tabName=='article'}">
                기사
            </button>
            <button 
            @click="tabName='topic'"
            :class="{active:tabName=='topic'}">
                토픽
            </button>
        </nav>
        <div class="news-content">
            <!-- ...컴포넌트 출력 -->
            <div v-if="tabName=='article'">
                <NewsArticle data="기사내용..." :title="newsTitle">
                    <nav>
                        <span @click="newsTitle='국내기사'">국내</span> | 
                        <span @click="newsTitle='해외기사'">해외</span>
                    </nav>
                </NewsArticle>
            </div>
            <div v-else-if="tabName=='topic'">
                <NewsTopic
                 @parent="changeTopic"
                 data="토픽내용..." :title="topicTitle"/>
            </div>
        </div>
    </div>
</template>
<script>
import NewsArticle from "@/components/NewsArticle";
import NewsTopic from "@/components/NewsTopic";
import axios from 'axios';

export default {
    name:"ApiView",
    data(){
        return { 
            tabName:'article', 
            newsTitle:'국내기사',
            topicTitle:'국내토픽'
        }
    },
    created() {
        this.apiRequest()
    },
    methods: {
        changeTopic(n){
            this.topicTitle = n;
        },
        async apiRequest(){
            const res = await axios.get('/v1/articles?date_from=2024-10-23&date_to=2024-10-24&api_key=30c89185a6464a2190e6d40349de39e0')
            console.log(res.data);
        }
    },
    components:{
        NewsArticle,NewsTopic
    }
}
</script>
<style lang="scss">
    .tab{
        button{
            &.active{ 
                background-color: red; 
                color:white
            }
        }        
    }
</style>
