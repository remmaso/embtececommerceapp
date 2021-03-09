import React from 'react'
import {Container, Col} from 'react-bootstrap'

const About = () => {
    return (
        <Container>
           
    <header id="page-header">
    <div className="container">
      <div className="row">
        <div className="col-md-6 m-auto text-center">
          <h1>About Us</h1>
          <p>Embtec, Providing unique solutions... </p>
        </div>
      </div>
    </div>
  </header>
    
    <section id="about" class="py-3">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Who we Are</h2>
          <p>Embtec Konzultz is a privately owned Consulting firm, which started business in October 2015, with the objective of focusing on customer service in the Thrift and Savings Scheme and Developing IT Hub for students and Corperates through building dynamic softwares with latest Technologies</p>
          <p>With unwavering passion for Performance Enhancing Corporate Culture, we focus majorly on  total IT Training and Certifications backed up with in-house Software Development which is aimed at transforming and re-defining the individual to positively impact the world.

            As we compete to become a global brand, we create class and impressionable branding for personalities and organisations by providing a rich blend of ethics, excellent service experience and best work practice and training that will leverage skills for the next century. </p>
            <div className="col-md-6">
          <img src="/https://source.unsplash.com/random/700x700/?technology" alt="" className="img-fluid rounded-circle d-none d-md-block about-img" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="home-heading" class="p-5">
    <div className="dark-overlay">
      <div className="row">
        <div className="col">
          <div className="container pt-5">
            <h1>Management</h1>
            <p className="d-none d-md-block"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="explore-section" class="bg-light text-muted py-5">
    <div className="container">
      <div className="row">
      <Col className='text-left py-3'>
            <img src="/images/images1/boss.png" alt=""  className="/Image-fluid mb-3"/>
            </Col>
          <div className="col-md-6">
          <h3>Mr Emmanuel Okoro</h3>
          <div><h3>FOUNDER/CEO</h3></div>
          <p>Mr Okoro ( FCA, FICA, M.Sc, KSJI ) is a consummate Finance professional with over 26years stint in Accounting, Banking and Treasury Management garnered from Banking and Telecommunication industry-giants. Also, a passionate practitioner in the Health and Wellness industry.A family person, happily married to Lady Beatrice Chikamnele Okoro with three lovely daughters
          A faith teacher who relaxes listening to good music and reading. 
        </p>
        </div>
      </div>
    </div>
  </section>
    
  <section id="explore-section" class="bg-light text-muted py-5">
    <div className="container">
      <div className="row">
      <Col className='text-left py-3'>
            <img src="/images/images1/good.png" alt=""  className="/Image-fluid mb-3"/>
            </Col>
          <div className="col-md-6">
          <h3>Mr Ralph Emmason</h3>
          <div><h3>Software Engineer</h3></div>
          <p>Mr Emmason (B.Sc Computer Science)  has a wealth of experience in Technologies and Archetecture having worked in various technological companies like Microsoft, Cisco and Banks, in the early days of internet banking he developed a transactionl saver application linking to e-wallet for the bank that earned him an award, also ebay. He is rated by American international company called UPWORK as a TOP Software Engineer. He is a Father
          </p>
        </div>
      </div>
    </div>
  </section>
  
  </Container>
            
           
      
      
      
    )
}

export default About
