/* import React, { useState } from 'react';
import './AddPost.css';
import { useDispatch } from 'react-redux'
import { addPost } from '../redux/actions/postActions'

const AddPost = () => {
    const [selectedImage, setSelectedImage] = useState("")
    const [newPost, setNewPost] = useState({
        description: ''
    })

    const handleImageChange = (e) => {
        if (e.target.files.length) {
            //display image
            const myImage = e.target.files[0]
            const reader = new FileReader()
            reader.readAsDataURL(myImage)
            reader.onloadend = () => {
                setSelectedImage(reader.result)
                setNewPost({ ...newPost, image: reader.result })
            }
        }

    }

    const dispatch = useDispatch()
    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(addPost(newPost))
     
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Contact Form :</h1>
                <img name="preview" style={{ height: "200px" }} src={selectedImage || "images/product_default.png"} alt="preview" />
                <input accept="image/*" type="file" name="image" onChange={handleImageChange}  ></input>
                <input name="description" onChange={(e) => setNewPost({ ...newPost, description: e.target.value })} placeholder="description" value={newPost.description} type="text"></input>
                <button className="btn_save_article" type="submit">save</button>
    
                    <div>
                      
                        <label>
                            <span>Your name</span><input id="name" type="text" name="name" />
                        </label>
                        <label>
                            <span>Your name</span><input id="name" type="text" name="name" />
                        </label> <label>
                            <span>Your name</span><input id="name" type="text" name="name" />
                        </label>

                        <label>
                            <span>Email Address</span><input id="email" type="text" name="email" />
                        </label>

                        <label>
                            <span>Subject</span><input id="subject" type="text" name="subject" />
                        </label>

                        <label>
                            <span>Message</span><textarea id="feedback" name="feedback"></textarea>
                            <input type="button" value="Submit Form" />
                        </label>

                    </div>
            
            </form>
        </div>
    )
}

export default AddPost
 */