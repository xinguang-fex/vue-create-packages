<template>
    <!-- 每页页面添加class='main_content' -->
    <div class="main_content">
        <div class="edit_container">
            <quill-editor v-model="content"
                ref="myQuillEditor"
                class="editer"
                :options="editorOption"
                @ready="onEditorReady($event)">
            </quill-editor>
        </div>
        <div class="submit_btn">
            <el-button type="primary" @click="submit">提交</el-button>
        </div>
    </div>
</template>

<script>
    import { quillEditor } from 'vue-quill-editor'

    export default {
        data() {
            return {
                content: '<h3>文本编辑</h3>',
                editorOption: {
                }
            }
        },
        components: {
            quillEditor
        },
        computed: {
            editor() {
                return this.$refs.myQuillEditor.quill
            }
        },
        methods: {
            onEditorReady(editor) {
                console.log('editor ready!', editor)
            },
            submit() {
                console.log(this.content)
                this.$message.success('提交成功！')
            }
        },
    }
</script>

<style lang="scss">
    @import '../style/mixin';
    .edit_container{
        padding: 40px;
        margin-bottom: 40px;
    }
    .editer{
        height: 350px;
    }
    .submit_btn{
        text-align: center;
    }
</style>
