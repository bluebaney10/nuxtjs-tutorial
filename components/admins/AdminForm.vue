<template>
<div>
    <b-container fluid class="py-2">
        <h2 align="center">Write Article</h2>
        <b-form @submit.prevent="onSubmit" @reset="onReset">
            <b-form-group label="articlename">
                <b-form-input type="text" placeholder="article name" v-model="form.title"></b-form-input>
            </b-form-group>
            <b-form-group label="article detail">
             <b-form-textarea
             placeholder="detail article"
             rows="8"
             v-model="form.content">
            </b-form-textarea>
            </b-form-group>
            <b-form-group label="image url">
                 <b-form-input type="text" placeholder="image article" v-model="form.image"></b-form-input>
            </b-form-group>
             <b-form-group label="writer">
                 <b-form-input type="text" placeholder="writer name" v-model="form.author"></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Save</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
        <!--<b-card header="result" class="mt-3">
            {{form}}
        </b-card>-->
    </b-container>
</div>
</template>
<script>
export default {
    data() {
        return {
            form:this.post?{...this.post} :
            {
                title:"",
                content:"",
                image:"",
                author:""
            }
        }
    },
    props:{
        post:{
            type:Object,
            required:false

        }
    },
    methods:{
        onSubmit(evt){
            this.$emit('sendData',this.form)
            this.$router.push('/admins/posts')
            console.log(this.form);
        },
        onReset(evt){
            evt.preventDefault();
            this.form.title="";
            this.form.content="";
            this.form.image="";
            this.form.author="";
        }
    }
}
</script>
<style scoped>

</style>