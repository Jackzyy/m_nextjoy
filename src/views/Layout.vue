<template>
    <div>
        <div class="mg-bot50">
            <transition mode="out-in" :enter-active-class="transitionEnter" :leave-active-class="transitionLeave">
                <keep-alive>
                    <router-view class="animated"></router-view>
                </keep-alive>
            </transition>
        </div>
        <Tabbar v-model="active">
            <TabbarItem icon="home-o" to='/gamecenter'>游戏</TabbarItem>
            <TabbarItem icon="search" to='/gamecircle'>游戏圈</TabbarItem>
            <TabbarItem icon="friends-o" to='/gamelive'>直播</TabbarItem>
            <TabbarItem icon="setting-o" to='/usercenter'>我</TabbarItem>
        </Tabbar>
    </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';

    export default {
        components:{
            Tabbar,
            TabbarItem
        },
        data() {
            return {
                active: 0,
                transitionEnter:'',
                transitionLeave:''
            }
        },
        created(){
            this.$router.push('/gamecenter')
        },
        watch:{
             $route(to, from) {
                if( to.meta.index > from.meta.index){//元素左滑效果
                    this.transitionEnter = 'fadeInRight';
                    this.transitionLeave = 'fadeOutLeft';
                }else if(to.meta.index < from.meta.index){//元素右滑效果
                    this.transitionEnter = 'fadeInLeft';
                    this.transitionLeave = 'fadeOutRight';
                }
             }
        }
    }
</script>

<style scoped lang='scss'>
/deep/ .animated{
        animation-duration: .35s;
    }
    .mg-bot50{
        margin-bottom: 52px;
    }
</style>