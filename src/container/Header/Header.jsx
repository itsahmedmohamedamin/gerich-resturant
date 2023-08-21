import React from 'react';
import './Header.css';
import { SubHeading } from '../../components';
import { images } from '../../constants'; // Make sure you have this import

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase your New Flavour" />
      <h1 className='app__header-h1'>The Key to the Fine Dining</h1>
      <p className='p__opensan' style={{ margin: '2rem 0' }}>
        Sit tellus lobortis sed senectus vivamus molestie. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem eum nesciunt autem molestiae vitae
      </p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img'/>
    </div>
  </div>
);

export default Header;
