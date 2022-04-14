import React,{Fragment} from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
  return (
   <Fragment>
     <header className={classes.header}>
       <h1>React EC</h1>
       <HeaderCartButton />
     </header>
     <div className={classes['main-image']}>
      <img src={mealsImage} alt="foods ingredients" />
     </div>
   </Fragment>
  )
}

export default Header
