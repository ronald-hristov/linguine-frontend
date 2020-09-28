<template>
  <div class="home">
    <v-banner two-line v-if="!isLoggedIn">
      <v-avatar slot="icon" color="deep-purple accent-4" size="40" >
        <v-icon icon="mdi-lock" color="white" >
          mdi-star
        </v-icon>
      </v-avatar>
        Create, Share and Like spaghetti snippets now!
      <template v-slot:actions>
        <v-btn text color="deep-purple accent-4" @click="signUpDialog = true">
          Sign Up
        </v-btn>
        <v-btn text color="deep-purple accent-4" @click="logInDialog = true">
          Log in
        </v-btn>
      </template>
    </v-banner>

    <v-container>
      <h1>Snippets</h1>
      <v-row class="align-stretch">
        <v-col
          v-for="snippet in snippets"
          :key="snippet._id"
          class="align-stretch col-md-3 col-12"
          :class="`d-flex align-stretch`"
        >
          <v-card class="mx-auto my-4" max-width="374">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img height="250" src="../assets/img/code.jpg"></v-img>
            <v-card-title>{{snippet.title ? snippet.title : 'Snippet name'}}
              <v-chip v-if="!snippet.hasOwnProperty('isLiked') || !snippet.isLiked" class="ma-2" color="orange"
                      text-color="white">
                <v-icon v-if="snippet.isLiked" left>mdi-star</v-icon>
                <v-icon v-if="!snippet.isLiked" left>mdi-star-outline</v-icon>
                {{snippet.likes.users.length}}
              </v-chip>
            </v-card-title>
            <v-card-text>
              <v-row align="left" class="mx-0"></v-row>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-actions>
              <v-btn color="deep-purple lighten-2" text @click="viewSnippet">View</v-btn>
              <v-subheader>by {{snippet.userId.name}}</v-subheader>
              <v-subheader>{{snippet.date | moment('MM.DD.YYYY h:mm:ss')}}</v-subheader>
            </v-card-actions>

          </v-card>
        </v-col>
      </v-row>
    </v-container>


    <v-row>
      <v-dialog v-model="viewSnippetDialog" fullscreen hide-overlay transition="dialog-bottom-transition" text-left >
        <v-card >
          <v-toolbar dark color="primary" >
            <v-btn icon dark @click="viewSnippetDialog = false" >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Snippet</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-row>
            <v-col class="pa-5">
              <h1>{{currentSnippet.title ? currentSnippet.title : 'Snippet name'}}</h1>
              Snippet contents:
              <pre>{{currentSnippet.contents}}</pre>
              <h2>Tags</h2>
              <v-chip class="ma-2" v-for="tag in currentSnippet.tags">{{tag}}</v-chip>
            </v-col>
          </v-row>

        </v-card>
      </v-dialog>


      <v-dialog v-model="signUpDialog" persistent max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">Sign up</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="signUpForm" v-model="signUpFormValid" lazy-validation>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="signUpForm.name" label="Name*" persistent-hint required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="signUpForm.username" label="Username*" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="signUpForm.password" label="Password*" type="password" required></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            </v-form>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="signUpDialog = false">
              Close
            </v-btn>
            <v-btn color="blue darken-1" text @click="signUpSubmit()">
              Sign Up
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="logInDialog" persistent max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">Log in</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="logInForm.username" label="Username*" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="logInForm.password" label="Password*" type="password" required></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="logInDialog = false">
              Close
            </v-btn>
            <v-btn color="blue darken-1" text @click="logInSubmit()">
              Log in
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="createSnippetDialog" persistent max-width="700px">
        <v-card>
          <v-card-title>
            <span class="headline">Create Snippet</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="newSnippet.title" label="Title*" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea v-model="newSnippet.contents" label="Contents" required></v-textarea>
                </v-col>
                <v-col cols="12">
                  <v-combobox
                    v-model="newSnippet.tags"
                    :items="tags"
                    :search-input.sync="tagSearch"
                    hide-selected
                    hint="Maximum of 5 tags"
                    label="Tags*"
                    multiple
                    persistent-hint
                    small-chips
                  >
                    <template v-slot:no-data>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title>
                            No results matching "<strong>{{ tagSearch }}</strong>". Press <kbd>enter</kbd> to create a new tag
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </template>
                  </v-combobox>
                </v-col>
                <v-col cols="12">
                  <v-select v-model="newSnippet.type" :items="snippetTypes" label="Type*" required></v-select>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="createSnippetDialog = false">
              Close
            </v-btn>
            <v-btn color="blue darken-1" text @click="createSnippetSubmit()">
              Create
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>


    </v-row>

    <v-fab-transition v-if="isLoggedIn">
      <v-btn color="purple" fab large dark bottom left class="floating-btn" @click="createSnippetDialog = true">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>

  </div>
</template>

<script>
  // @ is an alias to /src
  import LayoutHome from '@/layouts/LayoutHome.vue'
  import axios from 'axios';
  import router from "@/router";

  export default {
    name: 'Home',
    components: {},
    data() {
      return {
        snippets: [],
        viewSnippetDialog: false,
        signUpDialog: false,
        logInDialog: false,
        createSnippetDialog: false,
        currentSnippet: {"likes":{"users":[]},"tags":[],"title": null,"contents": null,"type":"shared","date":null,"userId":null},
        newSnippet: {title: null, contents: null, tags: [], type: null},
        snippetTypes: ["shared", "personal"],
        tags: [],
        tagSearch: null,
        isLoggedIn: false,

        signUpForm: {
          name: null,
          username: null,
          password: null
        },
        logInForm: {
          username: null,
          password: null
        },
        signUpFormValid: true,
        loginFormValid: true
      }
    },
    methods: {
      viewSnippet() {
        this.viewSnippetDialog = true;
      },
      signUpSubmit() {
        axios.post('/api/auth/signup', this.signUpForm)
          .then(res => {
            this.signUpDialog = false;
            console.log(res.data);
          })
          .catch(err => {
            console.log(err)
          })
      },
      logInSubmit() {
        axios.post('/api/auth/login', this.logInForm)
          .then(res => {
            this.isLoggedIn = true;
            this.logInDialog = false;
            console.log(res.data);
          })
          .catch(err => {
            console.log(err)
        })
      },
      createSnippetSubmit() {
        axios.post('/api/snippets', this.newSnippet)
          .then(res => {
            this.createSnippetDialog = false;
            console.log(res.data);
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    created() {
      this.$emit('update:layout', LayoutHome)
    },
    mounted() {
      axios.get('/api/snippets')
        .then(res => {
          this.snippets = res.data;
          if (this.snippets.length > 1) {
            this. currentSnippet = this.snippets[0];
          }
        });
      axios.get('/api/tags')
        .then(res => {
          let tags = [];
          res.data.forEach((item, index) => {
            tags.push(item.name);
          });
          this.tags = tags;
        })
      .catch();
    }
  }
</script>

<style>
  .floating-btn {
    bottom: 15px;
    right: 15px;
    position: fixed;
  }
</style>
