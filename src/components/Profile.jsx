import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import '../css/ToDo.css';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { FiSave } from 'react-icons/fi';
import { BsTrash } from 'react-icons/bs';
import { VscSignOut } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

const Profile = () => {

  return (
    <>
      <NavBar />
      <div className="pic">
        <img
          className="proPic"
          // src={}
          // alt="profile"
        />
      </div>
      <form className="d-flex flex-column" >
        <div className="proForm">
          <div className="fileInput">
            <input
              type="file"
              className="file"
              id="file"
              accept="image/*"
            />
            <label htmlFor="file">
              <AiOutlineCloudUpload
                size={15}
                style={{ color: 'rgba(5, 95, 158, 1)' }}
              />{' '}
              Profile Photo{' '}
            </label>
          </div>
          <button className="ProfileButtons" type="submit">
            <FiSave size={15} style={{ color: 'rgba(5, 95, 158, 1)' }} /> Save
            Image
          </button>
        </div>
      </form>
      <div className="namedPlayer">
        <div className="nameEdit">
          <h2 className="usersName">
          </h2>
          <Link to="/profileedit" className="editLink">
            <span className="editProfile">Edit Profile</span>
          </Link>
        </div>

        <Link to="/chats" className="messageButton">
          <span className="messageButton1">Message</span>
        </Link>
      </div>
      <div className="favGames">
        <p className="consoles">Find me on:</p>
        <div className="mygameTags">
        </div>
      </div>
      <div className="trash">
        <button className="ProfileButtons" >
          <BsTrash size={15} style={{ color: 'rgba(5, 95, 158, 1)' }} /> Delete
          Account
        </button>
        <button className="ProfileButtons" >
          <VscSignOut size={15} style={{ color: 'rgba(5, 95, 158, 1)' }} />{' '}
          Logout
        </button>
      </div>
      <Footer />
    </>
  );
};
export default Profile
