<template>
    <!-- 主框架路由页面入口 -->
    <div class="content-wrap">
        <el-row style="height: 100%;">
            <el-col :span="3"  class="left-menu">
                <el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
                    <el-menu-item index="welcome"><i class="el-icon-menu"></i>首页</el-menu-item>
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-edit"></i>编辑</template>
                        <!-- <el-menu-item index="uploadImg">上传图片</el-menu-item> -->
                        <el-menu-item index="vueEdit">文本编辑</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
            <el-col :span="21" style="height: 100%;overflow: auto;">
                <head-top></head-top>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import headTop from '../components/headTop'
    export default {
        computed: {
            defaultActive: function() {
                return this.$route.path.replace('/', '')
            }
        },
        components: {
            headTop
        }
    }
</script>
