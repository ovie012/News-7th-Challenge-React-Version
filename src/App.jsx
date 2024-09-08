import { useState } from 'react'
import './App.css'

function App() {
  const [mobileNav, setMobileNav] = useState(false);

  const openMobileNav = () => {
    setMobileNav(true);
  };

  const closeMobileNav = () => {
    setMobileNav(false);
  }; 

  return (
    <>
      <main>
        <div className="container">
          <div className="header grid">
              <div className="head-logo">
                  <img src="/logo.svg" alt="banner" />
              </div>
              <span className="mobile">
                  <img onClick={openMobileNav} src="/icon-menu.svg" alt="click for navigation" />
              </span>
              {!mobileNav ? (
                <nav className="nav">
                    <ul>
                        <li>Home</li>
                        <li>New</li>
                        <li>Popular</li>
                        <li>Trending</li>
                        <li>Categories</li>
                    </ul>
                </nav>
              ) : (
                <nav className="nav-2">
                    <span className="close">
                        <img onClick={closeMobileNav} src="/icon-menu-close.svg" alt="click to close" />
                    </span>
                    <ul>
                        <li>Home</li>
                        <li>New</li>
                        <li>Popular</li>
                        <li>Trending</li>
                        <li>Categories</li>
                    </ul>
                </nav>
              )}
          </div>
          <div className="first-body grid">
              <div className="first-body-img">
                  <img className="image-desktop" src="/image-web-3-desktop.jpg" alt="web-3" />
                  <img className="image-mobile" src="/image-web-3-mobile.jpg" alt="banner" />
              </div>
              <div className="first-body-texts">
                  <h1>The Bright Future of Web 3.0?</h1>
                  <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                      But is it really fulfilling its promise?</p>
                  <button>Read more</button>
              </div>
          </div>
          <div className="news grid">
              <h1>New</h1>
              <section className="each">
                  <h6>Hydrogen VS Electric Cars</h6>
                  <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
              </section>
              <div className="span"></div>
              <section className="each">
                  <h6>The Downsides of AI Artistry</h6>
                  <p>What are the possible adverse effects of on-demand AI image generation?</p>
              </section>
              <div className="span"></div>
              <section className="each">
                  <h6>Is VC Funding Drying Up?</h6>
                  <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
              </section>
          </div>
          <div className="end grid">
              <section className="ending">
                  <div className="img">
                      <img src="/image-retro-pcs.jpg" alt="retro PCs image" />
                  </div>
                  <div className="ending-texts">
                      <h2>01</h2>
                      <h6>Reviving Retro PCs</h6>
                      <p>What happens when old PCs are given modern upgrades?</p>
                  </div>
              </section>
              <section className="ending">
                  <div className="img">
                      <img src="/image-top-laptops.jpg" alt="Top laptops image" />
                  </div>
                  <div className="ending-texts">
                      <h2>02</h2>
                      <h6>Top 10 Laptops of 2022</h6>
                      <p>Our best picks for various needs and budgets.</p>
                  </div>
              </section>
              <section className="ending">
                  <div className="img">
                      <img src="/image-gaming-growth.jpg" alt="gaming growth image" />
                  </div>
                  <div className="ending-texts">
                      <h2>03</h2>
                      <h6>The Growth of Gaming</h6>
                      <p>How the pandemic has sparked fresh opportunities.</p>
                  </div>
              </section>
          </div>
        </div> 
      </main>
    </>
  )
}

export default App

//LEGEND.DEV coded this

















//A better way to code the above

// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

//   const toggleMobileNav = () => setIsMobileNavOpen((prev) => !prev);

//   const navItems = ['Home', 'New', 'Popular', 'Trending', 'Categories'];

//   return (
//     <main>
//       <div className="container">
//         <header className="header grid">
//           <div className="head-logo">
//             <img src="/logo.svg" alt="banner" />
//           </div>
//           <span className="mobile" onClick={toggleMobileNav}>
//             <img src={isMobileNavOpen ? "/icon-menu-close.svg" : "/icon-menu.svg"} alt="toggle navigation" />
//           </span>
//           <nav className={isMobileNavOpen ? "nav-2" : "nav"}>
//             <ul>
//               {navItems.map((item) => (
//                 <li key={item}>{item}</li>
//               ))}
//             </ul>
//           </nav>
//         </header>

//         <section className="first-body grid">
//           <div className="first-body-img">
//             <img className="image-desktop" src="/image-web-3-desktop.jpg" alt="web-3" />
//             <img className="image-mobile" src="/image-web-3-mobile.jpg" alt="banner" />
//           </div>
//           <div className="first-body-texts">
//             <h1>The Bright Future of Web 3.0?</h1>
//             <p>
//               We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
//               But is it really fulfilling its promise?
//             </p>
//             <button>Read more</button>
//           </div>
//         </section>

//         <section className="news grid">
//           <h1>New</h1>
//           {[
//             { title: 'Hydrogen VS Electric Cars', description: 'Will hydrogen-fueled cars ever catch up to EVs?' },
//             { title: 'The Downsides of AI Artistry', description: 'What are the possible adverse effects of on-demand AI image generation?' },
//             { title: 'Is VC Funding Drying Up?', description: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.' },
//           ].map((newsItem, index) => (
//             <div key={index}>
//               <section className="each">
//                 <h6>{newsItem.title}</h6>
//                 <p>{newsItem.description}</p>
//               </section>
//               {index < 2 && <div className="span"></div>}
//             </div>
//           ))}
//         </section>

//         <section className="end grid">
//           {[
//             { img: "/image-retro-pcs.jpg", title: 'Reviving Retro PCs', description: 'What happens when old PCs are given modern upgrades?', number: '01' },
//             { img: "/image-top-laptops.jpg", title: 'Top 10 Laptops of 2022', description: 'Our best picks for various needs and budgets.', number: '02' },
//             { img: "/image-gaming-growth.jpg", title: 'The Growth of Gaming', description: 'How the pandemic has sparked fresh opportunities.', number: '03' },
//           ].map((endItem) => (
//             <section key={endItem.number} className="ending">
//               <div className="img">
//                 <img src={endItem.img} alt={endItem.title} />
//               </div>
//               <div className="ending-texts">
//                 <h2>{endItem.number}</h2>
//                 <h6>{endItem.title}</h6>
//                 <p>{endItem.description}</p>
//               </div>
//             </section>
//           ))}
//         </section>
//       </div>
//     </main>
//   );
// }

// export default App;
