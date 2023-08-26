
                
                    <template>
                        <div>
                          <div v-if="isAdmin">
                         
                            
                            <!-- Admin panel content -->
                            <div style="max-width: 800px; margin: 0 auto; padding: 20px;">
                                <h1>Welcome Back Admin</h1>
                                <p v-if="updateMessage" style="color: green;">{{ updateMessage }}</p>
<button style="color:rgb(255, 255, 255);background-color: red;" @click="confirmLogout">Logout of ADMIN</button>

                              <p>Welcome to our About Us page. We are a passionate team dedicated to providing amazing services to our customers.</p>
                              <!-- Add more content here -->
                            </div>
                            <div style="max-width: 800px; margin: 0 auto; padding: 20px;">
        <button style="color:rgb(255, 255, 255);background-color: rgb(23, 133, 13);font-size: 24px;" @click="showAddBlogPopup = true">Add Blog +</button>
      
        <!-- You can add other buttons or actions here if needed -->
      </div>
   <!-- Display the list of blogs -->
   <div style="max-width: 800px; margin: 0 auto; padding: 20px;">
  <h2>Blogs total: ({{ blogs.length }})</h2>
  <ul>
    <li v-for="blog in blogs" :key="blog.id">
        <router-link :to="`/blog/${blog.name}`">
  <span>{{ blog.title }}</span>
</router-link>
      <button style="background-color: rgb(0, 88, 88);" @click="showEditBlog(blog)">Edit blog</button>

    </li>
  </ul>
</div>

<div v-if="showAddBlogPopup" class="popup">

  <!-- Add Blog form content -->
  <h2>Add Blog</h2>
  <label>Title:</label>
  <input type="text" v-model="newBlog.title">
  <br>
  <label>Blog Content:</label>
  <textarea v-model="newBlog.content" style="    width: 90%;
    height: 256px;
"></textarea>
  <br>
  <label>URL: https://ommida.com/blog/</label>
  <input type="text" v-model="newBlog.url">
  <button  style="background:green" @click="addBlog">Create Blog</button>  <br>
  <button @click="showAddBlogPopup = false">Close popup</button>
</div>

<!-- Edit Blog Popup -->
<!-- Edit Blog Popup -->
<div v-if="showEditBlogPopup" class="popup">
  <!-- Edit Blog form content -->

  <h2>Edit Blog</h2>
  <label>Title:</label>
  <input type="text" v-model="selectedBlog.title">
  <label>Content:</label>
  <textarea v-model="selectedBlog.content" style="width:90%;height: 256px;"></textarea>
  <button @click="saveEditedBlog">Save & Update</button>

  <!-- Display the update message -->

  <button style="background: rgb(175, 63, 63);" @click="showDeleteConfirmation(selectedBlog)">Delete this blog</button>

  <br>
  <button @click="showEditBlogPopup = false">Close popup</button>
