const HeroSection = () => {
    return (
      <main className="hero container">
        <div className="hero-content">
          <h1>OWN THE BEST</h1>
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Expedita, eius cumque? Ut pariatur, vero eveniet minima <br />
             explicabo officia quasi non eligendi unde. Delectus, enim?
          </p>
  
          <div className="hero-btn">
            <button>Shop Now </button>
            <button className="secondary-btn">Category</button>
          </div>
  
          <div className="shopping">
            <p>Also Available On</p>
  
            <div className="brand-icons">
              <img src="https://th.bing.com/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?w=162&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="amazon-logo" />
              <img src="https://th.bing.com/th/id/OIP.RzC1m_L15K7p94lAzF7bTwHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="flipkart-logo" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://th.bing.com/th?id=OIP.TgapDp2LewpR8jtxFznuKgHaE7&w=306&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="hero-image" />
        </div>
      </main>
    );
  };
  
  export default HeroSection;