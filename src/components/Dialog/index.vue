<template>
    <div class="table" v-if="isflag">
        <table border='1'>
            <tr v-for="(item,index) in tabledata" :key="index">
                <td>{{item.name}}</td>
                <td>{{item.sex}}</td>
            </tr>
        </table>
        <button @click='close()'>关闭数据</button>
    </div>
</template>
<script>
export default {
    props:{
        tabledata:{
            type:Array,
            default:()=>{
            return [
                {
                    name:'lili',
                    sex:'女'
                },
                {
                    name:'wenwen',
                    sex:'男'
                }
            ]
            }
        },
        isflag:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
           tt:'dasdas'
        }
    },
    methods:{
        close(){
            this.$emit('close');
        }
    }
}
</script>