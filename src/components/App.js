import React from 'react';
import Container from "./Container";
import SocialNetworks from "./SocialNetworks";
import logoFacebook from "../images/icon-facebook.svg";
import logoTwitter from "../images/icon-twitter.svg";
import logoInstagram from "../images/icon-instagram.svg";
import logoYoutube from "../images/icon-youtube.svg";
import logoFlecheUp from "../images/icon-up.svg";
import logoFlecheDown from "../images/icon-down.svg";
import ButtonNumberSocialMedia from "./ButtonNumberSocialMedia";
import ButtonNumber2SocialMedia from "./ButtonNumber2SocialMedia";
import ButtonNumber3SocialMedia from "./ButtonNumber3SocialMedia";
import ButtonNumber4SocialMedia from "./ButtonNumber4SocialMedia";
import Text from "./Text";
import CardsComponent from './CardsComponent.jsx';



import useLocalStorage from 'use-local-storage';



function App() {
  
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const handleSwitchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }
  
    return (
      
   

   
      <div className="app" data-theme={theme}>
      <Container>
    
          <div className="headingCard">
              
                <CardsComponent as='cards' onHover='onHover'>
             
                    <div as='cards' onHover='onHover'>
                      <Text as="h1">Social Media Dashboard</Text>
                      <Text as="h3">Total Followers: 23,004</Text>
                    </div>
                   
               </CardsComponent>
        
                  <div className="themeToggle">
                        <CardsComponent  as='cards' onHover='onHover'>
                                <div className="theme-toggle" as='cards' onHover='onHover'>
                                  <Text as="h4"><span>Dark Mode <i onClick={handleSwitchTheme} className="fa fa-toggle-on" aria-hidden="true"> </i> </span>   </Text>
                             
                                                      
                                </div>
                
                        </CardsComponent>
                    </div>
           </div>

        <div className="cards">
      
        
          <CardsComponent as='cards' onHover='onHover'>
            
                <div className="cards__items">
                  <SocialNetworks src={logoFacebook} alt="logo facebook" />
                    <Text as="span">@nathanf</Text>
                    <ButtonNumberSocialMedia />
                                
                    <Text as="h2">FOLLOWERS</Text>
                    <SocialNetworks src={logoFlecheUp} alt="logo flecheUp" />
                    <Text as="span">12 Today</Text>
                </div>
                  
          </CardsComponent>

            <CardsComponent as='cards' onHover='onHover'>
                  <div className="cards__items">
                      <SocialNetworks src={logoTwitter} alt="logo twitter" />
                      <Text as="span">@nathanf</Text>
                      <ButtonNumber2SocialMedia />
                      <Text as="h2">FOLLOWERS</Text>
                      <SocialNetworks src={logoFlecheUp} alt="logo flecheUp" />
                      <Text as="span">90 Today</Text>
                  </div>
          </CardsComponent>

          <CardsComponent as='cards' onHover='onHover'>
                  <div className="cards__items cards__realnathanf">
                      <SocialNetworks src={logoInstagram} alt="logo instagram" />
                      <Text as="span">@realnathanf</Text>
                      <Text as="h1">11K</Text>
                      <Text as="h2">FOLLOWERS</Text>
                      <SocialNetworks src={logoFlecheUp} alt="logo flecheUp" />
                      <Text as="span">1099 Today</Text>
                  </div>
          </CardsComponent>
  
          <CardsComponent as='cards' onHover='onHover'>
                    <div className="cards__items cards__subscribers">
                        <SocialNetworks src={logoYoutube} alt="logo youtube" />
                        <Text as="span">@nathan F.</Text>
                        <ButtonNumber4SocialMedia />
                        <Text as="h2">SUBSCRIBERS</Text>
                        <SocialNetworks src={logoFlecheDown} alt="logo flecheDown" />
                        <Text as="span"><span className="subscribers">144 Today</span></Text>
                    </div>
          </CardsComponent>
       
        </div>

        {/* ===================================================================== */}
       
          <CardsComponent as='cards' onHover='onHover'>
                      <Text as="h1">OverView - Today</Text>
          </CardsComponent>
        

          <div className="cards">
                        
                    <CardsComponent as='cards' onHover='onHover'>
                          
                            <div className="cards__items">
                              <Text as="span">Page Views</Text>
                              <SocialNetworks src={logoFacebook} alt="logo facebook" />
                              <ButtonNumber3SocialMedia>
                              {/* <Text as="h1">87</Text> */}
                              </ButtonNumber3SocialMedia>
                              <SocialNetworks src={logoFlecheUp} alt="logo flecheUp" />
                              <Text as="span">3%</Text>
                            </div>
                  </CardsComponent>

                  <CardsComponent as='cards' onHover='onHover'>
                        
                          <div className="cards__items">
                              <Text as="span">Likes</Text>
                              <SocialNetworks src={logoFacebook} alt="logo facebook" />
                              <Text as="h1">52</Text>
                              <SocialNetworks src={logoFlecheUp} alt="logo flecheUp" />
                              <Text as="span">2%</Text>
                          </div>
                  </CardsComponent>

                  <CardsComponent as='cards' onHover='onHover'>
                            {/* <div className="cards__items"> */}
                          <div className="cards__items">
                              <Text as="span">Likes</Text>
                              <SocialNetworks src={logoInstagram} alt="logo instagram" />
                              <Text as="h1">5462</Text>
                              <SocialNetworks src={logoFlecheUp} alt="logo flecheUp" />
                              <Text as="span">2257%</Text>
                          </div>
                  </CardsComponent>
                  <CardsComponent as='cards' onHover='onHover'>
                            {/* <div className="cards__items"> */}
                          <div className="cards__items">
                              <Text as="span">Page Views</Text>
                              <SocialNetworks src={logoInstagram} alt="logo instagram" />
                              <Text as="h1">52K</Text>
                              <SocialNetworks src={logoFlecheUp} alt="logo flecheUp" />
                              <Text as="span">1375%</Text>
                          </div>
                  </CardsComponent>

               
          </div>

 
          <div className="cards">
                
                        <CardsComponent as='cards' onHover='onHover'>
                             
                              <div className="cards__items">
                                  <Text as="span">Retweets</Text>
                                  <SocialNetworks src={logoTwitter} alt="logo twitter" />
                                  <Text as="h1">117</Text>
                                  <SocialNetworks src={logoFlecheUp} alt="logo flecheUp" />
                                  <Text as="span">303%</Text>
                              </div>
                      </CardsComponent>
      
                      <CardsComponent as='cards' onHover='onHover'>
                              
                              <div className="cards__items">
                                  <Text as="span">Likes</Text>
                                  <SocialNetworks src={logoTwitter} alt="logo twitter" />
                                  <Text as="h1">507</Text>
                                  <SocialNetworks src={logoFlecheUp} alt="logo flecheUp" />
                                  <Text as="span">553%</Text>
                              </div>
                      </CardsComponent>
      
                      <CardsComponent as='cards' onHover='onHover'>
                              
                              <div className="cards__items">
                                  <Text as="span">Likes</Text>
                                  <SocialNetworks src={logoYoutube} alt="logo youtube" />
                                  <Text as="h1">107</Text>
                                  <SocialNetworks src={logoFlecheUp} alt="logo flecheUp" />
                                  <Text as="span">19%</Text>
                              </div>
                      </CardsComponent>
                      <CardsComponent as='cards' onHover='onHover'>
                                {/* <div className="cards__items"> */}
                              <div className="cards__items">
                                  <Text as="span">Total Views</Text>
                                  <SocialNetworks src={logoYoutube} alt="logo youtube" />
                                  <Text as="h1">1407</Text>
                                  <SocialNetworks src={logoFlecheUp} alt="logo flecheUp" />
                                  <Text as="span">12%</Text>
                              </div>
                      </CardsComponent>
                                
            </div>
                
      </Container>
      </div>
     
  
  


    
  );
}

export default App;
