 import Vuex from "vuex"
 import axios from 'axios'

 const createStore=()=>{
    return new Vuex.Store({
        state:{
            //data
            loadData:[]
        },
        mutations:{
            //manage data in State
            setPostState(state,posts){
                state.loadData=posts
            },
            addPostState(state,post){
                state.loadData.push(post)
            },
            editPostState(state,editpost){
                const postIndex=state.loadData.findIndex(
                    post=>post.id===editpost.id
                )
                state.loadData[postIndex]=editpost
            }
        },
        actions:{
            //work with backend use throught Component
            nuxtServerInit(vuexContext,context){
                return axios.get("https://nuxt-tutorial-f0c0f-default-rtdb.firebaseio.com/posts.json")
                .then(res=>{
                    const data=[];
                    for(const key in res.data){
                        data.push({...res.data[key],id:key})
                    }
                    vuexContext.commit("setPostState",data)
                }).catch(e=>context.error(e));
            },
            addPost(vuexContext,post){
                //receive value form dispatch
                const cratePost={...post}
                return axios.
                post("https://nuxt-tutorial-f0c0f-default-rtdb.firebaseio.com/posts.json",cratePost)
                .then(res=>{
                  vuexContext.commit("addPostState",{...cratePost,id:res.data.name})
                })
            },
            editPost(vuexContext,post){
                return axios.
                put("https://nuxt-tutorial-f0c0f-default-rtdb.firebaseio.com/posts/"+post.id+".json",post)
                .then(res=>{
                    //commit mutation
                    vuexContext.commit("editePostState",post)
                })
            }
        },
        getters:{
            //bring State to use
            getAllPosts(state){
                return state.loadData
            }
        }
    });
 };
 export default createStore