</div>


      <!-- Delete Blog Confirmation Popup -->
      <!-- Add the delete blog functionality if needed -->


                          <!-- Contact Requests Section -->
                          <div class="contact-section">
    <h2>Contact Requests: {{ contactRequests.length }} </h2>
    <ul class="contact-list">
      <transition-group name="slide">
        <li v-for="(request, index) in contactRequests" :key="request.id">
          <div class="contact-item" :class="{ 'slide-out': request.deleted }">
            <span class="number">{{ index + 1 }} - {{ request.name }}</span>
            <div class="contact-details">
              <!-- Existing contact details code... -->

              <!-- Display the uploaded image -->
              <p><strong>Profile Picture:</strong></p>
  <img v-if="request.picture" :src="`${this.$root.api_prefix}/api/get_uploaded_image/${request.picture}`" style="max-width: 200px; max-height: 200px;" alt="Profile Picture">
  <a v-else>No Picture</a>   <p><strong>Name:</strong> {{ request.name }}</p>
                    <p><strong>Country:</strong> {{ request.country }}</p>
                    <p><strong>Email:</strong> {{ request.email }}</p>
                    <p><strong>Phone:</strong> {{ request.phone }}</p>
                    <p><strong>Twitter:</strong> {{ request.twitter }}</p>
                    <p><strong>Instagram:</strong> {{ request.instagram }}</p>
                    <p><strong>Message:</strong> {{ request.message }}</p>

              <!-- Button to delete the contact request -->
              <button style="background:rgb(182, 37, 37);" @click="showConfirmationDialog(request.id)">X</button>
            </div>
          </div>
        </li>
      </transition-group>
    </ul>
    
  </div>




                          </div>
                      
                          <!-- Admin Login Popup -->
                          <div v-else class="popup">
                            <h2>Admin Login</h2>
                            <label>Username:</label>
                            <input type="text" v-model="usernameInput"><br>
                            <label>Password:</label>
                            <input type="password" v-model="passwordInput">
                            <button @click="login">Login</button>
                            <!-- Display "Wrong password" message when login fails -->
                            <p v-if="loginFailed" style="color: red;">Wrong password</p>
                          </div>
                        </div>
                      </template>
                      
                      <script>
                      import axios from 'axios';
                      
                      export default {
                        name: 'AdminView',
                        data() {
  return {
    isAdmin: this.$cookies.isKey('admin'),
    usernameInput: '',
    passwordInput: '',
    loginFailed: false,
    contactRequests: [], // New state to store the fetched contact requests
    showAddBlogPopup: false,
    newBlog: {
      title: '',
      content: '',
      url: '', // Add this property for the blog URL
    },
     
    
    showEditBlogPopup: false,
    selectedBlog: null,
  
      updateMessage: '', // New state to store the update message
   
    blogs: [], // New state to store the fetched blogs
  };
},
                        created() {
                          this.fetchContactRequests();
                          this.fetchBlogs(); 
                        },
                        methods: {
                            getImageUrl(base64Data) {
    if (!base64Data || base64Data.length === 0) {
      return require('@/assets/placeholder-image.png'); // Replace with a placeholder image URL
    }

    const base64String = btoa(String.fromCharCode(...new Uint8Array(base64Data)));
    const mimeType = 'image/jpeg'; // You may need to adjust the MIME type based on your image format
    return `data:${mimeType};base64,${base64String}`;
  }, confirmLogout() {
    const confirmation = confirm("Click OK to Confirm you want to delete this session as admin (Yo will have to login agian)?");
    if (confirmation) {
      this.$router.push('/');
      this.$cookies.remove('admin');
    }
  },
                            addBlog() {
  // Make an API call to add the new blog
  axios
    .post(this.$root.api_prefix+'/api/add_blogs', this.newBlog)
    .then((response) => {
      // Add the new blog to the local state
      console.log(response.data)
      this.blogs.push(response.data);
      this.newBlog.title = ''; // Reset the title after adding the blog
      this.newBlog.content = ''; // Reset the content after adding the blog
      this.newBlog.url = ''; // Reset the URL after adding the blog
      this.showAddBlogPopup = false;
    })
    .catch((error) => {
      console.error('Error adding blog:', error);

      
      // Handle the error if needed
    });
},

      // Show the Add Blog Popup
      showAddBlog() {
        this.showAddBlogPopup = true;
      },

      // Show the Edit Blog Popup with the selected blog data
      showEditBlog(blog) {
        this.selectedBlog = { ...blog };
        this.showEditBlogPopup = true;
      },

      // Save the edited blog
      saveEditedBlog() {
        // Make an API call to update the blog
        axios
          .put(`${this.$root.api_prefix}/api/blogs/${this.selectedBlog.id}`, this.selectedBlog)
          .then((response) => {
            // Update the local state with the edited blog
            const index = this.blogs.findIndex((blog) => blog.id === this.selectedBlog.id);
            if (index !== -1) {
              this.blogs.splice(index, 1, this.selectedBlog);
            }
            this.showEditBlogPopup = false;
            // Set the update message
            this.updateMessage += response.data.message;
          })
          .catch((error) => {
            console.error('Error updating blog:', error);
            // Handle the error if needed
          });
      },

      // Show the Delete Blog Popup with the selected blog data
      showDeleteBlog(blog) {
        this.selectedBlog = { ...blog };
        this.showDeleteBlogPopup = true;
      },


      // Fetch blogs from the API
      fetchBlogs() {
        axios
          .get(`${this.$root.api_prefix}/api/blogs`) // Replace '/api/blogs' with your server endpoint
          .then((response) => {
            this.blogs = response.data;
          })
          .catch((error) => {
            console.error('Error fetching blogs:', error);
            // Handle the error if needed
          });
      },

  
                            getPictureUrl(pictureData) {
                          if (!pictureData || pictureData.length === 0) {
                            // If the picture data is null or empty, return a placeholder image URL or handle it accordingly
                            return require('../assets/logo_clean.png');
                          }
                    
                          // Construct the data URI for the image
                          const base64String = btoa(String.fromCharCode(...new Uint8Array(pictureData)));
                          const mimeType = 'image/jpeg'; // You may need to adjust the MIME type based on your image format
                          return `data:${mimeType};base64,${base64String}`;
                        },
    

    // Show the Edit Blog Popup with the selected blog data



                          showConfirmationDialog(requestId) {
                            if (window.confirm('Are you sure you want to delete? You may not get this back.')) {
                              this.markAsDeleted(requestId);
                            }
                          },
                      
                          markAsDeleted(requestId) {
                            axios.put(`${this.$root.api_prefix}/api/contact-requests/${requestId}`)
                              .then(() => {
                                // Find the contact request in the local array and set 'deleted' to true
                                const requestToUpdate = this.contactRequests.find(request => request.id === requestId);
                                if (requestToUpdate) {
                                  requestToUpdate.deleted = true;
                                  this.updateMessage += "Blog has been deleted "
                                  // Use a setTimeout to remove the item from the list after the animation finishes
                                  setTimeout(() => {
                                    this.contactRequests = this.contactRequests.filter(request => !request.deleted);
                                  }, 300); // 300ms should match the duration of the CSS transition
                                }
                              })
                              .catch(error => {
                                console.error('Error marking contact request as deleted:', error);
                              });
                          },
                          showDeleteConfirmation(blog) {
    const confirmation = window.confirm(
      `Are you sure you want to delete the blog "${blog.title}"? This action cannot be undone and you'll lose all the viewers.`
    );

    if (confirmation) {
      this.deleteBlog(blog);
    }
  },  deleteBlog(blog) {
    // Make an API call to delete the blog
    axios
    .delete(`${this.$root.api_prefix}/api/blogs_delete/${blog.id}`)
      .then(() => {
        // Remove the blog from the local state
        this.blogs = this.blogs.filter((item) => item.id !== blog.id);
        this.selectedBlog = null; // Reset selectedBlog after deletion
        this.showEditBlogPopup = false; // Close the Edit Blog Popup
    })
      .catch((error) => {
        console.error('Error deleting blog:', error);
        // Handle the error if needed
      });
  },
                          login() {
                            const username = '1234';
                            const password = '1234';
                            if (this.usernameInput === username && this.passwordInput === password) {
                              this.isAdmin = true;
                              this.loginFailed = false;
                              this.fetchContactRequests(); // Fetch contact requests after successful login
                              this.$cookies.set("admin", true) 
                            } else {
                              this.loginFailed = true;
                            }
                          },
                      
                          fetchContactRequests() {
                          // Make an Axios GET request to fetch the contact requests from the server
                          axios.get(`${this.$root.api_prefix}/api/contact-requests`) // Replace '/api/contact-requests' with your server endpoint
                            .then(response => {
                              this.contactRequests = response.data;
                            })
                            .catch(error => {
                              console.error('Error fetching contact requests:', error);
                            });
                        },
                        },
                      };
                      </script>
                      
                      <style>
                    .slide-out {
                      max-height: 0;
                      overflow: hidden;
                      transition: max-height 0.3s ease-out;
                    }
                    .contact-list {
                      list-style-type: none;
                      padding: 0;
                    }
                    
                    .contact-item {
                      background-color: #f0f0f0;
                      padding: 10px;
                      margin-bottom: 10px;
                      display: flex;
                      align-items: center;
                    }
                    
                    .number {
                      font-size: 18px;
                      margin-right: 10px;
                      background-color: #007bff;
                      color: #fff;
                      padding: 8px 12px;
                      border-radius: 50%;
                    }
                    
                    .contact-details {
                      flex: 1;
                    }
                    
                      /* Style the popups here */
                      .popup {
                        position: fixed;
    top: 100px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: #fff;
    padding: 20px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
                      }
                      .contact-section {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
                      </style>
                      