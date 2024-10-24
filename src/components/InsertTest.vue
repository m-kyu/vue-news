<template lang="">
    <div>
        <h2>InsertTest</h2>
        <form @submit.prevent="insert">
            <p>
                <input type="text" name="name" placeholder="이름" 
                v-model="name" />
            </p>
            <p><input type="text" name="tel" placeholder="연락처" 
                v-model="tel"/></p>
            <p>
                <input type="radio" name="gender" value="남" v-model="gender"/>남
                <input type="radio" name="gender" value="여" v-model="gender"/>여
            </p>
            <p>
                <input type="checkbox" name="One" value="동의1" 
                v-model="agree"/>동의1

                <input type="checkbox" name="Two" value="동의2" 
                v-model="agree"/>동의2
            </p>
            <p>
                <select v-model="city">
                    <option> 서울 </option>
                    <option> 인천 </option>
                    <option> 경기 </option>
                </select>
            </p>
            <p><input type="submit" value="저장" /></p>
        </form>
        
    </div>
</template>
<script>
import {mapActions} from "vuex";

export default {
    name:"InsertTest",
    data(){
        return{
            name:'', 
            tel:'',
            gender:'남', 
            agree:["동의1"], 
            city:'서울'
        }
    },
    methods:{
        ...mapActions(['actionJoin']),
        insert(){
            if(this.agree.length === 2){
                const value = {
                        name:this.name,
                        tel:this.tel,
                        gender:this.gender,
                        city:this.city
                    }

                this.actionJoin( {type:'insert',d:value} );
            }
        }
    }
}
</script>
<style lang="">
    
</style>